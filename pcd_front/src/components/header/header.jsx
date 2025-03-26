import React from 'react';
import { FaSignOutAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../../assets/css/header/header.css';
import logo from '../../assets/images/dashboard/logo3.png'
import { FaPhone, FaEnvelope, FaFacebook, FaInstagram, FaLinkedin ,FaFacebookMessenger} from 'react-icons/fa';
import { Dialog } from "@headlessui/react";
import { useState } from "react";
const TopBar = () => {
  return(
      <div className="bg-gradient-to-r from-[#7bed9f] via-[#a1c6ea] to-[#7bed9f] text-white text-sm py-2 px-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1"><FaPhone /> +216 71 79 57 22</span>
          <span className="flex items-center gap-1"><FaEnvelope /> info@cnopt.tn</span>
        </div>
        <div className="flex items-center gap-4">
          <Link className="hover:text-gray-300" to="#">
            <FaFacebook/>       
          </Link>
          <Link className="hover:text-gray-300" to="#">
            <FaInstagram/>       
          </Link>
          <Link className="hover:text-gray-300" to="#">
            <FaLinkedin/>       
          </Link>
        </div>
    </div>
  );
};

const Header = ({superUser,User}) => {
  return (
    <nav className= "fixed  z-50 w-full top-0" >
      <TopBar/>
      <Header1 superUser={superUser} User={User}/>
    </nav>
  )
}


const Header1 = ({superUser,User}) => {


   const [isOpen,setIsOpen] = useState(false);
  
    const handleDialogConn = ()=>{
      setIsOpen(!isOpen);
      console.log(isOpen)
    }

  return (
    <header className="header bg-[#2c3e50] text-white py-4 ">
      {/* Left: Logo and Title */}
      <div className="header-left flex items-center gap-4">
        <div className="logo flex items-center">
          <img src={logo} alt="Centre de greffe de Tunis Logo" className="logo-img" />
          <div className="w-15">
            <div className="logo-text text-l font-bold">Centre de greffe</div>
            <div className="logo-text text-l font-bold text-center "> de Tunis</div>
          </div>
          

        </div>
      </div>

      {/* Center: Navigation Menu */}
      <nav className="nav-menu flex-grow flex justify-center">
        <ul className="nav-list flex gap-8">
          <li className="nav-item">
            <a className="nav-link" href="/">Homepage</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/brochure.pdf" target="_blank" rel="noopener noreferrer">
              Brochure
            </a>
          </li>
          <li className="nav-item dropdown-custom">
            <span className="nav-link dropdown-toggle">Statistics</span>
            <ul className="dropdown-menu-custom">
              <li>
                <Link className="dropdown-item" to="/statistics/overview">
                  Overview
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/statistics/diseases">
                  Diseases Overview
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/statistics/hygiene">
                  Hygiene
                </Link>
              </li>
            </ul>
          </li>


          { (superUser || User ) && (<li className="nav-item">
            <Link className="nav-link" to="/ai-recommendation">
              AI Tools
            </Link>
          </li>)}

          {superUser && (<li className="nav-item">
            <Link className="nav-link" to="#">
              Calendar
            </Link>

          </li>)}
          {superUser && (<li className="nav-item">
            <Link className="nav-link" to="#">
              Edit Statistics
            </Link>

          </li>)}


          
          






        </ul>
      </nav>

      {/* Right: Logout Button */}
      <div className="header-right flex gap-[10px] justify-between ">

        {(!superUser && !User ) && 

           <button className="   text-white px-4 py-1  rounded-full " onClick={handleDialogConn}>           

            Espace Médecin</button>
        }





        {(superUser || User) &&(<button>
           <FaFacebookMessenger/>
        </button>)}
        {(superUser || User) &&(<button>
          <span class="material-symbols-outlined">
              notifications
          </span>
        </button>)}
        {(superUser || User) &&<button className="logout-btn bg-transparent text-white ">
          <FaSignOutAlt className="logout-icon " /> 
        </button>}
      </div>

           {/* Modal pour etablir une connexion avec le medecin */}
                <Dialog open={isOpen} onClose={handleDialogConn} className="fixed inset-0 flex items-center justify-center z-50">
                  {/* Overlay */}
                  <div className="fixed inset-0 bg-black bg-opacity-50" aria-hidden="true"></div>
          
                  {/* Dialog Panel */}
                  <Dialog.Panel className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative z-50">
                    <h2 className="text-xl font-bold mb-4">Connexion Espace Médecin</h2>
                    <form>
                      <label className="block mb-2">Courriel ou identifiant *</label>
                      <input type="text" className="w-full p-2 border rounded mb-4" />
          
                      <label className="block mb-2">Mot de passe *</label>
                      <input type="password" className="w-full p-2 border rounded mb-4" />
          
                      <a href="#" className="text-blue-600 text-sm">
                        Réinitialiser votre mot de passe
                      </a>
          
                      <div className="mt-4 flex justify-between">
                        <button type="button" className="bg-[#333D79] text-white px-4 py-2 rounded" onClick={handleDialogConn}>
                          Se connecter
                        </button>
                        <button type="button" className="text-gray-600 px-4 py-2" onClick={handleDialogConn}>
                          Annuler
                        </button>
                      </div>
                    </form>
                  </Dialog.Panel>
                </Dialog>    





    </header>
  );
};

export default Header;
