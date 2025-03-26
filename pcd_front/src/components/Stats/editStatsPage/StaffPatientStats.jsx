import React, { useState } from 'react';
import { FaUserMd, FaUserNurse, FaUsers } from 'react-icons/fa';
import '../../../assets/css/Stats/editStatsPage/StaffPatientStats.css';

const StaffPatientStats = ({ onSubmit }) => {
  // State variables to hold input values
  const [doctors, setDoctors] = useState('');
  const [nurses, setNurses] = useState('');
  const [patients, setPatients] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Convert inputs to integers, defaulting to 0 if empty
    const doctorsNum = Math.floor(parseFloat(doctors) || 0);
    const nursesNum = Math.floor(parseFloat(nurses) || 0);
    const patientsNum = Math.floor(parseFloat(patients) || 0);

    // Basic validation for non-numeric inputs
    if (isNaN(doctorsNum) || isNaN(nursesNum) || isNaN(patientsNum)) {
      alert('Please enter valid numbers for all fields.');
      return;
    }

    // Pass the values to the parent component
    onSubmit(doctorsNum, nursesNum, patientsNum);
  };

  return (
    <div className="staff-patient-input">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="doctors">
            <FaUserMd className="icon" /> Number of Doctors
          </label>
          <input
            type="number"
            id="doctors"
            value={doctors}
            onChange={(e) => setDoctors(e.target.value)}
            min="0"
            step="1"
            placeholder="Enter number"
          />
        </div>

        <div className="form-group">
          <label htmlFor="nurses">
            <FaUserNurse className="icon" /> Number of Nurses
          </label>
          <input
            type="number"
            id="nurses"
            value={nurses}
            onChange={(e) => setNurses(e.target.value)}
            min="0"
            step="1"
            placeholder="Enter number"
          />
        </div>

        <div className="form-group">
          <label htmlFor="patients">
            <FaUsers className="icon" /> Number of Patients
          </label>
          <input
            type="number"
            id="patients"
            value={patients}
            onChange={(e) => setPatients(e.target.value)}
            min="0"
            step="1"
            placeholder="Enter number"
          />
        </div>

        <button type="submit" className="submit-button">
          Update Statistics
        </button>
      </form>
    </div>
  );
};

export default StaffPatientStats;