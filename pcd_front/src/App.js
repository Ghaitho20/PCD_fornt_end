import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { supabase } from "./components/Calendar/createClient"; // Import du client Supabase
import Navbar from "./components/NavBar/NavBar";
import Calendar from "./components/Calendar/Calendarmeet";
import CalendarConnecte from "./components/Calendar/CalendarConnecte";

function App() {
  return (
    <SessionContextProvider supabaseClient={supabase}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/calendar-connecte" element={<CalendarConnecte />} />
        </Routes>
      </Router>
    </SessionContextProvider>
  );
}

export default App;
