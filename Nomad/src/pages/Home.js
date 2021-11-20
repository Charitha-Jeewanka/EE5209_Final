import React from "react";
import { Link } from "react-router-dom";

import blueCard from "../images/blueCardComplete.jpg";
import redCard from "../images/redCard.jpg";
import greenCard from "../images/greenCard.jpg";
import lastCard from "../images/lastCard.jpg";
import Bali from "../images/Bali.jpg";
import Berlin from "../images/Berlin.jpg";
import Rochor from "../images/Rochor.jpg";
import Rome from "../images/Rome.jpg";

const Home = () => {
  return (
    <div>
      <div className="hero-container">
        <div className="hero-text">
          <h1>Discover the World in the way of NOMAD</h1>
          <p>
            'A good traveller has no fixed plans and is not intent on arriving'
            we are sure you have heard this saying, come and join with us, let
            us guide you to the journey of your lifetime. Plan your dream
            journey with NOMAD travels and leave your mind and body at peace
          </p>
          <Link to="/destinations" className="primary-btn">
            get started
          </Link>
        </div>
      </div>

      <div className="welcome">
        <div className="welcome-text">
          <h2>welcome to NOMAD</h2>
          <h1>it's time to start your adenture</h1>
          <p>
            Online booking can cause many trouble if you are novice, more than
            26% of people make mistakes when booking online. Leave it up to us
            to take care of things so you can focus on what to do when you get
            to the destination
          </p>
          <Link to="/destinations" className="primary-btn">
            destinations
          </Link>
        </div>
        <div className="welcome-images">
          <div className="image">
            <img src={blueCard} alt="actions" />
          </div>
          <div className="image">
            <img src={greenCard} alt="actions" />
          </div>
          <div className="image">
            <img src={redCard} alt="actions" />
          </div>
          <div className="image">
            <img src={lastCard} alt="actions" />
          </div>
        </div>
      </div>
      <div className="destinations">
        <div className="destination-text">
          <h2>Best Destinations of the month</h2>
          <h1>Plan your destination today</h1>
        </div>
        <div className="destination-images">
          <div className="row">
            <img src={Bali} alt="Bali" />
            <img src={Rochor} alt="Rochor" />
          </div>
          <div className="column">
            <img src={Berlin} alt="Berlin" />
            <img src={Rome} alt="Rome" />
          </div>
        </div>
      </div>
      <div className="about">
        <img
          className="about-main-img"
          src="https://images.unsplash.com/photo-1501446529957-6226bd447c46?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80"
          alt="about"
        />
        <img
          className="about-sub"
          src="https://images.unsplash.com/photo-1506125840744-167167210587?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          alt="header-sub"
        />
        <div className="about-text">
          <h2>about us</h2>
          <h1>Make your vacation more Memorable and safe with Us</h1>
        </div>
      </div>
      <div className="last">
        <div className="last-left">
          <img
            src="https://images.unsplash.com/photo-1517868163143-6eb6c78dbf54?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80"
            alt="lastLeft"
          />
        </div>
        <div className="last-right">
          <p>
            We are a world class travel agency at your service with provisions
            to safety regulations,personal guides, accomodations and travel
            recommendations.
            <br />
            Our primary focus is to make your vacation more memorable and
            comfortable, providing a service worth of your money. To be the
            leading Travel Agency in the travel industry, providing efficient
            and effective services and product to our customers. Mission
            <br />
            Will provide quality services amd product.
            <br />
            Develop comprehensive travel product.
            <br />
            Maintaining flexibility to adapt to local market trends.
            <br />
            Will provide relevant and highly competitive tour packages for the
            benefits of our customers. Expand our relationship with airlines,
            hotels, tour operators and other related travel services. Operating
            continously in compliance with applicable industry principles and
            standards.
          </p>
          <Link to="/experiences" className="primary-btn">
            book your destination
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
