import React from "react";
import { FaRegLightbulb } from "react-icons/fa6";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";
import { teammember } from "../data.js";

const About = () => {
  return (
    <>
      <h1 className="about-heading">
        Building the Future with
        <br /> Intelligent Automation
      </h1>
      <p className="about-paragraph">
        NextLynx AI Ltd empowers businesses and individuals with smart digital
        solutions that automate processes, enhance living, and drive innovation
        across Africa through artificial intelligence, design, and technology.
      </p>

      <div className="about-mission">
        <h2 className="about-mission-heading">Our Mission</h2>
        <p>
          Our mission at NextLynx AI Ltd is to empower businesses and
          individuals through cutting-edge software, AI automation, and
          intelligent solutions. We aim to drive digital transformation across
          Africa by building scalable products, delivering expert AI
          consultation, and unlocking human potential through innovation,
          technology, and smart automation.
        </p>
      </div>
      <div className="vision">
        <h2 className="vision-heading">Our Vision</h2>
        <p>
          Our vision at NextLynx AI Ltd is to build an Africa where innovation,
          automation, and intelligence power every business and individual. We
          strive to become the continent’s leading force in AI-driven digital
          transformation—creating solutions that shape industries, inspire
          creativity, and unlock the limitless potential of the African future.
        </p>
      </div>

      <div className="core-value">
        <h2 className="core-value-heading">Our Core Values</h2>
        <div className="value-container">
          <div className="value-card">
            <div className="value-icon">
              <FaRegLightbulb id="abt" />
            </div>
            <h2>Innovation</h2>
            <p>
              We constantly push boundaries and embrace new ideas to deliver
              cutting-edge solutions
            </p>
          </div>
          <div className="value-card">
            <div className="value-icon">
              <MdOutlineHealthAndSafety id="abt" />
            </div>
            <h2>Intergrity</h2>
            <p>
              We build trust through transparent, ethical, and responsible
              practices in everything we do
            </p>
          </div>
          <div className="value-card">
            <div className="value-icon">
              <RiTeamFill id="abt" />
            </div>
            <h2>Collaboration</h2>
            <p>
              We believe the best results come from working together with our
              clients and partners
            </p>
          </div>
        </div>
      </div>

      {/* meet Team */}
      <div className="team-section">
        <h1>Meet the Team </h1>
        <p>The brilliant minds behind our innovation</p>
        <div className="team-pictures"></div>
      </div>

      {/* our team member */}
      <div className="team-container">
        <div className="team-card">
          {teammember.map((element) => {
            return (
              <div key={element.id}>
                <img src={element.image} />
                <h2>{element.name}</h2>
                <p>{element.role}</p>
                <p>{element.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default About;
