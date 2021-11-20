import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { links } from "../data/RoutingData";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <h3>
            NO<span>MAD</span>
          </h3>
          <button
            className="nav-toggle"
            onClick={() => setShowLinks(!showLinks)}
          >
            <FaBars />
          </button>
        </div>
        <div className="links-container" ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  {/* <a href={url}>{text}</a> */}
                  <Link to={url} className="link-styles">
                    {text}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="contact">
          <Link to="/contact" className="contact-btn">
            contact us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
