  import { Dialog, Disclosure } from "@headlessui/react"
  import { useState } from "react";
  import { ChevronLeft } from "lucide-react";
  import { ChevronRight } from "lucide-react";
  import { motion, AnimatePresence } from "framer-motion";









  const ListMembreInfo = [
      {
        nom: "Ghaith Ben Ammar",
        fonction: "Président",
        bio: "Passionné par la technologie et l'innovation, Ghaith dirige l'équipe avec une vision stratégique.",
        photo: "https://via.placeholder.com/150/333D79/FFFFFF?text=Ghaith",
      },
      {
        nom: "Amine Trabelsi",
        fonction: "Vice-Président",
        bio: "Expert en gestion de projet, Amine veille à la bonne coordination des initiatives.",
        photo: "https://via.placeholder.com/150/333D79/FFFFFF?text=Amine",
      },
      {
        nom: "Sara Baccar",
        fonction: "Secrétaire Générale",
        bio: "Avec un sens aigu de l'organisation, Sara gère l'administration et la communication.",
        photo: "https://via.placeholder.com/150/333D79/FFFFFF?text=Sara",
      },
      {
        nom: "Oussama Khelifi",
        fonction: "Trésorier",
        bio: "Responsable des finances, Oussama assure la transparence et la bonne gestion des ressources.",
        photo: "https://via.placeholder.com/150/333D79/FFFFFF?text=Oussama",
      },
      {
        nom: "Rim Jaziri",
        fonction: "Responsable Communication",
        bio: "Créative et dynamique, Rim supervise les stratégies de communication et les relations publiques.",
        photo: "https://via.placeholder.com/150/333D79/FFFFFF?text=Rim",
      },
      {
        nom: "Mohamed Ali Jebali",
        fonction: "Responsable Technique",
        bio: "Développeur expérimenté, Mohamed Ali gère les aspects techniques des projets numériques.",
        photo: "https://via.placeholder.com/150/333D79/FFFFFF?text=Mohamed",
      },
    ];

  const Membre_projet_def=()=>{
      const[openBio,setOpenBio] = useState(false)
      const [currentIndex, setCurrentIndex] = useState(0);

      const handleBio=()=>{
        setOpenBio(!openBio);
      }

      const prevSlide = ()=>  {
          setCurrentIndex((prev)=>(
              prev ===0?ListMembreInfo.length-1:prev = prev-1

          ))
      };
      const nextSlide = ()=>{
          setCurrentIndex((prev)=>(
              prev ===ListMembreInfo.length-1 ? 0 : prev = prev+1
          ))
      };


        return (
          <div className="relative w-full bg-[#333D79] p-10"> 
          <h2 className="text-2xl text-white font-bold text-center mb-6">Notre Équipe</h2>
    
          <div className="relative flex items-center justify-center overflow-hidden">
            <button onClick={prevSlide} className="absolute left-2 p-2 text-white bg-gray-700 rounded-full hover:bg-gray-600">
              <ChevronLeft size={24} />
            </button>
    
            <div className="w-[400px] h-[350px] flex justify-center overflow-hidden" onClick={() => handleBio(currentIndex)}>
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl shadow-lg p-5 text-center w-full flex flex-col items-center"
              >
                <img
                  src={ListMembreInfo[currentIndex].photo}
                  alt={ListMembreInfo[currentIndex].nom}
                  className="w-24 h-24 rounded-full mb-4 object-cover cursor-pointer hover:scale-105 transition-transform"
                  
                />
                <h3 className="text-xl font-bold">{ListMembreInfo[currentIndex].nom}</h3>
                <p className="text-gray-600">{ListMembreInfo[currentIndex].fonction}</p>
              </motion.div>
            </div>
    
            <button onClick={nextSlide} className="absolute right-2 p-2 text-white bg-gray-700 rounded-full hover:bg-gray-600">
              <ChevronRight size={24} />
            </button>
          </div>
    
          {/* Modal for Bio */}
          <AnimatePresence>
            {openBio && (
              <Dialog open={openBio} onClose={() => setOpenBio(false)} className="fixed inset-0 flex items-center justify-center z-50">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-black bg-opacity-30 fixed inset-0"
                  onClick={() => setOpenBio(false)}
                ></motion.div>
    
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 50, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative z-50"
                >
                  <h3 className="text-xl font-bold mb-2">{ListMembreInfo[currentIndex].nom}</h3>
                  <p className="text-gray-600">{ListMembreInfo[currentIndex].bio}</p>
                </motion.div>
              </Dialog>
            )}
          </AnimatePresence>
        </div>
      );
    };   
  export default Membre_projet_def;