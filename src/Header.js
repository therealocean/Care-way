// src/Header.js
import React from 'react';
import './Header.css'; // Create a separate CSS file for header styles

const Header = () => {
  return (
    <div className="frame-30">
      <div className="logo">
        <img className="lucide-cross" src="/Icon/lucide-cross0.svg" alt="Logo" />
        <div className="care-way">
          <span>
            <span className="care-way-span">Care</span>
            <span className="care-way-span2">Way</span>
          </span>
        </div>
      </div>
      <div className="frame-26">
        <div className="text-link">
          <div className="label-text">Home</div>
        </div>
        <div className="label-text2">About Us</div>
        <div className="label-text2">Features</div>
        <div className="label-text2">Testimonials</div>
        <div className="label-text2">FAQs</div>
        <div className="label-text2">Contact Us</div>
      </div>
      <div className="header-button-group">
        <div className="outline-button">
          <div className="button">Log in</div>
        </div>
        <div className="filled-button">
          <div className="button2">Sign up</div>
        </div>
      </div>
    </div>
  );
};

export default Header;