import React from "react";

const Newsletter = () => {
  return (
    <>
      <section className="newsletter">
        <div className="newsletter-container">
          <div className="newsletter-content">
            <h2>Stay Ahead with NextLynx Updates</h2>
            <p>
              Join our newsletter to get insights on AI, software trends, and
              exclusive project updates straight to your inbox.
            </p>
          </div>
          <form className="newsletter-form">
            <input
              type="email"
              placeholder="Enter your email address"
              required
            />
            <button type="submit">Subscribe</button>
          </form>
          <p className="note">We respect your privacy — unsubscribe anytime.</p>
        </div>
      </section>
    </>
  );
};

export default Newsletter;
