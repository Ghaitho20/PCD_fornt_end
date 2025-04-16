import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Faqs.css";

const Faqs = () => {
  const [faqs, setFaqs] = useState([]);
  const [newFAQ, setNewFAQ] = useState({ question: "", answer: "" });
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    axios.get("/api/faqs/")
      .then((response) => setFaqs(response.data))
      .catch((error) =>
        console.error("Erreur lors de la récupération des FAQ:", error)
      );
  }, []);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Placeholder pour handleFAQEdit (tu peux l’implémenter si nécessaire)
 

  // Fonction pour supprimer une FAQ


  return (
    <div className="faq-container">
    <div className="faq-wrapper">
      <h2 className="faq-title">Questions Fréquentes</h2>
      <div className="faq-list">
        {faqs.map((item, index) => (
          <div key={index} className="faq-item">
            <button
              className={`faq-question ${openIndex === index ? "open" : ""}`}
              onClick={() => toggleAccordion(index)}
            >
              {item.question} 
              <span className="faq-arrow">{openIndex === index ? "▲" : "▼"}</span>
            </button>
            {openIndex === index && (
              <div className="faq-answer">
                <p>{item.answer}</p>
                
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  </div>
);
};

export default Faqs;
