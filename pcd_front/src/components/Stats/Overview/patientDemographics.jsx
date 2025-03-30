import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import '../../../assets/css/Stats/Overview/patientDemographics.css';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const PatientDemographicsChart = () => {
  // Dummy data for patient demographics by age group
  const data = {
    labels: ['0-18', '19-30', '31-45', '46-60', '61+'],
    datasets: [
      {
        label: 'Number of Patients',
        data: [120, 180, 150, 90, 60],
        backgroundColor: 'rgba(54, 162, 235, 0.8)', // Soft blue
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
        borderRadius: 8,
        barThickness: 30,
      },
    ],
  };

  // Chart options for styling and interactivity
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#333',
          font: {
            size: 14,
            weight: 'bold',
          },
        },
      },
      title: {
        display: true,
        text: 'Patient Demographics by Age Group (Marrow Center)',
        color: '#2c3e50',
        font: {
          size: 18,
          weight: 'bold',
        },
      },
      tooltip: {
        backgroundColor: 'rgba(44, 62, 80, 0.9)',
        titleColor: '#fff',
        bodyColor: '#fff',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    },
    scales: {
      x: {
        ticks: { color: '#7f8c8d' },
        grid: {
          color: 'rgba(0, 0, 0, 0.05)',
        },
      },
      y: {
        beginAtZero: true,
        ticks: { color: '#7f8c8d', stepSize: 50, max: 200 },
        grid: {
          color: 'rgba(0, 0, 0, 0.05)',
        },
      },
    },
  };

  return (
    <div className="demographicsChartContainer">
      <div style={{fontFamily: "Roboto", fontSize: "18px", flex: "0.5", padding: "10px 20px"}}>
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
       totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
       Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, 
       sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 
       Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, 
       sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. 
       Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? 
       Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
      </div>
      <div className="chartWrapper">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default PatientDemographicsChart;