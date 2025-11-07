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
        <h2>Contact From</h2>
        <form action="">
          <div className="messageBox">
            <label htmlFor="">
              Fullname
              <input type="text" placeholder="Samuel" />
            </label>
          </div>
          <div className="messageBox">
            <label htmlFor="">
              Work Email
              <input type="text" placeholder="samuel@company.com" />
            </label>
          </div>
          <div className="messageBox">
            <label htmlFor="">
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
