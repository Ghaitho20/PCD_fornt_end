export const filterData = ({ year, service, surface, disinfectant, dummyData }) => {
    // Only proceed when no disinfectant is selected
    if (disinfectant) {
      console.log("Disinfectant is selected, returning empty array");
      return [];
    }
  
    // Convert year to number if needed (assuming dummyData.year is a number)
    const yearValue = year ? Number(year) : null;
    console.log("Using year:", yearValue, "service:", service, "surface:", surface);
  
    // Filter data by year, service, and surface (if provided)
    const filteredData = dummyData.filter(record =>
      (yearValue === null || record.year === yearValue) &&
      (service === null || record.service === service) &&
      (surface === null || record.surface === surface)
    );
    console.log("Filtered Data:", filteredData);
    
    // Aggregate the total quantity for each disinfectant
    const aggregatedData = filteredData.reduce((acc, record) => {
      const existing = acc.find(item => item.name === record.disinfectant);
      if (existing) {
        existing.quantity += record.quantityDisinfectant;
      } else {
        acc.push({
          name: record.disinfectant,
          quantity: record.quantityDisinfectant,
        });
      }
      return acc;
    }, []);
  
    console.log("Aggregated Data:", aggregatedData);
    return aggregatedData;
  };
  
