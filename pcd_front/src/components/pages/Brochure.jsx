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

      npm install axios

    </div>
  );
}