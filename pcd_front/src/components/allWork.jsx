import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './header/header';
import AIRecommendation from './ai/rec';
import StatsPage from './Stats/Overview/statsPage';
import DiseaseOverview from './Stats/DiseaseOverview/diseaseOverview';
import Hygiene from './Stats/Hygiene/hygiene'

const ALL = () => {
  return (
    <Router>
      <Header />
      <Routes>
  
        
        <Route path="/ai-recommendation" element={<AIRecommendation />} />
        <Route path="/statistics/overview" element={<StatsPage />} />
        <Route path="/statistics/diseases" element={<DiseaseOverview />} />
        <Route path="/statistics/hygiene" element={<Hygiene />} />
      </Routes>
    </Router>
  );
};

export default ALL;
