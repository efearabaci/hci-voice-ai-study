import React, { createContext, useContext, useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
// uuid import removed - using crypto.randomUUID() instead

const ExperimentContext = createContext();

export const useExperiment = () => useContext(ExperimentContext);

export const ExperimentProvider = ({ children }) => {
    const [participantId, setParticipantId] = useState(null);
    const [group, setGroup] = useState(null); // 'A', 'B', 'C'
    const [demographics, setDemographics] = useState({ age: '', gender: '' });
    const [surveyResponses, setSurveyResponses] = useState({});
    const [isExperimentComplete, setIsExperimentComplete] = useState(false);

    // Initialize participant on mount
    useEffect(() => {
        // Check if we already have a participant ID in sessionStorage to persist across reloads
        let storedId = sessionStorage.getItem('participantId');
        let storedGroup = sessionStorage.getItem('group');

        if (!storedId) {
            storedId = crypto.randomUUID(); // Modern browsers support this
            sessionStorage.setItem('participantId', storedId);

            // Random assignment logic
            const groups = ['A', 'B', 'C'];
            storedGroup = groups[Math.floor(Math.random() * groups.length)];
            sessionStorage.setItem('group', storedGroup);
        }

        setParticipantId(storedId);
        setGroup(storedGroup);
    }, []);

    const updateDemographics = (data) => {
        setDemographics(data);
    };

    const submitSurvey = async (responses) => {
        setSurveyResponses(responses);

        // Prepare data payload
        const sessionData = {
            participantId,
            group,
            demographics,
            surveyResponses: responses,
            timestamp: new Date().toISOString(),
            userAgent: navigator.userAgent
        };

        try {
            await addDoc(collection(db, "experiments"), sessionData);
            console.log("Document written with ID: ", participantId);
            setIsExperimentComplete(true);
        } catch (e) {
            console.error("Error adding document: ", e);
            // Fallback? For now just log usage.
            setIsExperimentComplete(true); // Still letting them proceed to results
        }
    };

    const resetExperiment = () => {
        sessionStorage.clear();
        window.location.reload();
    };

    // simplified exportData for debugging/backup if needed
    const exportData = () => {
        return {
            participantId,
            group,
            demographics,
            surveyResponses,
            timestamp: new Date().toISOString(),
        };
    };

    return (
        <ExperimentContext.Provider
            value={{
                participantId,
                group,
                demographics,
                updateDemographics,
                surveyResponses,
                submitSurvey,
                isExperimentComplete,
                exportData,
                resetExperiment
            }}
        >
            {children}
        </ExperimentContext.Provider>
    );
};
