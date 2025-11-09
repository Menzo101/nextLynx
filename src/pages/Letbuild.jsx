import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { TbPhoneCall } from "react-icons/tb";

const Letbuild = () => {
  return (
    <>
      <div className="build-heading">
        <h1>Let's Build Together</h1>
        <p>
          Reach out to us to see how we can help your <br />
          business automate and grow
        </p>
      </div>
      <div className="allContactBox">
        <div className="contactUsOne">
          <div className="contactWrapper">
            <MdOutlineMail id="callImage" />
            <a href="mailto:contact@nextlynxai.com" className=" callUs">
              Email Us
            </a>
          </div>
          <div className="callIcon">
            <FaArrowRight id="callIcon" />
          </div>
        </div>
        <div className="contactusTwo">
          <div className="contactWrapper">
            <TbPhoneCall id="callImage" />
            <a href="tel:+2348103044943" className="callUs">
              Call Us
            </a>
          </div>

          <div className="callIcon">
            <FaArrowRight id="callIcon" />
          </div>
        </div>
      </div>

      {/* message form  */}
      <div className="messageForm">
        <h2>Contact Form</h2>
        <form action="https://formsubmit.co/nextlynxai@gmail.com" method="POST">
          <div className="messageBox">
            <input
              type="hidden"
              name="_next"
              value="https://yourwebsite.com/thank-you"
            />
            <label htmlFor="">
              Fullname
              <input type="text" placeholder="Samuel" name="fullname" />
            </label>
          </div>
          <div className="messageBox">
            <label htmlFor="">
              Work Email
              <input
                type="email"
                placeholder="samuel@company.com"
                name="email"
              />
            </label>
          </div>
          <div className="messageBox">
            <label htmlFor="messageBox">
              Message
              <textarea
                name="message"
                id="textMessage"
                rows="6"
                cols="40"
                placeholder="How can we help you ?"
              ></textarea>
            </label>
          </div>
          <button id="submit-btn">Send Message</button>
        </form>
      </div>
    </>
  );
};

export default Letbuild;
