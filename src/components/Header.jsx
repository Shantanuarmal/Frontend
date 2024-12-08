import React from 'react';
import './Header.css';
import home_icon from "../assets/homepage.jpg";

function Header() {
  return (
    <header className="navbar">
        <div className="logo">MortgagePro</div>
      <nav>
        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#contact">Contact</a>
      </nav>
      <div className='info'>
        <h1>WITH YOU ALWAYS</h1>
        <button>Book now</button>
      </div>
      
    </header>
  );
}

export default Header;
