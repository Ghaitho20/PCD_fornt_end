import React from "react";
import { Routes, Route } from "react-router-dom";
import Calendar from "./Calendarmeet";
import CalendarConnecte from "./CalendarConnecte";
import { createClient } from "@supabase/supabase-js";
import { SessionContextProvider } from "@supabase/auth-helpers-react";

// Initialisation de Supabase dans CalendarRoutes.tsx
const supabase = createClient(
  "https://lsqtmhchhzilgwxjhfqh.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxzcXRtaGNoaHppbGd3eGpoZnFoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI2ODQ0MTAsImV4cCI6MjA1ODI2MDQxMH0.WbKYWy55y-29phhE6KC6ibUF2XY_QyzBU48VYiaNRRk"
);

function CalendarRoutes() {
  return (
    <SessionContextProvider supabaseClient={supabase}>
      <Routes>
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/calendar-connecte" element={<CalendarConnecte />} />
      </Routes>
    </SessionContextProvider>
  );
}

export default CalendarRoutes;
