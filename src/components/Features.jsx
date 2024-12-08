import React from 'react';
import './Features.css';

const Features = () => {
  return (
    <section id="features">
      <h2>Why Choose MortgagePro?</h2>
      <p className="features-description">
        Discover how we make the process of securing your dream home simple, seamless, and stress-free.
      </p>
      <div className="features-container">
        <div className="feature-box">
          <h3>Reliable Service</h3>
          <p>Trust and transparency are at the core of what we do. We prioritize your needs and provide expert advice every step of the way.</p>
        </div>
        <div className="feature-box">
          <h3>Luxury Homes</h3>
          <p>We specialize in providing mortgage solutions for high-end properties, ensuring your dream home becomes a reality.</p>
        </div>
        <div className="feature-box">
          <h3>Expert Guidance</h3>
          <p>Our experienced team of mortgage professionals is always ready to guide you with personalized solutions.</p>
        </div>
        <div className="feature-box">
          <h3>Fast Approvals</h3>
          <p>Say goodbye to long waiting times. Our streamlined process ensures quick approvals and efficient handling of your application.</p>
        </div>
        <div className="feature-box">
          <h3>Flexible Plans</h3>
          <p>We offer tailored mortgage plans that suit your financial goals and lifestyle, giving you the freedom to choose.</p>
        </div>
        <div className="feature-box">
          <h3>Customer Support</h3>
          <p>Our dedicated support team is available to assist you at any time, ensuring a smooth experience from start to finish.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
