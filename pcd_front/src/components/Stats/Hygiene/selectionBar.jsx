import { useState } from 'react';
import {
  YearDropDownButton,
  ServiceDropDownButton,
  SurfaceDropDownButton,
  DisinfectantDropDownButton,
  GermDropDownButton
} from './dropdownbtn';

import { dummyData } from './fakeData';
import { BarChart } from './BarChart';
import { filterData } from './dataFilter';
import { filter } from './filter';

function SelectionBar() {
  const [Year, setYear] = useState(null);
  const [Service, setService] = useState(null);
  const [Surface, setSurface] = useState(null);
  const [Disinfectant, setDisinfectant] = useState(null);
  const [Germ, setGerm] = useState(null);

  // State to store filtered data
  const [chartData, setChartData] = useState([]);

  const handleGenerate = () => {
    console.log("Year:", Year);
    console.log("Service:", Service);
    console.log("Surface:", Surface);
    console.log("Disinfectant:", Disinfectant);
    console.log("Germ:", Germ);
    console.log("Dummy dataset:", dummyData);

    // Call filterData with an object
    const data = filter({
      year: Year,
      service: Service,
      surface: Surface,
      disinfectant: Disinfectant,
      germ: Germ,
      dummyData,
    });

    console.log(data);
    // Update chart data state
    setChartData(data);
  };

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '50%' }}>
        <YearDropDownButton setState={setYear} />
        <ServiceDropDownButton setState={setService} />
        <SurfaceDropDownButton setState={setSurface} />
        <DisinfectantDropDownButton setState={setDisinfectant} />
        <GermDropDownButton setState={setGerm} />
        <button type="button" className="btn btn-outline-success" onClick={handleGenerate}>
          Generate
        </button>
      </div>

      {/* Display chart only when we have data */}
      {chartData.length > 0 && <BarChart data={chartData} year = {Year} service= {Service} surface= {Surface}  disinfectant= {Disinfectant} germ= {Germ}/>}
    </>
  );
}

export default SelectionBar;
