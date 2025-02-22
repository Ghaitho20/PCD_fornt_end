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
      <div className="bg-white py-4 px-6 flex justify-between items-center ">

        {/* Logo */}
        <img src={logo} alt="CNOPT Logo" className="h-20 w-20" />
        

        {/* Buttons */}
        
          <div className= "">
            <div className="flex justify-center gap-6  py-3 text-sm">
                <a  href="#" className=" text-lg font-bold cursor-pointer text-gray-700 hover:text-[#333D79]  hover:rounded-full hover:scale-110 transition-all duration-250">Accueil</a>
                <a  href="#" className=" text-lg font-bold cursor-pointer text-gray-700 hover:text-[#333D79]  hover:rounded-full hover:scale-110 transition-all duration-250">Brochure</a>
                <a  href="#" className=" text-lg font-bold cursor-pointer text-gray-700 hover:text-[#333D79]  hover:rounded-full hover:scale-110 transition-all duration-250">Statistique</a>
                <a  href="#" className=" text-lg font-bold cursor-pointer text-gray-700 hover:text-[#333D79]  hover:rounded-full hover:scale-110 transition-all duration-250">Contactez-nous</a>  

            </div>
          </div>

          <button className="bg-[#333D79] text-white px-4 py-1  rounded-full ">Espace Médecin</button>

        
      </div>

      {/* Menu */}
      <div className="border-t border-[#333D79]-300"></div>
    </nav>
  );
};

export default NavBar;
