import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Telechar.css";

const Telechar = () => {
  const [documents, setDocuments] = useState([]);
  const [file, setFile] = useState(null);
  const [documentTitle, setDocumentTitle] = useState("");
  const [documentDescription, setDocumentDescription] = useState("");

  useEffect(() => {
    axios.get("/api/documents")
      .then((response) => setDocuments(response.data))
      .catch((error) => console.error("Erreur lors de la récupération des documents:", error));
  }, []);

  const handleDownload = async (documentId, documentTitle) => {
    try {
      const response = await axios.get(`/api/documents/${documentId}`, {
        responseType: 'blob'
      });
      
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', documentTitle || 'document');
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Erreur lors du téléchargement:', error);
      alert('Impossible de télécharger le fichier');
    }
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleFileUpload = () => {
    if (!file || !documentTitle || !documentDescription) return;

    const formData = new FormData();
    formData.append("document", file);
    formData.append("title", documentTitle);
    formData.append("description", documentDescription);

    axios.post("/api/documents", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then(() => {
      axios.get("/api/documents")
        .then((response) => setDocuments(response.data))
        .catch((error) => console.error("Erreur lors du chargement des documents:", error));
      
      setFile(null);
      setDocumentTitle("");
      setDocumentDescription("");
    })
    .catch((error) => console.error("Erreur lors de l'upload du fichier:", error));
  };
  
  return (
    <div className="telechar-page">
      <div className="telechar-container">
        <h2 className="telechar-title">Espace de Téléchargement</h2>
        <div className="telechar-content">
          <p className="telechar-description">Téléchargez nos fichiers ci-dessous :</p>
          <div className="documents-list">
            {documents.map((doc, index) => (
              <div 
                key={index} 
                className="document-item"
                onClick={() => handleDownload(doc.id, doc.title)}
              >
                <div className="document-card">
                  <div className="download-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M12 2a1 1 0 0 1 1 1v8.59l3.3-3.3a1 1 0 1 1 1.4 1.42l-5 5a1 1 0 0 1-1.4 0l-5-5a1 1 0 1 1 1.4-1.42l3.3 3.3V3a1 1 0 0 1 1-1z" />
                      <path d="M4 14a1 1 0 0 1 1 1v5h14v-5a1 1 0 1 1 2 0v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-6a1 1 0 0 1 2 0v5h14v-5a1 1 0 0 1 1-1z" />
                    </svg>
                  </div>
                  <div className="document-info">
                    <p className="document-name">{doc.title}</p>
                    <p className="document-description">{doc.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Telechar;