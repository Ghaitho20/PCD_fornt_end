import React from "react";
import "../../../assets/css/Stats/DiseaseOverview/diseaseOverview.css";
import airGerm from '../../../assets/images/Stats/Hygiene/airGerm.jpg';
import floorGerm from '../../../assets/images/Stats/Hygiene/floorGerm.jpg';
import sinkGerm from '../../../assets/images/Stats/Hygiene/sinkGerm.jpg';
import Germ from '../../../assets/images/Stats/Hygiene/Germ.jpg';
import SelectionBar from "./selectionBar";
import Footer from '../../footer/footer';


const Hygiene = () => {
  const diseases = [
    {
      name: "Germ",
      image: Germ,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      name: "Floor Germ",
      image: floorGerm,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      name: "Air Germ",
      image: airGerm,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      name: "Sink Germ",
      image: sinkGerm,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
  ];

  return (
    <div className="disease-overview-container">
        <div className="selectionBar-class">
            <div className="section-title">Visualize Germs and Disinfectants charts</div>
            <SelectionBar/>
        </div>
      <h1 className="section-title">Germs Overview</h1>
      <p className="section-subtitle">
        Explore the different germs encountered at the Marrow Transplant Center.
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

export default Hygiene;