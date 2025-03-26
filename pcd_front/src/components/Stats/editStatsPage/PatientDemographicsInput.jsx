import React, { useState } from 'react';
import { FaUsers } from 'react-icons/fa';
import '../../../assets/css/Stats/editStatsPage/PatientDemographicsInput.css';

const PatientDemographicsInput = ({ onSubmit }) => {
  // State to hold the input values for each age group
  const [demographics, setDemographics] = useState({
    '0-18': '',
    '19-30': '',
    '31-45': '',
    '46-60': '',
    '61+': ''
  });

  // Array of age groups for dynamic rendering
  const ageGroups = ['0-18', '19-30', '31-45', '46-60', '61+'];

  // Handle input changes for each age group
  const handleInputChange = (group, value) => {
    setDemographics({ ...demographics, [group]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const parsedDemographics = {};
    // Parse each value to an integer, defaulting to 0 if empty or invalid
    for (const group in demographics) {
      const value = demographics[group];
      const num = Number(value);
      parsedDemographics[group] = isNaN(num) ? 0 : Math.floor(num);
    }
    // Pass the parsed data to the parent component
    onSubmit(parsedDemographics);
  };

  return (
    <div className="patient-demographics-input">
      <h2>Patient Demographics by Age</h2>
      <form onSubmit={handleSubmit}>
        {ageGroups.map((group) => (
          <div className="form-group" key={group}>
            <label htmlFor={group}>
              <FaUsers className="icon" /> {group}
            </label>
            <input
              type="number"
              id={group}
              value={demographics[group]}
              onChange={(e) => handleInputChange(group, e.target.value)}
              min="0"
              step="1"
              placeholder="Enter number"
            />
          </div>
        ))}
        <button type="submit" className="submit-button">
          Update Demographics
        </button>
      </form>
    </div>
  );
};

export default PatientDemographicsInput;