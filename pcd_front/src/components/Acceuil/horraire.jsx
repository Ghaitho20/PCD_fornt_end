import React from "react";
import { FaClock, FaLocationArrow, FaPhone, FaFacebookSquare, FaInstagram, FaLinkedinIn } from "react-icons/fa";


//fetched form the data 
const ListHorr = [
  ["Monday", "09:00 - 19:00"],
  ["Tuesday", "09:00 - 19:00"],
  ["Wednesday", "09:00 - 19:00"],
  ["Thursday", "09:00 - 19:00"],
  ["Friday", "09:00 - 19:00"],
  ["Saturday", "10:00 - 18:00"],
  ["Sunday", "Emergency"],
]

const ContactSection = () => {
  return (
    <div className="container mx-auto p-4 shadow-lg rounded-lg bg-white mb-4 mt-4">
      <h2 className="text-center text-[#333D79] pt-3 text-2xl font-bold flex items-center justify-center gap-2">
        <FaClock  /> Horraire 
      </h2>
      <div className="grid md:grid-cols-2 gap-8 mt-6">
            <div className="p-4 mx-auto w-3/4">
                  <h2 className="text-[#333D79] font-extrabold text-xl">CNGMO</h2>
                  <p className="text-gray-600 font-medium mt-2">
                  CNGMO est dédié à offrir des services de greffe de haute qualité avec une prise en charge personnalisée et humaine.
                  </p>
                  <p className="mt-4 flex items-center gap-2 text-gray-700">
                    <FaLocationArrow className="text-[#333D79]" /> Tupac Amaru 200 - Lima
                  </p>
                  <p className="flex items-center gap-2 text-gray-700">
                    <FaPhone className="text-[#333D79]" /> +51 0123456789
                  </p>
                  <div className="mt-4 flex space-x-4 text-2xl text-[#333D79]">
                  <a href="" className="cursor-pointer"><FaFacebookSquare/></a>
                  <a href=""  className="cursor-pointer"> <FaInstagram /></a>       
                    <a href=""  className="cursor-pointer"><FaLinkedinIn /></a>
                  </div>
            </div>
            <div className="p-4 mx-auto w-3/4">
                  <h4 className="text-lg font-bold text-[#333D79]">Les horraires d'ouverture</h4>
                  <table className="w-full mt-3 border rounded-lg overflow-hidden text-gray-700">
                    <tbody>
                      { ListHorr .map(([day, time], index) => (
                        <tr key={index} className="border-b">
                          <td className="py-2 px-4 font-semibold">{day}</td>
                          <td className="py-2 px-4">{time}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
            </div>
      </div>
    </div>
  );
};

export default ContactSection;
