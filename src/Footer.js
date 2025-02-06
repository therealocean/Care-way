// src/components/Footer.js
import React from 'react';
import './Footer.css'; // Importing the renamed CSS file

const Footer = () => {
  return (
    <div className="footer__container">
      <div className="footer__logo-section">
        <div className="footer__logo">
          <img className="footer__logo-image" src="/Icon/lucide-cross1.svg" alt="Logo" />
          <div className="footer__logo-text">CareWay</div>
        </div>
        <div className="footer__social-media">
          <div className="footer__social-media-title">Follow us on:</div>
          <div className="footer__social-icons">
            <img className="footer__social-icon" src="/Icon/formkit-twitter0.svg" alt="Twitter" />
            <img className="footer__social-icon" src="/Icon/group0.svg" alt="Facebook" />
            <img className="footer__social-icon" src="/Icon/mage-instagram-circle0.svg" alt="Instagram" />
            <img className="footer__social-icon" src="/Icon/entypo-social-linkedin-with-circle0.svg" alt="LinkedIn" />
          </div>
        </div>
      </div>
      <div className="footer__quick-links">
        <div className="footer__quick-links-title">Quick Links</div>
        <div className="footer__links-list">
          <div className="footer__link-item">Features</div>
          <div className="footer__link-item">FAQ</div>
          <div className="footer__link-item">About Us</div>
          <div className="footer__link-item">Contact Us</div>
          <div className="footer__link-item">Help</div>
        </div>
      </div>
      <div className="footer__legal-section">
        <div className="footer__legal-title">Legal</div>
        <div className="footer__links-list">
          <div className="footer__link-item">Terms of Service</div>
          <div className="footer__link-item">Privacy Policy</div>
        </div>
      </div>
      <div className="footer__newsletter-section">
        <div className="footer__newsletter-label">
          Stay updated, subscribe to our newsletter.
        </div>
        <div className="footer__email-input-container">
          <div className="footer__email-input">
            <div className="footer__email-placeholder">Enter your email</div>
            <img className="footer__email-icon" src="/Icon/mail-010.svg" alt="Mail" />
          </div>
        </div>
        <div className="footer__subscribe-button">
          <div className="footer__button-text">Subscribe</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;