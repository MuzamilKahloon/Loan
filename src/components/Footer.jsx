import React from 'react';
import './Footer.css';
import { FaFacebookF, FaGoogle, FaTwitter, FaInstagram } from 'react-icons/fa';
import Logo from '../../public/Fin/footer_logo.png'; // Ensure the correct path to the logo image

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={Logo} alt="Finloans Logo" className="logo-image" />
          
          <p>finloan@support.com</p>
          <p>+10 873 672 6782</p>
          <p>600/D, Green road, NewYork</p>
          <div className="social-icons">
            <a href="#" className="icon-f"><FaFacebookF /></a>
            <a href="#" className="icon-f"><FaGoogle /></a>
            <a href="#" className="icon-f"><FaTwitter /></a>
            <a href="#" className="icon-f"><FaInstagram /></a>
          </div>
        </div>
        <div className="footer-links">
          <div className="link-column">
            <h3>Services</h3>
            <p>SEO/SEM</p>
            <p>Web design</p>
            <p>Ecommerce</p>
            <p>Digital marketing</p>
          </div>
          <div className="link-column">
            <h3>Useful Links</h3>
            <p>About</p>
            <p>Blog</p>
            <p>Contact</p>
            <p>Support</p>
          </div>
          <div className="subscribe-column">
            <h3>Subscribe</h3>
            <input type="email" placeholder="Enter your mail" /> <br />
            <button>Subscribe</button>
            <p>Esteem spirit temper too say adieus who direct esteem esteems luckily.</p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy;2024 All rights reserved | This template is made with ❤️ by Colorlib</p>
      </div>
    </footer>
  );
};

export default Footer;
