import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ExperimentProvider } from './context/ExperimentContext';

import Welcome from './pages/Welcome';
import Demographics from './pages/Demographics';
import Experiment from './pages/Experiment';
import Survey from './pages/Survey';
import Results from './pages/Results';

const App = () => {
  return (
    <ExperimentProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/demographics" element={<Demographics />} />
          <Route path="/experiment" element={<Experiment />} />
          <Route path="/survey" element={<Survey />} />
          <Route path="/results" element={<Results />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </ExperimentProvider>
  );
};

export default App;
