
const fakeDatabase = {
    years: [2018, 2019, 2020, 2021, 2022, 2023, 2024],
    services: ['Service A', 'Service B', 'Service C'],
    surfaces: ['Lavabos', 'Air', 'Chambre'],
    disinfectants: ['X1', 'X2', 'X3', 'X4'],
    germs: ['Bacteria', 'Virus', 'Fungus'],
  };
  
  // Function to generate dummy data
 const  generateDummyData = () => {
    const data = [];
  
    fakeDatabase.years.forEach(year => {
      fakeDatabase.services.forEach(service => {
        fakeDatabase.surfaces.forEach(surface => {
          fakeDatabase.disinfectants.forEach(disinfectant => {
            fakeDatabase.germs.forEach(germ => {
              const quantityDisinfectant = Math.floor(Math.random() * 10) + 1; // Random between 1 and 10
              const quantityGerm = Math.floor(Math.random() * 100) + 1; // Random between 1 and 100
  
              data.push({
                year,
                service,
                surface,
                disinfectant,
                quantityDisinfectant,
                germ,
                quantityGerm,
              });
            });
          });
        });
      });
    });
  
    return data;
  };


  export const dummyData = generateDummyData();
  