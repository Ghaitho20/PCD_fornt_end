import React, { useEffect } from 'react';
import '../../assets/css/footer/footer.css';
import 'particles.js'; 
import '@fortawesome/fontawesome-free/css/all.min.css';
import logo from '../../assets/images/dashboard/logo3.png'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Mission Section */}
                <div className="footer-column mission">
                    <h3><img  className="logoStyle" src={logo}/> Marrow Transplant Center</h3>
                    <p>Saving lives through advanced marrow transplant care and research.</p>
                </div>

                {/* Contact Section */}
                <div className="footer-column contact">
                    <h3>Contact</h3>
                    <p><i className="fas fa-envelope"></i> info@marrowcenter.org</p>
                    <p><i className="fas fa-phone"></i> Phone: (800) 555-0123</p>
                    <p><i className="fas fa-map-marker-alt"></i> 456 Hope Ave, Healing City, HC 90210</p>
                </div>

                {/* Social Media Section */}
                <div className="footer-column social">
                    <h3>Connect With Us</h3>
                    <p>
                        <a href="https://facebook.com/marrowcenter" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook-f"></i> Facebook
                        </a>
                    </p>
                    <p>
                        <a href="https://instagram.com/marrowcenter" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram"></i> Instagram
                        </a>
                    </p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2023 Marrow Transplant Center. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;