import React from "react";
import emailjs from "emailjs-com";

import "../styles/Forms.css";

const ContactUs = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4dde6lo",
        "template_mrm3jxw",
        e.target,
        "user_yMGaZHiKyOACIqbSyoRev"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <form className="form-container" onSubmit={sendEmail}>
      <div className="form-control">
        <label htmlFor="name"> </label>
        <input name="name" placeholder="Your Name" />
      </div>
      <div className="form-control">
        <label htmlFor="telephone-number"></label>
        <input name="telephone-number" placeholder="Your Telephone number " />
      </div>
      <div className="form-control">
        <label htmlFor="email"></label>
        <input name="email" placeholder="Your Email " />
      </div>
      <div className="form-control">
        <label htmlFor="comments"> </label>
        <input name="comments" placeholder="Your message" />
      </div>
      <button className="secondary-btn" type="submit">
        Send
      </button>
    </form>
  );
};

export default ContactUs;
