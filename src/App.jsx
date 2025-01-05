import React, { useState } from 'react';

    function App() {
      const [activeAccordion, setActiveAccordion] = useState(null);

      const toggleAccordion = (index) => {
        setActiveAccordion(activeAccordion === index ? null : index);
      };

      const faqData = [
        {
          question: "What should I do if my AC is not cooling?",
          answer: "If your AC is not cooling, first check the thermostat settings and ensure the air filter is clean. If the issue persists, contact us for professional assistance."
        },
        {
          question: "How long does an AC repair typically take?",
          answer: "The duration of an AC repair depends on the complexity of the issue. Minor repairs can be completed within a few hours, while more extensive repairs may take longer. We strive to complete repairs as quickly as possible."
        },
        {
          question: "How often should I schedule AC maintenance?",
          answer: "It is recommended to schedule AC maintenance at least once a year to ensure optimal performance and prevent potential issues. Regular maintenance can extend the lifespan of your AC unit."
        },
        {
          question: "Is repairing an older AC unit worth it, or should I replace it?",
          answer: "The decision to repair or replace an older AC unit depends on its age, condition, and the cost of repairs. We can assess your unit and provide recommendations based on your specific situation."
        },
        {
          question: "What brands of AC units do you service and install?",
          answer: "We service and install a wide range of AC unit brands. Our technicians are experienced in working with various makes and models to provide the best solutions for your needs."
        },
        {
          question: "Why is my AC running but not cooling my home?",
          answer: "If your AC is running but not cooling, there could be several reasons, such as a refrigerant leak, a faulty compressor, or a dirty condenser coil. Contact us for a thorough inspection and repair."
        },
        {
          question: "How can I improve my AC unit's energy efficiency?",
          answer: "To improve your AC unit's energy efficiency, ensure proper insulation, seal any air leaks, and schedule regular maintenance. Using a programmable thermostat can also help reduce energy consumption."
        },
        {
          question: "What is the average lifespan of an AC unit in Miami?",
          answer: "The average lifespan of an AC unit in Miami is typically between 10 to 15 years. However, regular maintenance and proper usage can extend its lifespan."
        },
        {
          question: "How do I know if my AC needs repair or replacement?",
          answer: "Signs that your AC may need repair or replacement include inconsistent cooling, unusual noises, frequent breakdowns, and increased energy bills. Contact us for an assessment."
        },
        {
          question: "Do you offer emergency HVAC services?",
          answer: "Yes, we offer emergency HVAC services to address urgent issues. Our team is available 24/7 to provide prompt and reliable assistance when you need it most."
        }
      ];

      return (
        <div>
          <header className="header">
            <div className="logo">SUNSET COOLING AND HEATING</div>
            <ul className="nav-links">
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Our Work</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
            <div className="contact-info">(786) 699-6306</div>
          </header>
          <section className="hero">
            <h1>TOP-RATED AC REPAIR MIAMI – YOUR LOCAL HVAC SPECIALISTS</h1>
            <h2>Fast & Reliable HVAC Services | Sunset Cooling & Heating</h2>
            <p>Get quick and dependable AC repair in Miami & HVAC services with our expert technicians. We're available 7 days a week to restore your comfort.</p>
            <button>Schedule Your AC Repair Today</button>
          </section>
          <section className="about">
            <div className="about-text">
              <h2>About Us</h2>
              <p>
                Sunset Cooling and Heating is a leading HVAC service provider in Miami, dedicated to providing top-notch cooling and heating solutions. With years of experience, our team of expert technicians is committed to delivering fast, reliable, and dependable services. We pride ourselves on our customer-centric approach, ensuring that your comfort is our top priority. Whether you need AC repair, installation, or maintenance, we are here to help you 7 days a week.
              </p>
              <button className="about-cta">Learn More</button>
            </div>
            <div className="about-image">
              <img src="https://images.unsplash.com/photo-1495584816685-4bdbf1b5057e?text=About+Us+Image" alt="About Us" />
            </div>
          </section>
          <section className="services">
            <h2>Our Services</h2>
            <p>Comprehensive AC Repair Miami & HVAC Services in Miami</p>
            <div className="services-container">
              <div className="service-card">
                <h3>AC Filter Replacement in Miami - Improve Air Quality & System Efficiency <span >★</span></h3>
                <p>Improve Air Quality & System Efficiency Keep your Miami home's air quality at its best with our AC filter replacement service. We help reduce allergens, improve system efficiency, and extend the life of your cooling unit.</p>
              </div>
              <div className="service-card">
                <h3>AC Installation & Repair - Keep Your Home Cool Year-Round <span >★</span></h3>
                <p>Ensure your cooling system operates efficiently with our expert AC installation and repair services in Miami. We provide seamless installation and repair solutions to keep your home comfortable and your system running smoothly.</p>
              </div>
              <div className="service-card">
                <h3>Professional Furnace Installation & Repair Miami - Stay Warm with Reliable Heating <span >★</span></h3>
                <p>Our skilled technicians offer top-notch furnace installation and repair services in Miami, ensuring your heating system performs at its best during the cooler months.</p>
              </div>
              <div className="service-card">
                <h3>Efficient Heat Pump Services Miami - Maximize Comfort & Energy Efficiency <span >★</span></h3>
                <p>Our comprehensive heat pump services include expert installation, maintenance, and repairs, designed to optimize your home's comfort and energy efficiency.</p>
              </div>
              <div className="service-card">
                <h3>Dependable Water Heater Installation & Repair Miami - Maintain Optimal Performance <span >★</span></h3>
                <p>We specialize in fast and reliable water heater installation and repair services, ensuring your water heating system operates efficiently and reduces energy costs.</p>
              </div>
            </div>
            <button className="services-cta">Explore Our Full Range of AC Repair & HVAC Services</button>
          </section>
          <section className="testimonials">
            <h2>Testimonials</h2>
            <div className="testimonials-container">
              <div className="testimonial-card">
                <p>"I was very impressed with the prompt and professional service I received. My AC was fixed quickly and efficiently."</p>
                <p className="author">- John D.</p>
              </div>
              <div className="testimonial-card">
                <p>"The technicians were knowledgeable and courteous. They explained everything clearly and did a great job."</p>
                <p className="author">- Sarah M.</p>
              </div>
              <div className="testimonial-card">
                <p>"I highly recommend Sunset Cooling and Heating. They are reliable, affordable, and provide excellent service."</p>
                <p className="author">- Emily R.</p>
              </div>
            </div>
          </section>
          <section className="faq">
            <h2>Frequently Asked Questions</h2>
            <p>GET ANSWERS TO COMMON QUESTIONS ABOUT OUR HVAC SERVICES IN MIAMI</p>
            <div className="accordion">
              {faqData.map((item, index) => (
                <div className="accordion-item" key={index}>
                  <div
                    className="accordion-header"
                    onClick={() => toggleAccordion(index)}
                  >
                    {item.question}
                    <span>{activeAccordion === index ? '-' : '+'}</span>
                  </div>
                  <div
                    className="accordion-content"
                    style={{ display: activeAccordion === index ? 'block' : 'none' }}
                  >
                    <p>{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="faq-cta">Have More Questions? Contact Us Today!</button>
          </section>
        </div>
      );
    }

    export default App;
