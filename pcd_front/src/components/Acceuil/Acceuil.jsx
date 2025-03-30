import { useState, useEffect } from "react";
import vueExterneCentre from "../../img/vue_externe_centre.png";
import medicalImage from "../../img/medical_image.jpg";
import vueInternalCentre from "../../img/internal_vue_centre.jpg";


import Membre_projet_def from "./Membre_projet_def";

import Actualite from "./Actualites";

import NavBar from "../NavBar/NavBar";
import IntroductionCentre from "./IntroductionCentre";
import Footer from "../footer/footer";

import ContactSection from "./horraire";
import { ArrowLeft, ArrowRight } from "lucide-react";
import ChatBot from "../ChatBot/ChatBot";

/*images fetched from the database*/ 
const images = [
  { src: vueExterneCentre , text: "Bienvenue au Centre National De Greffe De Moelle Osseuse" },
  { src: medicalImage , text: "Découvrez nos services innovants" },
  { src: vueInternalCentre , text: "Rejoignez notre communauté" },
];


export default function Acceuil() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change toutes les 5 secondes

    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <NavBar></NavBar>
    <div className="relative w-full h-[700px]">
       
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={image.src}
            alt="Slide"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <h2 className="text-white text-3xl font-bold  ">{image.text}</h2>
          </div>

        </div>
      ))}

      {/* Boutons de navigation */}
      <button
        onClick={() => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)}
        className="absolute left-4 top-1/2 transform -translate-y-1/2  p-2 rounded-full shadow-lg"
      >
        <ArrowLeft className="bg-gray-700 rounded-full" />
      </button>
      <button
        onClick={() => setCurrentIndex((prev) => (prev + 1) % images.length)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2  p-2 rounded-full shadow-lg"
      >
        <ArrowRight className="bg-gray-700 rounded-full"/>  
      </button>
    </div>

  

    <IntroductionCentre></IntroductionCentre>

    <Actualite/>
    <Membre_projet_def></Membre_projet_def>
    <ContactSection></ContactSection>

    <ChatBot></ChatBot> 
    <Footer></Footer>
    </>
  );
}
