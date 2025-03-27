import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './header/header';
import AIRecommendation from './ai/rec';
import StatsPage from './Stats/Overview/statsPage';
import DiseaseOverview from './Stats/DiseaseOverview/diseaseOverview';
import Hygiene from './Stats/Hygiene/hygiene';
import Acceuil from './Acceuil/Acceuil';
import EditStatisticsPage from './Stats/editStatsPage/EditStatisticsPage';

const ALL = () => {
  let superUser = true;

  let User =  true;

  return (
    <Router>
      <Header superUser={false} User={false} />
      <Routes>
        {/* Set Acceuil as the default route at "/" */}
        <Route path="/" element={<Acceuil />} />

        {/* Other routes */}
        <Route path="/ai-recommendation" element={<AIRecommendation />} />
        <Route path="/edit-stats" element={<EditStatisticsPage />} />
        <Route path="/statistics/overview" element={<StatsPage />} />
        <Route path="/statistics/diseases" element={<DiseaseOverview />} />
        <Route path="/statistics/hygiene" element={<Hygiene />} />
        {/* Optionally keep /Homepage as an alias for Acceuil */}
        <Route path="/Homepage" element={<Acceuil />} />
      </Routes>
    </Router>
  );
};

export default ALL;