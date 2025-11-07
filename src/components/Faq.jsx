import React from "react";

const Faq = () => {
  return (
    <>
      <section className="faq">
        <h1>FAQ Section</h1>
        <details className="faq-item" open>
          <summary className="faq-question">What does NextLynx do?</summary>
          <div className="faq-answer">
            <p>
              NextLynx is a software and AI development company that builds
              smart digital products for startups, schools, and businesses
              across Africa and beyond.
            </p>
          </div>
        </details>

        <details className="faq-item">
          <summary className="faq-question">
            Who are your ideal clients?
          </summary>
          <div className="faq-answer">
            <p>
              We work with startups, educational institutions, and enterprises
              looking to integrate AI or launch scalable software products
              quickly and efficiently.
            </p>
          </div>
        </details>

        <details className="faq-item">
          <summary className="faq-question">
            Do you build AI-powered apps?
          </summary>
          <div className="faq-answer">
            <p>
              Yes. We design, develop, and integrate AI features like chatbots,
              auto-graders, voice explanations, and adaptive learning tools into
              mobile and web apps.
            </p>
          </div>
        </details>

        <details className="faq-item">
          <summary className="faq-question">
            How long does it take to build a project?
          </summary>
          <div className="faq-answer">
            <p>
              Our MVPs usually take 6–12 weeks depending on complexity. We use
              an agile process that ensures fast delivery and measurable
              outcomes.
            </p>
          </div>
        </details>

        <details className="faq-item">
          <summary className="faq-question">
            How do you price your services?
          </summary>
          <div className="faq-answer">
            <p>
              We offer flexible pricing — fixed packages for MVPs,
              milestone-based retainers, and partnership models depending on
              client goals and scope.
            </p>
          </div>
        </details>

        <details className="faq-item">
          <summary className="faq-question">How can I get started?</summary>
          <div className="faq-answer">
            <p>
              Simply reach out through our contact form or email. We’ll schedule
              a short discovery call to understand your needs and propose a
              roadmap to launch fast.
            </p>
          </div>
        </details>
      </section>
    </>
  );
};

export default Faq;
