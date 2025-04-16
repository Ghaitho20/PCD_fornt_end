import React, { useState } from "react";
import './userBrochure.css';
import Conseil from "./conseil";
import Faqs1 from "./faqs1";
import Telechar from "./telechar";
import ChatBot from "../ChatBot/ChatBot";
import Footer from '../footer/footer';
import Carousel from './carousel';

export default function Brochure() {
  

  return (
    <div className="brochure-app">
      <main className="brochure-main">
        <br></br>
        <Carousel/>
        <Conseil/>
        <Faqs1/>
      </main>
      <ChatBot />
      <Footer />
    </div>
  );
}