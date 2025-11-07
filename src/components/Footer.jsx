import React from "react";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-about">
            <h3>NextLynx.Ai</h3>
            <p>
              At NextLynx.Ai, we build smart software and AI solutions that
              empower education, automate business, and drive Africa’s digital
              future.
            </p>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Contact</h4>
            <p>
              Email: <a href="mailto:hello@nextlynx.ai">nextlynx.ai@zohoMail</a>
            </p>
            <p>Location: Lagos, Nigeria</p>
            <div className="footer-socials">
              <a href="https://nextlynx.ai" target="_blank">
                <FaInstagram />
              </a>

              <a href="https://nextlynx.ai" target="_blank">
                <BsTwitterX />
              </a>

              <a href="#" target="_blank">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © <span id="year"></span> NextLynx.Ai All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
