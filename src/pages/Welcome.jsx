import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Welcome = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col items-center justify-center p-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-2xl text-center space-y-8"
            >
                <h1 className="text-5xl font-bold tracking-tight text-slate-800">
                    Voice-Over Perception Study
                </h1>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 text-left space-y-4">
                    <h2 className="text-2xl font-semibold mb-4">Consent & Instructions</h2>
                    <p className="text-lg leading-relaxed text-slate-600">
                        You are invited to participate in a research study comparing different types of voice-overs in video content.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-slate-600 text-lg">
                        <li>The study will take approximately <strong>5-10 minutes</strong>.</li>
                        <li>You will watch a short video and perform a reaction task.</li>
                        <li>Your responses are anonymous and will be used for research purposes only.</li>
                        <li>You may withdraw at any time by closing the browser window.</li>
                    </ul>
                </div>

                <div className="pt-4">
                    <button
                        onClick={() => navigate('/demographics')}
                        className="px-8 py-4 bg-blue-600 text-white rounded-xl text-xl font-semibold shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all transform hover:-translate-y-1 active:translate-y-0"
                    >
                        I Understand & Agree to Start
                    </button>
                    <p className="mt-4 text-sm text-slate-400">
                        By clicking start, you confirm you are 18 years or older.
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

export default Welcome;
