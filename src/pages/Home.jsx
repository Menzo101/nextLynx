import React from "react";
import { services } from "../data.js";
import { FaArrowTrendUp } from "react-icons/fa6";
import { MdOutlineAirlineSeatFlatAngled } from "react-icons/md";
import { FaMobileAlt } from "react-icons/fa";
import { TbBusinessplan } from "react-icons/tb";
import { MdWeb } from "react-icons/md";
import Faq from "../components/Faq.jsx";
import Footer from "../components/Footer.jsx";
import NewsLetter from "../components/Newsletter.jsx";
import Testimonial from "../components/Testimonial.jsx";

const Home = () => {
  return (
    <>
      <div className="hero-section">
        <h1>Build the future</h1>
        <h1>Automate the present</h1>
        <p>
          Leveraging cutting-edge AI to create innovative
          <br />
          products and streamline your business
          <br />
          operations.
        </p>
      </div>
      {/* our services  */}
      <div className="service-container">
        {services.map((service) => {
          return (
            <div className="service-card" key={service.id}>
              <img src={service.image} alt={service.name} />
              <h3>{service.name}</h3>
              <p>{service.description}</p>
            </div>
          );
        })}
      </div>

      {/* key skills */}
      <div className="key-skill">
        <h2>Our Key Skills</h2>
        <div className="skills-list">
          <div className="skill-item">
            <FaArrowTrendUp className="ink" />
            <p className="textInk">Data driven</p>
          </div>
          <div className="skill-item">
            <MdOutlineAirlineSeatFlatAngled className="ink" />
            <p className="textInk"> AI Integration</p>
          </div>
          <div className="skill-item">
            <MdWeb className="ink" />
            <p className="textInk">Custom AI Development</p>
          </div>
          <div className="skill-item">
            <TbBusinessplan className="ink" />
            <p className="textInk">Business Process Automation</p>
          </div>
          <div className="skill-item">
            <FaMobileAlt className="ink" />
            <p className="textInk"> Software Product Development</p>
          </div>
          <div className="skill-item">
            <FaMobileAlt className="ink" />
            <p className="textInk"> AI workshop & Consultation</p>
          </div>
        </div>
      </div>

      <Faq />
      {/* business custom callDemo */}
      <div className="callDemo">
        <h2>Ready to transform your business with AI?</h2>
        <p>
          See how our AI-powered solutions can help you build the future and
          automate your success.
        </p>
        <button>Request a Call</button>
      </div>
      <Testimonial />

      <NewsLetter />

      <Footer />
    </>
  );
};

export default Home;
