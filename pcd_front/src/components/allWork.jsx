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
import Acceuil from './Acceuil/Acceuil';
import EditStatisticsPage from './Stats/editStatsPage/EditStatisticsPage';
import UserManagement from './edit/userManagement';
import EditNewsPage from './edit/editNews';
import DiseaseEditor from './Stats/editStatsPage/DiseaseEditor';
import GermEditor from './Stats/editStatsPage/HygieneEditor';

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
        <Route path="/edit/stats" element={<EditStatisticsPage />} />
        <Route path="/edit/news" element={<EditNewsPage />} />
        
        <Route path="/edit/diseases-overview" element={<DiseaseEditor />} />
        <Route path="/edit/germs-overview" element={<GermEditor/>} />

        <Route path="/statistics/overview" element={<StatsPage />} />
        <Route path="/statistics/diseases" element={<DiseaseOverview />} />
        <Route path="/statistics/hygiene" element={<Hygiene />} />
        

        {/* Optionally keep /Homepage as an alias for Acceuil */}
        <Route path="/Homepage" element={<Acceuil />} />
        <Route path = "/manage-accounts" element= {<UserManagement/>} />
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