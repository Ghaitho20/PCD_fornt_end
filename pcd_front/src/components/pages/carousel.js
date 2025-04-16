import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./carousel.css";

const Carousel = () => {
  const slides = [
    { 
      id: 1, 
      text: "Utilisation Correcte Du Gel Hydroalcoolique", 
      video: "/videos/video1.mp4" 
    },
    { 
      id: 2, 
      text: "Nettoyage efficace des surfaces", 
      video: "/videos/video2.mp4" 
    },
    { 
      id: 3, 
      text: "Techniques De Nettoyage Des Mains", 
      video: "/videos/video3.mp4" 
    },
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Défilement automatique toutes les 5 secondes
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-wrapper">
      <div className="carousel-container">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`carousel-slide ${index === current ? 'active' : ''}`}
          >
            <video 
              src={slide.video} 
              autoPlay 
              loop 
              muted 
              className="carousel-video"
            />
            <div className="slide-overlay">
              <h2 className="slide-title">{slide.text}</h2>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Carousel;
