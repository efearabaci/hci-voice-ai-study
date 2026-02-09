import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useExperiment } from '../context/ExperimentContext';

const Experiment = () => {
    const navigate = useNavigate();
    const { group } = useExperiment();

    // Experiment State
    const [isPlaying, setIsPlaying] = useState(false);
    const [videoEnded, setVideoEnded] = useState(false);

    const videoRef = useRef(null);

    const handleVideoPlay = () => {
        setIsPlaying(true);
    };

    const handleVideoPause = () => {
        setIsPlaying(false);
    };

    const handleVideoEnd = () => {
        setVideoEnded(true);
        setIsPlaying(false);
    };

    const handleContinue = () => {
        navigate('/survey');
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-slate-900 text-white relative overflow-hidden">
            {/* Group Label (Only for Group C) */}
            {group === 'C' && (
                <div className="absolute top-4 right-4 bg-yellow-500 text-black px-4 py-2 rounded-full font-bold shadow-lg z-10">
                    AI Generated Voice
                </div>
            )}

            {/* Video Player Container */}
            <div className="relative w-full max-w-5xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl border border-slate-700">
                <video
                    ref={videoRef}
                    className="w-full h-full object-cover"
                    controls
                    onPlay={handleVideoPlay}
                    onPause={handleVideoPause}
                    onEnded={handleVideoEnd}
                    // Placeholder video
                    src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                />
            </div>

            {/* Instructions or Next Button */}
            <div className="mt-8 h-20 flex items-center justify-center">
                {!videoEnded ? (
                    <p className="text-slate-400 text-lg">
                        Please watch the video carefully to answer questions afterwards.
                    </p>
                ) : (
                    <button
                        onClick={handleContinue}
                        className="px-8 py-4 bg-blue-600 text-white rounded-xl text-xl font-bold shadow-lg hover:bg-blue-700 transition animate-bounce"
                    >
                        Continue to Survey
                    </button>
                )}
            </div>

            {/* Debug info (optional, remove in production) */}
            <div className="absolute bottom-2 left-2 text-xs text-slate-600">
                Group: {group} | ID: {useExperiment().participantId?.slice(0, 8)}...
            </div>
        </div>
    );
};

export default Experiment;
