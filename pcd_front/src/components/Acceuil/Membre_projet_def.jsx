  import { Dialog, Disclosure } from "@headlessui/react"
  import { useState } from "react";
  import { ChevronLeft } from "lucide-react";
  import { ChevronRight } from "lucide-react";
  import { motion, AnimatePresence } from "framer-motion";
  import { FaPhone, FaEnvelope, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";









  //fetched form the data 
  const ListMembreInfo = [
      {
        nom: "Rim WERHENI ",
        fonction: "professeur adjoint",
        bio: ` Je suis Phd. Rim WERHENI, professeur adjoint de sciences biologiques au département des laboratoires du Centre national de transplantation de moelle osseuse. Département des Laboratoires du Centre National de Transplantation de la Moelle Osseuse Tunisie. Membre du laboratoire de recherche Microbiologie de l'Enfant et Immunodéprime. Après un Master en Biotechnologie et un Master en Microbiologie à la Faculté des Sciences de Tunis, j'ai soutenu une thèse en 2017 à la Faculté des Sciences de l'Université de Tunis.
à la Faculté des Sciences de Tunis, j'ai soutenu une thèse en 2017 sur l'isolement et la sélection de souches bactériennes pour la bioremédiation des sols forestiers contaminés par le Pentachlorophénol. J'ai développé mes compétences en analyses physico-chimiques, microbiologiques microbiologiques et moléculaires au Laboratoire de Traitement et Valorisation des Rejets Hydriques (L.T.V.R.H) et au Centre de Recherches et des Technologies des Eaux (C.E.R.E.). Mon parcours scientifique a été suivi d'un Post Doc de la mobilité en IRA de type Médenine intitulé « Evaluation de l'effet de l'irrigation du sol de Dissa - Gabès par des effluents secondaires par des effluents secondaires à long terme - Suivi de l'optimisation d'un traitement tertiaire des eaux usées traitement tertiaire des eaux usées (processus d'infiltration par percolation) » dans le cadre d'un projet MEDISSA intitulé « SYSTÈME INTÉGRÉ MÉDITERRANÉEN D'APPROVISIONNEMENT EN EAU ».
SUPPLY « . Je suis membre du projet international 2023-2026 : projet Prima : SWRIPS
« Sustainable Water Re-use with Innovative Purification and Sensing system for la chaîne d'approvisionnement agroalimentaire ». Je suis également directeur du projet national de jeunes chercheurs 2024-2025 : « Utilisation des désinfectants en milieu hospitalier
Désinfectants en milieu hospitalier : Résistance bactérienne, efficacité et élimination dans les effluents ». Mes travaux de recherche ont été récompensés par 14 recherches internationales impactées (1premier auteur), 4 articles de recherche indexés (1premier nom), 4 chapitres, 2 livres, deux conférences (Algérie et Tunisie) et une communication orale internationale en Italie en tant que 1er auteur. J'ai supervisé des étudiants en master dans programmes professionnels et de recherche, ainsi que des ingénieurs en hydrologie. Mes activités de recherche et d'enseignement se concentrent sur les processus de biorémédiation (bioaugmentation, phytoremédiation, adsorption, ultrafiltration) dans les sols pollués et le traitement des eaux usées.
`,
        photo: "/assets/img_membre_projet_def/rym.png",
      },
      {
        nom: "Najla Sadfi",
        fonction: "Professeur",
        bio: `Professeur Najla Sadfi est une figure éminente du monde académique tunisien, avec une carrière de plus de 21 ans à la Faculté des Sciences de Tunis. Elle occupe actuellement le poste de Vice-doyenne et Directrice des Études depuis août 2024. Son parcours professionnel est marqué par une progression constante, débutant en tant que Maître-assistante en 2003, puis Maître de conférences en 2011, et enfin Professeur de l'Enseignement Supérieur en 2015.
              En parallèle de ses responsabilités administratives, Najla Sadfi dirige le laboratoire "Mycologie, Pathologies et Biomarqueurs" depuis septembre 2016. Ce laboratoire mène des recherches de pointe en mycologie moléculaire et appliquée, avec des implications importantes dans les domaines de l'agriculture et du biomédical. Son expertise en immunogénétique vient compléter ce tableau, faisant d'elle une chercheuse et une administratrice accomplie.

              Le Dr Yosra Chebbi est une microbiologiste médicale accomplie avec une expertise significative dans le diagnostic et le traitement des infections, en particulier chez les patients immunodéprimés. En tant que maître de conférences en microbiologie médicale à la Faculté de Médecine de Tunis et au Centre National de Greffe de Moelle Osseuse, elle a joué un rôle crucial dans l'amélioration des soins aux patients et la formation des futurs professionnels de la santé.
              Ses contributions à la recherche sont substantielles, comme en témoignent ses nombreuses publications dans des revues internationales. Le Dr Chebbi a notamment travaillé sur l'épidémiologie et la caractérisation moléculaire des bactéries résistantes aux antibiotiques, un enjeu majeur de santé publique. Ses travaux ont permis de mieux comprendre les mécanismes de résistance et de développer des stratégies de lutte plus efficaces.
              En plus de ses réalisations en recherche, le Dr Chebbi est activement impliquée dans l'enseignement et la formation médicale. Elle a participé à divers comités pédagogiques et a encadré de nombreux étudiants en médecine. Son engagement envers la formation se reflète également dans ses publications sur l'analyse docimologique des épreuves écrites et l'évaluation clinique objective.
              Le Dr Chebbi a également contribué à plusieurs chapitres de livres sur l'imagerie des infections de la colonne vertébrale, élargissant ainsi son impact au-delà de la microbiologie. Son expertise est reconnue à l'échelle internationale, comme en témoigne son appartenance à des réseaux nationaux et internationaux de lutte contre la résistance aux antimicrobiens et à des sociétés savantes telles que l'ESCMID.
              En résumé, le Dr Yosra Chebbi est une scientifique accomplie, une éducatrice dévouée et une clinicienne compétente. Ses succès dans la recherche, l'enseignement et la pratique clinique témoignent de son engagement envers l'avancement de la microbiologie médicale et de la santé publique.
              `,
        photo: "/assets/img_membre_projet_def/NajlaSadfi.png",
      },
      {
        nom: "Wafa Achour",
        fonction: "Secrétaire Générale",
        bio: ` Wafa Achour est une figure éminente dans le domaine de la microbiologie médicale, avec une carrière riche et diversifiée. Son expertise s'étend de la recherche fondamentale à l'enseignement médical, en passant par des responsabilités administratives significatives. En tant que chef du département de laboratoire au Centre National de Greffe de Moelle Osseuse et professeur à la Faculté de Médecine de Tunis, elle a joué un rôle crucial dans l'amélioration des pratiques de diagnostic et de traitement des infections, en particulier chez les patients immunodéprimés.
Ses contributions à la recherche sont substantielles, comme en témoignent ses nombreuses publications dans des revues internationales. Le Dr Achour a notamment travaillé sur la résistance aux antibiotiques, un enjeu majeur de santé publique, et a étudié diverses espèces bactériennes, y compris Staphylococcus, Neisseria, et Klebsiella pneumoniae. Ses travaux ont permis de mieux comprendre l'épidémiologie et les mécanismes de résistance de ces bactéries, contribuant ainsi à l'élaboration de stratégies de lutte plus efficaces.
En plus de ses réalisations en recherche, le Dr Achour est activement impliquée dans l'enseignement et la formation médicale. Elle a coordonné le certificat de pédagogie médicale à la Faculté de Médecine de Tunis et a participé à divers comités pédagogiques. Son engagement envers la formation se reflète également dans ses publications sur l'analyse docimologique des épreuves écrites et l'évaluation clinique objective.
`,
        photo: "/assets/img_membre_projet_def/WafaAchour.png",
      },
      {
        nom: "Mariem Mohamedhen Vall",
        fonction: "doctorante en sciences biologiques",
        bio: `Mariem Mohamedhen Vall est doctorante en sciences biologiques à la Faculté des Sciences de Tunis et au laboratoire de Microbiologie de l'Enfant et de l'Immunodéprimé de la Faculté de Médecine de Tunis. Passionnée par la microbiologie et la recherche appliquée en biologie moléculaire, elle a développé une expertise approfondie en techniques microbiologiques, PCR, électrophorèse et microscopie. Son parcours académique inclut un master en Biologie Moléculaire, Cellulaire et Biotechnologie, ainsi qu'une licence en Biologie Moléculaire et Physiologie. Elle a acquis une expérience précieuse à travers plusieurs stages en laboratoires de microbiologie, notamment au Centre National de Greffe de la Moelle Osseuse, à l’Institut Pasteur de Tunis et dans divers hôpitaux. Son travail de recherche s'inscrit dans le cadre du projet "Usage des désinfectants en milieu hospitalier : Résistance bactérienne, efficacité et élimination dans les effluents", contribuant ainsi à une meilleure compréhension des mécanismes de résistance bactérienne et des stratégies d’élimination des agents désinfectants dans l’environnement hospitalier.`,
        photo: "/assets/img_membre_projet_def/MariemMohamedhenVall.png",
      },
      {
        nom: "Anis Raddaoui",
        fonction: "chercheur postdoctoral en bactériologie clinique",
        bio: `Anis Raddaoui est chercheur postdoctoral en bactériologie clinique au sein de la Faculté de Médecine et du Centre National de Greffe de Moelle Osseuse. Titulaire d’un doctorat en sciences biologiques avec une spécialisation en microbiologie obtenu à l’Université de Carthage, il possède une expertise approfondie dans l’identification et la caractérisation des bactéries pathogènes, en particulier les entérobactéries et les streptocoques. En parallèle, il exerce en tant qu’enseignant à l’Institut Supérieur des Technologies Médicales de Tunis. Il a effectué plusieurs stages de recherche à l’international, notamment à l’Instituto de Tecnologia Química e Biológica António Xavier au Portugal. Ses travaux portent sur la résistance aux antibiotiques et l’épidémiologie des bactéries multi-résistantes, comme en témoignent ses nombreuses publications et communications scientifiques. Dans le cadre du projet "Usage des désinfectants en milieu hospitalier : Résistance bactérienne, efficacité et élimination dans les effluents", il contribue à l’étude de l’impact des désinfectants sur les souches bactériennes résistantes et à l’optimisation des stratégies de lutte contre les infections nosocomiales.

Siwar FRIGUI est spécialiste en microbiologie médicale et en enseignement médical. Elle a été professeur associé en microbiologie médicale à la Faculté de médecine de Tunis et au Centre national de greffe de moelle osseuse de 2022 à 2023. Elle a obtenu sa spécialisation en microbiologie médicale en 2021 et son doctorat en médecine en 2019, tous deux à la Faculté de médecine de Tunis. En 2010, elle a obtenu sa licence en sciences expérimentales à l'École des pionniers de l'Ariana à Tunis, en Tunisie.
Outre ses fonctions académiques, Siwar Frigui est membre du laboratoire de recherche LR18ES39, « Bactériologie chez l'enfant et les patients immunodéprimés », et du comité consultatif sur les infections associées aux soins (IAS). Entre 2016 et 2021, elle a publié plusieurs articles dans des revues internationales, portant sur les infections causées par Pseudomonas aeruginosa et les bactériémies nosocomiales.

`,
        photo: "/assets/img_membre_projet_def/AnisRaddaoui.png",
      },
      {
        nom: "Khoubayb Hmaidi",
        fonction: "professionnel polyvalent",
        bio: `Khoubayb Hmaidi est un professionnel polyvalent avec une expérience riche et diversifiée. Il a occupé un poste à d’un administrateur conseillé au Centre National de Greffe de Moelle osseuse depuis 2015. Il a une expérience dans l'enseignement supérieur à la gestion administrative et à l'audit interne. Son parcours académique solide, avec un mastère de recherche en marketing et une inscription en doctorat, témoigne de son engagement envers l'apprentissage continu. Khoubayb possède également des compétences techniques variées, notamment la maîtrise de logiciels tels que SPSS et NVIVO, ainsi que des connaissances approfondies en gestion de stock et en gestion de la consommation de carburant. Son expérience dans le secteur de la santé, notamment au Centre national de greffe de la moelle osseuse, démontre sa capacité à gérer des situations complexes et à travailler efficacement en équipe.`,
       photo: "/assets/img_membre_projet_def/KhoubaybHmaidi.png",
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
                  className="w-1/2 rounded-full mb-4 object-cover cursor-pointer hover:scale-105 transition-transform"
                  
                />
                <h3 className="text-xl font-bold ">{ListMembreInfo[currentIndex].nom}</h3>
               
                <p className="text-gray-600">{ListMembreInfo[currentIndex].fonction}</p>
                <br />
                 <div className="flex items-center gap-4">
                          <a href="#" className="hover:text-gray-300"><FaFacebook /></a>
                          <a href="#" className="hover:text-gray-300"><FaInstagram /></a>
                          <a href="#" className="hover:text-gray-300"><FaLinkedin /></a>
                  </div>
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
                  className="bg-black bg-opacity-30 fixed inset-0  "
                  onClick={() => setOpenBio(false)}
                ></motion.div>
    
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 50, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative z-50 max-h-screen overflow-y-auto"
                >
                  <h3 className="text-xl font-bold mb-2 text-center">{ListMembreInfo[currentIndex].nom}</h3>
                  <p className="text-gray-600">{ListMembreInfo[currentIndex].bio}</p>
                </motion.div>
              </Dialog>
            )}
          </AnimatePresence>
        </div>
      );
    };   
  export default Membre_projet_def;