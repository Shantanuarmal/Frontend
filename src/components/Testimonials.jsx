import React from 'react';
import './Testimonials.css';

// Example client images
import client1 from '../assets/client1.jpg';
import client2 from '../assets/client2.jpg';
import client3 from '../assets/client3.jpg';
import client4 from '../assets/client4.jpg';

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials-section">
      <h2>What Our Clients Say</h2>

      <div className="testimonial-slider">
        <div className="testimonial-slide">
          <div className="testimonial">
            <img src={client1} alt="Client 1" className="client-img" />
            <div className="testimonial-content">
              <p>"Exceptional service and professionalism!"</p>
              <p>- John Doe</p>
            </div>
          </div>
        </div>

        <div className="testimonial-slide">
          <div className="testimonial">
            <img src={client2} alt="Client 2" className="client-img" />
            <div className="testimonial-content">
              <p>"Highly recommend their services."</p>
              <p>- Jane Smith</p>
            </div>
          </div>
        </div>

        <div className="testimonial-slide">
          <div className="testimonial">
            <img src={client3} alt="Client 3" className="client-img" />
            <div className="testimonial-content">
              <p>"I had a wonderful experience working with this team!"</p>
              <p>- Mark Johnson</p>
            </div>
          </div>
        </div>

        <div className="testimonial-slide">
          <div className="testimonial">
            <img src={client4} alt="Client 4" className="client-img" />
            <div className="testimonial-content">
              <p>"A seamless process and great communication!"</p>
              <p>- Max Morgan</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
