import React from "react";

const Telechar = () => {
  const documents = [
    { name: "Document 1", link: "/files/document1.pdf" },
    { name: "Document 2", link: "/files/document2.pdf" },
    { name: "Document 3", link: "/files/document3.pdf" },
  ];

  return (
    <div className="w-full max-w-2xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Espace de Téléchargement</h2>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="text-gray-700">Téléchargez nos fichiers ci-dessous :</p>
        <div className="mt-4 space-y-3">
          {documents.map((doc, index) => (
            <a
              key={index}
              href={doc.link}
              download
              className="block w-full"
            >
              <button className="flex items-center bg-green-500 text-white p-3 rounded-lg shadow-md 
                                hover:bg-green-700 transition-all duration-300 w-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 mr-2"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2a1 1 0 0 1 1 1v8.59l3.3-3.3a1 1 0 0 1 1.4 1.42l-5 5a1 1 0 0 1-1.4 0l-5-5a1 1 0 0 1 1.4-1.42l3.3 3.3V3a1 1 0 0 1 1-1zM4 14a1 1 0 0 1 1 1v5h14v-5a1 1 0 1 1 2 0v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-6a1 1 0 0 1 2 0v5h14v-5a1 1 0 0 1 1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                <div>
                  <p className="text-sm font-semibold">{doc.name}</p>
                  <p className="text-xs opacity-80">Télécharger</p>
                </div>
              </button>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Telechar;
