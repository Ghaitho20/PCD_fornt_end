export const filter = ({ year, service, surface, disinfectant,germ, dummyData }) => {
    const yearValue = year ? Number(year) : null;
    if (disinfectant && disinfectant !== "Tous" ) {
      console.log("Disinfectant is selected"); 

      const filteredData = dummyData.filter(record =>
        (record.disinfectant === disinfectant) && (yearValue === null || record.year === yearValue) &&
        (service === null || record.service === service) 
      );
      console.log("Filtered Data:", filteredData);
      
      if (service === null)
      {  //year only
        const aggregatedData = filteredData.reduce((acc, record) => {
            const existing = acc.find(item => item.name === record.service);
            if (existing) {
              existing.quantity += record.quantityDisinfectant;
            } else {
              acc.push({
                name: record.service,
                quantity: record.quantityDisinfectant,
              });
            }
            return acc;
          }, []);
        console.log("Aggregated Data:", aggregatedData);
        return aggregatedData;
    }
    else
      {   // service + year
        const aggregatedData = filteredData.reduce((acc, record) => {
            const existing = acc.find(item => item.name === record.surface);
            if (existing) {
              existing.quantity += record.quantityDisinfectant;
            } else {
              acc.push({
                name: record.surface,
                quantity: record.quantityDisinfectant,
              });
            }
            return acc;
          }, []);
          console.log("Aggregated Data:", aggregatedData);
          return aggregatedData;
    
      }



    }
    
    if (disinfectant === "Tous")
    {
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
    }


    if (germ && germ !== "Tous") {
        console.log("Germ is selected, returning empty array"); 
  
        const filteredData = dummyData.filter(record =>
          (record.germ === germ) && (yearValue === null || record.year === yearValue) &&
          (service === null || record.service === service) 
        );
        console.log("Filtered Data:", filteredData);
        
        if (!service)
        {  //year only
          const aggregatedData = filteredData.reduce((acc, record) => {
              const existing = acc.find(item => item.name === record.service);
              if (existing) {
                existing.quantity += record.quantityGerm;
              } else {
                acc.push({
                  name: record.service,
                  quantity: record.quantityGerm,
                });
              }
              return acc;
            }, []);
            console.log("Aggregated Data:", aggregatedData);
            return aggregatedData;
        }
        else
        {   // service + year
          const aggregatedData = filteredData.reduce((acc, record) => {
              const existing = acc.find(item => item.name === record.surface);
              if (existing) {
                existing.quantity += record.quantityGerm;
              } else {
                acc.push({
                  name: record.surface,
                  quantity: record.quantityGerm,
                });
              }
              return acc;
            }, []);
            console.log("Aggregated Data:", aggregatedData);
            return aggregatedData;
      
        }
  
  
  
    }
      
    if (germ === "Tous")
    {
            // Filter data by year, service, and surface (if provided)
        const filteredData = dummyData.filter(record =>
            (yearValue === null || record.year === yearValue) &&
            (service === null || record.service === service) &&
            (surface === null || record.surface === surface)
        );
        console.log("Filtered Data:", filteredData);
        
        // Aggregate the total quantity for each disinfectant
        const aggregatedData = filteredData.reduce((acc, record) => {
            const existing = acc.find(item => item.name === record.germ);
            if (existing) {
            existing.quantity += record.quantityGerm;
            } else {
            acc.push({
                name: record.germ,
                quantity: record.quantityGerm,
            });
            }
            return acc;
        }, []); 
        console.log("Aggregated Data:", aggregatedData);
        return aggregatedData;
    }

  

  };
  