import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './header/header';
import AIRecommendation from './ai/rec';
import StatsPage from './Stats/Overview/statsPage';
import DiseaseOverview from './Stats/DiseaseOverview/diseaseOverview';
import Hygiene from './Stats/Hygiene/hygiene'
import GoogleCalendar from './Calendar/GoogleCalendar';
import ContactUS from './ContactUS/contactup';
import Brochure from './pages/Brochure';
import UserCalendar from './Calendar/UserCalendar';
import AdminBrochure from './pages/AdminBrochure';

const ALL = () => {
  return (
    <Router>
      <Header />
      <Routes>
  
        
        <Route path="/ai-recommendation" element={<AIRecommendation />} />
        <Route path="/statistics/overview" element={<StatsPage />} />
        <Route path="/statistics/diseases" element={<DiseaseOverview />} />
        <Route path="/statistics/hygiene" element={<Hygiene />} />
        <Route path="/calendar" element={<GoogleCalendar />} />
          <Route path="/usercalendar" element={<UserCalendar />} />
          <Route path="/contactUS" element={<ContactUS />} />
          <Route path="/Brochure" element={<Brochure />} />
          <Route path="/admineBrochure" element={<AdminBrochure />} />
      </Routes>
    </Router>
  );
};

export default ALL;
