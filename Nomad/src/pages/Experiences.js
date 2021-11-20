import React from "react";
import { data } from "../data/ExpData";

import "../styles/Experiences.css";

const Experiences = () => {
  return (
    <div>
      <div className="main">
        <h1>Golden Rules for travellers</h1>
        <div className="rules-container">
          {data.map((item) => {
            return (
              <ul className="number-list">
                <li className="list-item">
                  {item.point}
                  <p>{item.para}</p>
                  <img src={item.url} alt={item.alt} />
                </li>
              </ul>
            );
          })}
        </div>
      </div>
      <div className="Experience-container">
        <h4>Thank you for choosing NOMAD Travels</h4>
      </div>
    </div>
  );
};

export default Experiences;
