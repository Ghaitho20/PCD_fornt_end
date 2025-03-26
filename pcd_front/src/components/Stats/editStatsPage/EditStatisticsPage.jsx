import React, { useState } from 'react';
import EditStatistics from './EditStatistics';
import GraftSurvivalInput from './GraftSurvivalInput';
import PatientDemographicsInput from './PatientDemographicsInput';
import StaffPatientStats from './StaffPatientStats';
import TransplantActivityInput from './TransplantActivityInput';
import TransplantDiseasesInput from './TransplantDiseasesInput';
import '../../../assets/css/Stats/editStatsPage/EditStatisticsPage.css';
import Footer from '../../footer/footer';
import Header from '../../header/header'
const EditStatisticsPage = () => {
  const [selectedOption, setSelectedOption] = useState('');

  // Handle dropdown selection
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  // Render the appropriate component based on selection
  const renderComponent = () => {
    switch (selectedOption) {
      case 'general':
        return <EditStatistics />;
      case 'graftSurvival':
        return <GraftSurvivalInput />;
      case 'patientDemographics':
        return <PatientDemographicsInput />;
      case 'staffPatientStats':
        return <StaffPatientStats />;
      case 'transplantActivity':
        return <TransplantActivityInput />;
      case 'transplantDiseases':
        return <TransplantDiseasesInput />;
      default:
        return <p>Please select a statistic to edit.</p>;
    }
  };

  return (
    <>
        <Header/>
        <div className="edit-statistics-page">
      <h1>Edit Statistics</h1>
      <div className="select-container">
        <label htmlFor="stat-select">Select the statistic to update:</label>
        <select id="stat-select" value={selectedOption} onChange={handleSelectChange}>
          <option value="">-- Choose an option --</option>
          <option value="general">General Stats</option>
          <option value="graftSurvival">Graft Survival Rates</option>
          <option value="patientDemographics">Patient Demographics</option>
          <option value="staffPatientStats">Staff and Patients Stats</option>
          <option value="transplantActivity">Transplant Activity Throughout the Years</option>
          <option value="transplantDiseases">Diseases Covered by Transplantation</option>
        </select>
      </div>
      <div className="component-container">
        {renderComponent()}
      </div>
      
    </div>
    <Footer/>
    </>

  );
};

export default EditStatisticsPage;