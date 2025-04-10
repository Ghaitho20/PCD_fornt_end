import React, { useState } from "react";

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);   

  const faqData = [
    { question: "Comment le médecin peut-il soulager votre douleur ?", answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { question: "Comment puis-je me retirer d'un sujet ?", answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { question: "Comprendre le médecin avant de regretter ?", answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { question: "Quels types de systèmes supportez-vous ?", answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { question: "Nous vous apprenons à vous sentir mieux ?", answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { question: "Comment puis-je vous contacter ?", answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Questions Fréquentes</h2>
      <div className="space-y-2">
        {faqData.map((item, index) => (
          <div key={index} className="border rounded-md">
            <button
              onClick={() => toggleAccordion(index)}
              className={`w-full text-left p-4 text-lg font-semibold flex justify-between items-center 
                          transition-all duration-300 rounded-md ${
                            openIndex === index ? "bg-green-500 text-white" : "bg-green-300 text-black"
                          } hover:bg-green-700`}
            >
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
  );
};

export default Faqs;
