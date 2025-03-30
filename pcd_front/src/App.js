import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GoogleCalendar from './components/Calendar/GoogleCalendar';
import ContactUS from './components/ContactUS/contactup';
import Brochure from './components/pages/Brochure';
import UserCalendar from './components/Calendar/UserCalendar';
import AdminBrochure from './components/pages/AdminBrochure';
import ALL from './components/allWork';



function App() {
  return (
  <ALL/>
  );
}

export default App;