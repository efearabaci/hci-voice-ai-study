import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useExperiment } from '../context/ExperimentContext';

const Demographics = () => {
    const navigate = useNavigate();
    const { updateDemographics } = useExperiment();

    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        updateDemographics({ age, gender });
        navigate('/experiment');
    };

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col items-center justify-center p-6">
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="w-full max-w-md"
            >
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
                    <h2 className="text-3xl font-bold mb-6 text-slate-800">About You</h2>
                    <p className="mb-8 text-slate-500">Please provide some basic information to help us analyze the results.</p>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                        <label className="flex flex-col gap-2">
                            <span className="text-lg font-medium text-slate-700">Age</span>
                            <input
                                type="number"
                                value={age}
                                onChange={(e) => setAge(e.target.value)}
                                className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                                placeholder="e.g., 25"
                                min="18"
                                max="100"
                                required
                            />
                        </label>

                        <label className="flex flex-col gap-2">
                            <span className="text-lg font-medium text-slate-700">Gender</span>
                            <select
                                value={gender}
                                onChange={(e) => setGender(e.target.value)}
                                className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition appearance-none"
                                required
                            >
                                <option value="">Select an option</option>
                                <option value="female">Female</option>
                                <option value="male">Male</option>
                                <option value="non-binary">Non-binary</option>
                                <option value="prefer-not-to-say">Prefer not to say</option>
                            </select>
                        </label>

                        <button
                            type="submit"
                            className="mt-6 px-6 py-4 bg-blue-600 text-white rounded-xl text-xl font-semibold hover:bg-blue-700 active:scale-95 transition-all shadow-md"
                        >
                            Continue to Experiment
                        </button>
                    </form>
                </div>
            </motion.div>
        </div>
    );
};

export default Demographics;
