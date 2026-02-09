import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const Results = () => {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col items-center justify-center p-6">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="max-w-2xl w-full text-center space-y-8"
            >
                <div className="bg-white p-10 rounded-3xl shadow-xl border border-slate-100">
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle size={48} />
                    </div>

                    <h1 className="text-4xl font-bold text-slate-800 mb-4">Thank You!</h1>
                    <p className="text-xl text-slate-600 mb-8">
                        Your data has been successfully saved to our database. Your contribution is valuable to our research.
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

export default Results;
