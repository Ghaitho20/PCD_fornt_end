import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditStatisticsPage from "./components/Stats/editStatsPage/EditStatisticsPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EditStatisticsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
