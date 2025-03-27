import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditStatisticsPage from "./components/Stats/editStatsPage/EditStatisticsPage";
import Navbar from './components/NavBar/NavBar';
import ChatBot from './components/ChatBot/ChatBot';
import ALL from './components/allWork';
import Header from './components/header/header';
import Acceuil from './components/Acceuil/Acceuil';
import ChatsPage from "./components/forum/ChatsPage";

const App = () => {
  /*const dummyUser = { username: "testUser", secret: "1234" }; // Fake user data
 
    

     <ChatsPage user={dummyUser} />*/
     return ( 
    <BrowserRouter>
      <Navbar />
      <Header />
      <Acceuil />

      <Routes>
        <Route path="/" element={<EditStatisticsPage />} />
      </Routes>

      <ChatBot />
    </BrowserRouter>
  );
};

export default App;
