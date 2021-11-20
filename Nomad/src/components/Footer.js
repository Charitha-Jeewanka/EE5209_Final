import React from "react";
import "../styles/Footer.css";
import { FaGoogle, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="footer-col">
              <h4>About Us</h4>
              <p>
                We help NOMADs around the world to travel and experience the
                world, with maximum intersts and safety.
              </p>
            </div>
            <div className="footer-col">
              <h4>Contact Us</h4>
              <p>
                Our e-mail service is ready 24x7 at your service and you we will
                get in touch with you at the first moment we receive your mail.
              </p>
            </div>
            <div className="footer-col">
              <h4>Have a Question?</h4>
              <p>
                Feel free to contact us through email and our service agent will
                be with you.
              </p>
            </div>
            <div className="footer-col">
              <h4>follow us</h4>
              <div className="social-links">
                <a href="https://www.google.com/">
                  <FaGoogle />
                </a>
                <a href="https://www.facebook.com/">
                  <FaFacebook />
                </a>
                <a href="https://www.instagram.com/">
                  <FaInstagram />
                </a>
                <a href="https://www.twitter.com/">
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
