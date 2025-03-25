import React from "react";
import "../../../assets/css/Stats/DiseaseOverview/diseaseOverview.css";
import lymphoma from '../../../assets/images/Stats/DiseaseOverview/lymphoma.jpg';
import leukemia from '../../../assets/images/Stats/DiseaseOverview/leukemia.jpg';
import anemia from '../../../assets/images/Stats/DiseaseOverview/anemia.jpg';
import myeloma from '../../../assets/images/Stats/DiseaseOverview/myoleme.jpg';
import Footer from '../../footer/footer';
const DiseaseOverview = () => {
  const diseases = [
    {
      name: "Lymphoma",
      image: lymphoma,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      name: "Acute Leukemia",
      image: leukemia,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      name: "Bone Marrow Aplasia",
      image: anemia,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      name: "Multiple Myeloma",
      image: myeloma,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
  ];

  return (
    <div className="disease-overview-container">
      
      <h1 className="section-title">Disease Overview</h1>
      <p className="section-subtitle">
        Explore the conditions we treat at the Marrow Transplant Center.
      </p>
      {diseases.map((disease, index) => (
        <div
          key={index}
          className={`disease-section ${index % 2 === 0 ? 'left' : 'right'}`}
          style={{ animationDelay: `${index * 0.2}s` }}
        >
          <div className="disease-content">
            <img
              src={disease.image}
              alt={`${disease.name} illustration`}
              className="disease-image"
            />
            <div className="disease-info">
              <h2 className="disease-name">{disease.name}</h2>
              <p className="disease-description">{disease.description}</p>
            </div>
          </div>
        </div>
      ))}
    <Footer/>
    </div>
  );
};

export default DiseaseOverview;