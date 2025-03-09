import React from 'react';
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";



// Tableau des actualités
const news = [
    {
        title: "Assemblée Générale Elective du Conseil Régional des Pharmaciens",
        date: "8 juillet 2024",
        location: "Monastir, le 29 juin 2024, Hôtel Kuriat Palace Monastir",
        image: "/news1.jpg",
    },
    {
        title: "Assemblée Générale Elective du CROPS Gabès",
        date: "8 juillet 2024",
        location: "Gabès, le 26 juin 2024, Hôtel CHEMS à Gabès",
        image: "/news2.jpg",
    },
    {
        title: "Assemblée Générale Elective du Conseil Régional des Pharmaciens",
        date: "19 juin 2024",
        location: "Béja, le 14 juin 2024",
        image: "/news3.jpg",
    },
    {
        title: "Assemblée Générale Elective du Conseil Régional des Pharmaciens",
        date: "19 juin 2024",
        location: "Béja, le 14 juin 2024",
        image: "/news3.jpg",
    },
    {
        title: "Assemblée Générale Elective du Conseil Régional des Pharmaciens",
        date: "19 juin 2024",
        location: "Béja, le 14 juin 2024",
        image: "/news3.jpg",
    },
];

// Composant pour afficher une actualité avec animation Framer Motion
const NewsItem = ({ title, date, location, image }) => (
    <motion.div
        className="bg-white rounded-lg shadow-lg p-4"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
    >
        <img src={image} alt={title} className="w-full h-48 object-cover rounded-md" />
        <h3 className="text-xl font-semibold mt-4">{title}</h3>
        <p className="text-gray-600 text-sm">{date}</p>
        <p className="text-gray-500 text-sm">{location}</p>
    </motion.div>
);

const ActualiteComp = () => {
    return (
        <section className="max-w-screen-xl mx-auto px-6 py-6 pb-24">
            {/* Titre */}
            

             <div className="flex flex-col items-center space-x-2 pb-4">
                <h1 className="text-gray-700 poppins text-3xl">Notre <span className="text-blue-600 font-semibold select-none">Actualité</span></h1>
                <div className="bg-blue-600 flex items-center justify-center w-16 h-1 mt-2 rounded-full"></div>
            </div>
  
     
            {/* Carousel des actualités */}
            <Swiper
                className="mySwiper py-12"  // Classe CSS pour personnaliser le style du swiper
                modules={[Autoplay, Pagination, Navigation]}  // Modules activés : Autoplay (défilement automatique), Pagination (pagination cliquable), Navigation (navigation avec boutons)
                autoplay={{ delay: 5000, disableOnInteraction: false }}  // Autoplay avec délai de 5 secondes et activation même en cas d'interaction
                pagination={{ clickable: true }}  // Pagination activée et rendue cliquable
                navigation={true}  // Navigation activée (flèches de navigation)
                grabCursor={true}  // Affichage du curseur de la souris comme une main lors du survol des slides
                slidesPerView={3}  // Affiche 3 slides par vue par défaut
                speed={400}  // Vitesse de transition des slides (en millisecondes)
                spaceBetween={20}  // Espacement de 20px entre les slides
                breakpoints={{
                    500: { slidesPerView: 1 },  // À partir de 500px, afficher 1 slide
                    700: { slidesPerView: 2 },  // À partir de 700px, afficher 2 slides
                    1024: { slidesPerView: 3 }  // À partir de 1024px, afficher 3 slides
                }} // Pour chaque élément de 'news', afficher un SwiperSlide avec un NewsItem 
            >
                {news.map((item, index) => (
                    <SwiperSlide key={index}> 
                        <NewsItem {...item} /> 
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="flex justify-center "> 
            <button className="rounded-full bg-blue-600 p-3 text-white flex flex-col justify-center items-center ">Voir plus</button>
            </div>
            
        </section>
    );
}

export default ActualiteComp;
