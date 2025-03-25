import React, { useState } from "react";
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import LinearProgress from '@mui/material/LinearProgress';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FaFilePdf, FaFileWord } from "react-icons/fa";
import HygieneImage from '../../assets/hygiene.jpg';
import SleepImage from '../../assets/sleep.jpg';
import ExerciseImage from '../../assets/exercise.jpg';
import backgroundImage from "../../assets/arrier plan.jpg";
import bavette from "../../assets/bavette.jpg";
import Éviter from "../../assets/Éviter le contact avec les malades.jpg";
import gel from "../../assets/gel.jpg";
import handnet from "../../assets/handnet.jpg";
import jetter from "../../assets/jetter.jpg";
import surface from "../../assets/surface.jpg";
import repas from "../../assets/Utilisation des repas stériles.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Icônes de FontAwesome

export default function ServiceDetails() {
  const [openIndex, setOpenIndex] = useState(null);
  const [current, setCurrent] = useState(0);
  // Fonction pour mettre en "Title Case"
  const toTitleCase = (str) => {
    return str.replace(/\w\S*/g, (word) => {
      return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
    });
  };



  const faqData = [
    { question: "Comment le médecin peut-il soulager votre douleur ?", answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { question: "Comment puis-je me retirer d'un sujet ?", answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { question: "Comprendre le médecin avant de regretter ?", answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { question: "Quels types de systèmes supportez-vous ?", answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { question: "Nous vous apprenons à vous sentir mieux ?", answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { question: "Comment puis-je vous contacter ?", answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
  ];

  const visitorAdvice = [
    { title: "Hygiène des mains", description: "Lavez-vous les mains régulièrement avec du savon ou utilisez un gel hydroalcoolique.", image: handnet },
    { title: "Désinfection des surfaces", description: "Utilisez des désinfectants adaptés pour nettoyer les surfaces fréquemment touchées.", image: gel },
    { title: "Protection des personnes immunodéprimées", description: "Évitez tout contact avec des personnes malades et portez un masque si nécessaire.", image: bavette },
    { title: "Éviter le contact avec les malades", description: "Évitez le contact avec d'autres patients malades pour réduire le risque de contamination.", image: Éviter },
    { title: "Gestion des repas", description: "Évitez de partager la nourriture avec d'autres personnes.", image: jetter },
    { title: "Utilisation des repas stériles", description: "En cas d’ouverture de l’emballage de repas stérile, il ne faut pas dépasser une heure.", image: repas },
  ];

  const slides = [
    { id: 1, text: "Utilisation Correcte Du Gel Hydroalcoolique", video: "/videos/video1.mp4" },
    { id: 2, text: "nettoyage efficace des surfaces", video: "/videos/video2.mp4" },
    { id: 3, text: "Techniques De Nettoyage Des Mains", video: "/videos/video3.mp4" },
  ];
 
  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Section Carousel */}
      <div className="relative w-full h-[650px] overflow-hidden">
        {slides.map((slide, index) => (
          <div key={slide.id} className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === current ? "opacity-100" : "opacity-0"}`}>
            <video src={slide.video} autoPlay loop muted className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white">
            <h2 className="text-4xl font-bold uppercase">{slide.text}</h2>
            </div>
          </div>
        ))}
        <button
  className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 p-3 rounded-full text-white"
  onClick={prevSlide}
>
  <FaArrowLeft /> {/* Icône de flèche gauche */}
</button>
<button
  className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 p-3 rounded-full text-white"
  onClick={nextSlide}
>
  <FaArrowRight /> {/* Icône de flèche droite */}
</button>
      </div>

      {/* Section Principale */}
      <div className="w-screen bg-white py-12">
        <div className="container mx-auto px-6">
          <h1 className="text-2xl font-bold">Pourquoi la prévention est essentielle</h1>
          <p className="text-gray-600 mt-2">La prévention est la clé pour maintenir une bonne santé et éviter les infections. Voici quelques conseils pour vous aider à rester en bonne santé.</p>
        </div>
      </div>

      {/* Section Conseils pour les visiteurs */}
      <div className="w-screen bg-gray-50 py-12">
        <div className="container mx-auto px-6">
          <h3 className="text-xl font-bold text-green-500 mb-4">Conseils pour les visiteurs</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visitorAdvice.map((advice, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer hover:bg-green-50 hover:border-2 hover:border-green-500">
                <img src={advice.image} alt={advice.title} className="w-full h-40 object-cover rounded-lg mb-4" />
                <h4 className="text-lg font-semibold text-gray-800">{advice.title}</h4>
                <p className="text-gray-600 mt-2">{advice.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section Questions Fréquentes et Espace de Téléchargement */}
      <div className="w-screen bg-gray-50 py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Section Questions Fréquentes */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Questions Fréquentes</h2>
              <div className="w-full space-y-2">
                {faqData.map((item, index) => (
                  <div key={index} className="border rounded-md">
                    <button onClick={() => toggleAccordion(index)} className={`w-full text-left p-4 text-lg font-semibold flex justify-between items-center transition-all duration-300 rounded-md ${openIndex === index ? "bg-green-500 text-black" : "bg-green-500 text-black"} hover:bg-green-700 transition-all duration-300`}>
                      {item.question}
                      <span className="text-xl">{openIndex === index ? "▲" : "▼"}</span>
                    </button>
                    {openIndex === index && (
                      <div className="p-4 bg-gray-100 text-gray-700">
                        <p>{item.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Section Espace de Téléchargement */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Espace de Téléchargement</h2>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p>Téléchargez nos fichiers ci-dessous :</p>
                <div className="mt-4 space-y-3">
                  {[
                    { name: "Document 1", link: "/files/document1.pdf" },
                    { name: "Document 2", link: "/files/document2.pdf" },
                    { name: "Document 3", link: "/files/document3.pdf" },
                  ].map((doc, index) => (
                    <a key={index} href={doc.link} download className="block w-1/2 mx-auto">
                      <div className="flex items-center bg-green-500 text-black p-2 rounded-lg shadow-md hover:bg-green-700 transition-all duration-300">
                        <div className="mr-2">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                            <path fillRule="evenodd" d="M12 2a1 1 0 0 1 1 1v8.59l3.3-3.3a1 1 0 0 1 1.4 1.42l-5 5a1 1 0 0 1-1.4 0l-5-5a1 1 0 0 1 1.4-1.42l3.3 3.3V3a1 1 0 0 1 1-1zM4 14a1 1 0 0 1 1 1v5h14v-5a1 1 0 1 1 2 0v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-6a1 1 0 0 1 2 0v5h14v-5a1 1 0 0 1 1-1z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm font-semibold">{doc.name}</p>
                          <p className="text-xs">Télécharger</p>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}