import React from 'react';
import { FaSignOutAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../../assets/css/header/header.css';
import logo from '../../assets/images/dashboard/logo3.png'
import { FaPhone, FaEnvelope, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const TopBar = () => {
  return(
      <div className="bg-gradient-to-r from-[#7bed9f] via-[#a1c6ea] to-[#7bed9f] text-white text-sm py-2 px-4 flex justify-between items-center">







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
  );
};

const Header = () => {
  return (
    <>
      <TopBar/>
      <Header1/>
    </>
  )
}


const Header1 = () => {
  return (
    <header className="header bg-[#2c3e50] text-white py-4">
      {/* Left: Logo and Title */}
      <div className="header-left flex items-center gap-4">
        <div className="logo flex items-center">
          <img src={logo} alt="Centre de greffe de Tunis Logo" className="logo-img" />
          <span className="logo-text text-2xl font-bold">Centre de greffe de Tunis</span>
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
          <li className="nav-item">
            <Link className="nav-link" to="/ai-recommendation">
              AI Tools
            </Link>
          </li>
        </ul>
      </nav>

      {/* Right: Logout Button */}
      <div className="header-right">
        <button className="logout-btn bg-transparent text-white border border-white py-2 px-4 rounded-md">
          <FaSignOutAlt className="logout-icon" /> Logout
        </button>
      </div>
    </header>
  );
};

export default Header;
