import { FaPhone, FaEnvelope, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "../../img/logoCentre.png";


const NavBar = () => {
  return (
    <nav className="w-full">
      {/* Top Bar */}
      <div className="bg-[#333D79] text-white text-sm py-2 px-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1"><FaPhone /> +216 71 79 57 22</span>
          <span className="flex items-center gap-1"><FaEnvelope /> info@cnopt.tn</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-gray-300"><FaFacebook /></a>
          <a href="#" className="hover:text-gray-300"><FaInstagram /></a>
          <a href="#" className="hover:text-gray-300"><FaLinkedin /></a>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white py-4 px-6 flex  justify-between ">
        {/* Logo */}
        <img src={logo} alt="CNOPT Logo" className="h-20 w-20" />
        

        {/* Buttons */}
        <div className="flex  gap-4  mt-2  ">
          <button className="bg-[#333D79] text-white px-2 py-0 rounded-full ">Espace Pharmacien</button>
          <div className="">
            <ul className="flex justify-center gap-6  py-3 text-sm">
              <li className="text-green-600 font-semibold cursor-pointer">Accueil</li>
              <li className="cursor-pointer">L'ordre</li>
              <li className="cursor-pointer">Actualités</li>
              <li className="cursor-pointer">Secteurs pharmaceutiques</li>
              <li className="cursor-pointer">Espace étudiant</li>
              <li className="cursor-pointer">Espace Pharmacien</li>
              <li className="cursor-pointer">Pharmacademy</li>
              <li className="cursor-pointer">Apothitech</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Menu */}
      <div className="border-t border-gray-300"></div>
    </nav>
  );
};

export default NavBar;
