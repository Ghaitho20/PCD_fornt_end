import React, { useState } from 'react';
import { FaCalendarAlt, FaSyringe } from 'react-icons/fa';
import '../../../assets/css/Stats/editStatsPage/TransplantActivityInput.css';

const TransplantActivityInput = ({ onSubmit }) => {
  // State for input fields
  const [year, setYear] = useState('');
  const [autografts, setAutografts] = useState('');
  const [allografts, setAllografts] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Parse inputs to integers, defaulting to 0 if empty
    const parsedYear = Math.floor(parseFloat(year) || 0);
    const parsedAutografts = Math.floor(parseFloat(autografts) || 0);
    const parsedAllografts = Math.floor(parseFloat(allografts) || 0);

    // Validate inputs
    if (isNaN(parsedYear) || isNaN(parsedAutografts) || isNaN(parsedAllografts)) {
      alert('Please enter valid numbers for all fields.');
      return;
    }

    // Pass data to parent component
    onSubmit({ year: parsedYear, autografts: parsedAutografts, allografts: parsedAllografts });

    // Reset form fields
    setYear('');
    setAutografts('');
    setAllografts('');
  };

  return (
    <div className="transplant-activity-input">
      <h2>Transplant Activity Input</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="year">
            <FaCalendarAlt className="icon" /> Year
          </label>
          <input
            type="number"
            id="year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            placeholder="Enter year"
            min="1900"
            max={new Date().getFullYear()}
          />
        </div>

        <div className="form-group">
          <label htmlFor="autografts">
            <FaSyringe className="icon" /> Number of Autografts
          </label>
          <input
            type="number"
            id="autografts"
            value={autografts}
            onChange={(e) => setAutografts(e.target.value)}
            min="0"
            step="1"
            placeholder="Enter number"
          />
        </div>

        <div className="form-group">
          <label htmlFor="allografts">
            <FaSyringe className="icon" /> Number of Allografts
          </label>
          <input
            type="number"
            id="allografts"
            value={allografts}
            onChange={(e) => setAllografts(e.target.value)}
            min="0"
            step="1"
            placeholder="Enter number"
          />
        </div>

        <button type="submit" className="submit-button">
          Add Transplant Data
        </button>
      </form>
    </div>
  );
};

export default TransplantActivityInput;