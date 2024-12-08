import React from 'react';
import './HeroSection.css';
import mortgageImage from '../assets/mortgageImage.jpeg'; // Replace with your actual image path

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Trustworthy & Luxurious Mortgage Solutions</h1>
        <p>Your reliable partner in securing your dream home.</p>
     
      </div>

      <div className="about-section">
        <div className="about-content">
          <h1>ABOUT US</h1>
          <p>
            We are a premier mortgage brokerage firm dedicated to providing personalized, transparent, and luxurious mortgage solutions. Whether you're a first-time buyer or a seasoned homeowner, our expert team is here to make your dream a reality with trust, excellence, and unparalleled service.
          </p>
        </div>
        <div className="about-image">
          <img src={mortgageImage} alt="Mortgage Solutions" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
