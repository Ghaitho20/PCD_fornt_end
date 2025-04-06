import React from 'react';
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import meetImage from '../../assets/images/Acceuil/meet.webp';
import meetingNoticeImage from '../../assets/images/Acceuil/meeting-notice.jpg';

const news = [
    {
        title: "Assemblée Générale Elective du Conseil Régional des Pharmaciens",
        date: "8 juillet 2024",
        location: "Monastir, le 29 juin 2024, Hôtel Kuriat Palace Monastir",
        image: meetImage, // Updated to use imported image
    },
    {
        title: "Assemblée Générale Elective du CROPS Gabès",
        date: "8 juillet 2024",
        location: "Gabès, le 26 juin 2024, Hôtel CHEMS à Gabès",
        image: meetingNoticeImage, // Updated to use imported image
    },
    {
        title: "Assemblée Générale Elective du Conseil Régional des Pharmaciens",
        date: "19 juin 2024",
        location: "Béja, le 14 juin 2024",
        image: meetImage, // Updated to use imported image
    },
    {
        title: "Assemblée Générale Elective du Conseil Régional des Pharmaciens",
        date: "19 juin 2024",
        location: "Béja, le 14 juin 2024",
        image: meetingNoticeImage, // Updated to use imported image
    },
    {
        title: "Assemblée Générale Elective du Conseil Régional des Pharmaciens",
        date: "19 juin 2024",
        location: "Béja, le 14 juin 2024",
        image: meetImage, // Updated to use imported image
    },
];

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
            <div className="flex flex-col items-center space-x-2 pb-4">
                <span className="text-blue-600 font-semibold select-none text-[28px]">
                    Notre Actualité
                </span>
                <div className="bg-blue-600 flex items-center justify-center w-16 h-1 mt-2 rounded-full"></div>
            </div>
            <Swiper
                className="mySwiper py-12"
                modules={[Autoplay, Pagination, Navigation]}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                navigation={true}
                grabCursor={true}
                slidesPerView={3}
                speed={400}
                spaceBetween={20}
                breakpoints={{
                    500: { slidesPerView: 1 },
                    700: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 }
                }}
            >
                {news.map((item, index) => (
                    <SwiperSlide key={index}>
                        <NewsItem {...item} />
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="flex justify-center">
                <button className="rounded-full bg-blue-600 p-3 text-white flex flex-col justify-center items-center">Voir plus</button>
            </div>
            
            {/* Custom Styles for Swiper Arrows */}
            <style jsx>{`
                :global(.swiper-button-next),
                :global(.swiper-button-prev) {
                    color: black !important; /* Change arrow color to black */
                }
            `}</style>
        </section>
    );
};

    

export default ActualiteComp;
