import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
function App() {
 
  return (
    <div>
     <Header />
     <HeroSection />
      <Features />
      <Testimonials />
      <Footer /> 
    </div>
  )
}

export default App
