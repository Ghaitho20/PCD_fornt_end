import React, { useState, useEffect } from "react";
import axios from "axios";

const FAQAndPDFSection = () => {
  const [faqs, setFaqs] = useState([]);
  const [documents, setDocuments] = useState([]);
  const [editingFAQ, setEditingFAQ] = useState(null);
  const [updatedFAQ, setUpdatedFAQ] = useState({ question: "", answer: "" });

  useEffect(() => {
    // Charger les FAQ depuis le backend
    axios.get("/api/faqs")
      .then((response) => {
        setFaqs(response.data);
      })
      .catch((error) => console.error("Erreur lors de la récupération des FAQ:", error));

    // Charger les documents depuis le backend
    axios.get("/api/documents")
      .then((response) => {
        setDocuments(response.data);
      })
      .catch((error) => console.error("Erreur lors de la récupération des documents:", error));
  }, []);

  const handleFAQEdit = (faq) => {
    setEditingFAQ(faq);
    setUpdatedFAQ({ question: faq.question, answer: faq.answer });
  };

  const handleFAQUpdate = () => {
    if (editingFAQ) {
      axios.put(`/api/faqs/${editingFAQ.id}`, updatedFAQ)
        .then((response) => {
          setFaqs(faqs.map(f => f.id === editingFAQ.id ? response.data : f));
          setEditingFAQ(null);
          setUpdatedFAQ({ question: "", answer: "" });
        })
        .catch((error) => console.error("Erreur lors de la mise à jour de la FAQ:", error));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedFAQ((prev) => ({ ...prev, [name]: value }));
  };

  const [openIndex, setOpenIndex] = useState(null);
  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-screen bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Section Questions Fréquentes */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Questions Fréquentes</h2>
            <div className="w-full space-y-2">
              {faqs.map((item, index) => (
                <div key={index} className="border rounded-md">
                  <button
                    onClick={() => toggleAccordion(index)}
                    className={`w-full text-left p-4 text-lg font-semibold flex justify-between items-center transition-all duration-300 rounded-md ${
                      openIndex === index ? "bg-green-500 text-black" : "bg-green-500 text-black"
                    } hover:bg-green-700 transition-all duration-300`}
                  >
                    {item.question}
                    <span className="text-xl">{openIndex === index ? "▲" : "▼"}</span>
                  </button>
                  {openIndex === index && (
                    <div className="p-4 bg-gray-100 text-gray-700">
                      <p>{item.answer}</p>
                      <button onClick={() => handleFAQEdit(item)} className="text-blue-500">Modifier</button>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Formulaire pour modifier une FAQ */}
            {editingFAQ && (
              <div className="mt-8">
                <h3 className="text-xl font-semibold">Modifier la FAQ</h3>
                <input
                  type="text"
                  name="question"
                  value={updatedFAQ.question}
                  onChange={handleChange}
                  className="w-full p-2 mt-2 border rounded-md"
                  placeholder="Question"
                />
                <textarea
                  name="answer"
                  value={updatedFAQ.answer}
                  onChange={handleChange}
                  className="w-full p-2 mt-2 border rounded-md"
                  placeholder="Réponse"
                />
                <button
                  onClick={handleFAQUpdate}
                  className="mt-4 bg-green-500 text-white px-4 py-2 rounded-md"
                >
                  Mettre à jour
                </button>
              </div>
            )}
          </div>

          {/* Section Espace de Téléchargement */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Espace de Téléchargement</h2>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p>Téléchargez nos fichiers ci-dessous :</p>
              <div className="mt-4 space-y-3">
                {documents.map((doc, index) => (
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
  );
};

export default FAQAndPDFSection;
