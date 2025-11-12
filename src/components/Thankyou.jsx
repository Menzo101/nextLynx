import React from "react";

const Thankyou = () => {
  return (
    <>
      <div className="welcome-container">
        <div className="welcome-card">
          <h1>
            Welcome to <span>NextLynx AI</span> 🚀
          </h1>
          <p>
            You’ve successfully joined the NextLynx AI community! We’re excited
            to have you onboard as we build the future of smart software and AI
            solutions together.
          </p>
          <div className="actions">
            <a href="/" className="btn-primary">
              Home Page
            </a>
            <a href="/learn-more" className="btn-secondary">
              About Us
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Thankyou;
