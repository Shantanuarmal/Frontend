import React from 'react';
import './Footer.css'; // Link to the CSS file
import { FaFacebook, FaTwitter, FaInstagram, FaTelegram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Contact Form Section */}
        <div className="footer-contact">
          <h3>CONTACTS</h3>
          <form action="#" method="POST" className="contact-form">
            <input type="text" name="name" placeholder="Name" required />
            <input type="email" name="email" placeholder="Email" required />
            <input type="tel" name="telephone" placeholder="Telephone" required />
            <textarea name="message" placeholder="Message" required></textarea>
            <button type="submit">SEND</button>
          </form>
        </div>

        {/* Contact Information Section */}
        <div className="footer-info">
          <p><i className="phone-icon"></i> 000-XXX14120 / 000-XXX4144</p>
          <p>
            <FaFacebook className="social-icon" />
            <FaTwitter className="social-icon" />
            <FaTelegram className="social-icon" />
            <FaInstagram className="social-icon" />
          </p>
          <p>8th floor, The Affaires, XYZ Beach Road, Dreamland, Fantasy Land, Unknown - 000 000</p>
        </div>
      </div>

      {/* Footer Bottom Section for Legal Information */}
      <div className="footer-bottom">
        <p>MortagePro | All Right Reserved 2019</p>
        <div>
          <a href="/site-map">Site Map</a> | <a href="/terms">Terms of Service</a> | <a href="/privacy-policy">Privacy Policy</a>
        </div>
        <p>Designed & Developed by <span>shantnau Armal</span></p>
      </div>
    </footer>
  );
};

export default Footer;
