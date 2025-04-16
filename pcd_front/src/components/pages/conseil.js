import React from 'react';
import './conseil.css';
import handnet from "../../assets/handnet.jpg";
import gel from "../../assets/gel.jpg";
import bavette from "../../assets/bavette.jpg";
import Éviter from "../../assets/Éviter le contact avec les malades.jpg";
import jetter from "../../assets/jetter.jpg";
import repas from "../../assets/Utilisation des repas stériles.png";

const Conseil = ({ onShowFaqs, onShowTelechar }) => {
  const visitorAdvice = [
    { title: "Hygiène des mains", description: "Lavez-vous les mains régulièrement avec du savon ou utilisez un gel hydroalcoolique.", image: handnet },
    { title: "Désinfection des surfaces", description: "Utilisez des désinfectants adaptés pour nettoyer les surfaces fréquemment touchées.", image: gel },
    { title: "Protection des personnes immunodéprimées", description: "Évitez tout contact avec des personnes malades et portez un masque si nécessaire.", image: bavette },
    { title: "Éviter le contact avec les malades", description: "Évitez le contact avec d'autres patients malades pour réduire le risque de contamination.", image: Éviter },
    { title: "Gestion des repas", description: "Évitez de partager la nourriture avec d'autres personnes.", image: jetter },
    { title: "Utilisation des repas stériles", description: "En cas d'ouverture de l'emballage de repas stérile, il ne faut pas dépasser une heure.", image: repas },
  ];

  return (
      <div className="conseil-content">
        <h3 className="conseil-title">Conseils pour les visiteurs</h3>
        <div className="advice-grid">
          {visitorAdvice.map((advice, index) => (
            <div key={index} className="advice-card">
              <img src={advice.image} alt={advice.title} className="advice-image" />
              <h4 className="advice-title">{advice.title}</h4>
              <p className="advice-desc">{advice.description}</p>
            </div>
          ))}
        </div>
      </div>
  );
};

export default Conseil;