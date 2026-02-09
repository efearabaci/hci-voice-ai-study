import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useExperiment } from '../context/ExperimentContext';

const questions = [
    { id: 'trust', text: 'I trusted the speaker in the video.' },
    { id: 'honesty', text: 'The speaker sounded honest.' },
    { id: 'creepiness', text: 'The voice sounded creepy or unnatural.' },
    { id: 'knowledge', text: 'The speaker seemed knowledgeable about the topic.' },
    { id: 'human_like', text: 'The voice sounded like a real human.' },
    { id: 'mental_effort', text: 'How much mental effort was required to understand the speaker?' },
    { id: 'stress', text: 'Did you feel annoyed or stressed while listening to the voice?' },
    { id: 'word_distinction', text: 'How easy was it to distinguish individual words?' },
];

const LikertScale = ({ question, value, onChange }) => (
    <div className="mb-8 p-6 bg-white rounded-xl shadow-sm border border-slate-200">
        <p className="text-xl font-medium mb-4 text-slate-800">{question.text}</p>
        <div className="flex justify-between items-center sm:gap-4">
            {['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'].map((label, index) => {
                const score = index + 1;
                return (
                    <label key={score} className="flex flex-col items-center cursor-pointer group">
                        <input
                            type="radio"
                            name={question.id}
                            value={score}
                            checked={value === score}
                            onChange={() => onChange(question.id, score)}
                            className="w-6 h-6 text-blue-600 focus:ring-blue-500 mb-2 cursor-pointer"
                            required
                        />
                        <span className="text-sm text-slate-500 group-hover:text-blue-600 transition text-center max-w-[80px] hidden sm:block">
                            {label}
                        </span>
                    </label>
                );
            })}
        </div>
        <div className="flex justify-between w-full px-2 sm:hidden text-xs text-slate-400 mt-2">
            <span>Strongly Disagree</span>
            <span>Strongly Agree</span>
        </div>
    </div>
);

const Survey = () => {
    const navigate = useNavigate();
    const { submitSurvey } = useExperiment();
    const [responses, setResponses] = useState({});

    const handleResponseChange = (questionId, score) => {
        setResponses(prev => ({ ...prev, [questionId]: score }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        submitSurvey(responses);
        navigate('/results');
    };

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 overflow-y-auto py-12 px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-3xl mx-auto"
            >
                <h2 className="text-3xl font-bold mb-2 text-center text-slate-800">Post-Experiment Survey</h2>
                <p className="text-center text-slate-500 mb-10 text-lg">
                    Please rate your agreement with the following statements regarding the video you just watched.
                </p>

                <form onSubmit={handleSubmit}>
                    {questions.map(q => (
                        <LikertScale
                            key={q.id}
                            question={q}
                            value={responses[q.id]}
                            onChange={handleResponseChange}
                        />
                    ))}

                    <div className="flex justify-center mt-8">
                        <button
                            type="submit"
                            className="px-10 py-4 bg-green-600 text-white rounded-xl text-xl font-bold hover:bg-green-700 transition shadow-lg hover:shadow-xl transform active:scale-95"
                        >
                            Submit & See Results
                        </button>
                    </div>
                </form>
            </motion.div>
        </div>
    );
};

export default Survey;
