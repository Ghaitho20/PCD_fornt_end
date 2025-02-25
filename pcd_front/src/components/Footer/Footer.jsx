
import logo from "../../img/logoCentre.png";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPhone, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";


const FooterComp = () =>{


    return (
        <footer className=" bg-[#2E315F] py-8 text-white">
        <div className=" container mx-auto p-10 flex gap-10">
            {/* Contact Section */}
        <div>
          <img src={logo} alt="CNOPT Logo" className="w-32 mb-4" />
          <h3 className="text-green-400 font-bold text-lg">Contactez-Nous</h3>
          <p className="flex items-center gap-2 mt-2"><FaMapMarkerAlt /> 56, Rue Ibn Charaf,  Bâb Saadoun Tunisie</p>
          <p className="flex items-center gap-2 mt-2"><FaPhone /> +216 71 79 57 22</p>
          <p className="flex items-center gap-2 mt-2"><FaEnvelope /> info@cnopt.tn</p>
          <div className="flex gap-4 mt-4">
            <a href="#" className="text-white text-2xl"><FaFacebookF /></a>
            <a href="#" className="text-white text-2xl"><FaInstagram /></a>
            <a href="#" className="text-white text-2xl"><FaLinkedinIn /></a>
          </div>
        </div>

        {/* Sitemap Section */}
        <div>
          <h3 className="text-green-400 font-bold text-lg">Sitemap</h3>
          <ul className="mt-2 space-y-2">
            {["Accueil", "Brochure", "Actualités", "Statistique","Conatctez-nous", "Espace Médecin"].map((item) => (
              <li key={item}><a href="#" className="hover:underline">{item}</a></li>
            ))}
          </ul>
        </div>

        {/* Extra Links Section */}
        <div>
          <ul className="mt-10 space-y-2">
            <li><a href="#" className="hover:underline">Trouver </a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-green-500 text-center text-sm py-4 mt-6">
        © Copyright 2025 CGMO. All rights reserved <span className="text-green-400">GHI.tech</span>
      </div>
    </footer>
  );
};

export default FooterComp;