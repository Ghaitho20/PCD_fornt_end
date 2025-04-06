import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditStatisticsPage from "./components/Stats/editStatsPage/EditStatisticsPage";
import Navbar from './components/NavBar/NavBar';
import ChatBot from './components/ChatBot/ChatBot';
import ALL from './components/allWork';
import Header from './components/header/header';
import Acceuil from './components/Acceuil/Acceuil';
import Forum from "./components/forum/forum";
const App = () => {

  return (
    /*<Forum/>*/


    <ALL/>
    

  );
};

export default App;
