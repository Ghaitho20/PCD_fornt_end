import React from 'react';
import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';
import '../../../assets/css/Stats/Hygiene/barChart.css'; // Import custom styles

export const BarChart = ({ data, year, service, surface, disinfectant, germ }) => {
  // Function to generate the chart title
  const getChartTitle = () => {
    if (disinfectant) {
      if (disinfectant !== "Tous") {
        return service
          ? `Disinfectant ${disinfectant} Chart Per Surface - Year ${year}`
          : `Disinfectant ${disinfectant} Chart Per Service - Year ${year}`;
      }
      return service
        ? surface
          ? `Disinfectants Chart in ${service}  ${surface} - Year ${year}`
          : `Disinfectants Chart in ${service}  - Year ${year}`
        : `Disinfectants Chart - Year ${year}`;
    }
    if (germ) {
      if (germ !== "Tous") {
        return service
          ? `Germ ${germ} Chart Per Surface - Year ${year}`
          : `Germ ${germ} Chart Per Service - Year ${year}`;
      }
      return service
        ? surface
          ? `Germs Chart in ${service}  ${surface} - Year ${year}`
          : `Germs Chart in ${service}  - Year ${year}`
        : `Germs Chart - Year ${year}`;
    }
    return `Chart - Year ${year}`; // Fallback title
  };

  // Function to determine XAxis label
  const getXAxisLabel = () => {
    if (disinfectant) {
      return disinfectant === "Tous" ? "Disinfectants" : service ? "Surfaces" : "Services";
    }
    if (germ) {
      return germ === "Tous" ? "Germs" : service ? "Surfaces" : "Services";
    }
    return "Categories"; // Fallback
  };

  return (
    <div className="chart-wrapper">
      <h3 className="chart-title">{getChartTitle()}</h3>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={400}>
          <ComposedChart data={data}>
            <XAxis
              dataKey="name"
              label={{ value: getXAxisLabel(), position: 'insideBottom', offset: -5 }}
            />
            <YAxis
              label={{ value: 'Quantity', position: 'insideLeft', angle: -90, offset: 15 }}
            />
            <Tooltip />
            <CartesianGrid stroke="#f5f5f5" />
            <Bar dataKey="quantity" barSize={20} fill="#413ea0" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};