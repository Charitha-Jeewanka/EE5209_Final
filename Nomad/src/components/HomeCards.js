import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../styles/Cards.css";

export default function HomeCards(props) {
  const [cards, setCards] = useState([
    {
      url: "",
      title: "",
      price: "",
      duration: "",
      ratings: "",
    },
  ]);

  useEffect(() => {
    fetch("/cards")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setCards(jsonRes));
  });

  function deleteCard(id) {
    axios.delete("delete/" + id);
    alert("card deleted");
  }

  return (
    <div className="card">
      <img src={props.img} alt="charitha" />
      <div className="card-body">
        <h2>{props.title}</h2>

        <div className="blocks-container">
          <div className="block">
            <h4>price</h4>
            <h5>{props.price}</h5>
          </div>
          <div className="block">
            <h4>duration</h4>
            <h5>{props.duration}</h5>
          </div>
          <div className="block">
            <h4>ratings</h4>
            <h5>{props.ratings}</h5>
          </div>
        </div>
        <div className="btn-center">
          <Link className="secondary-btn">View more</Link>
          <br />
          {cards.map((card) => {
            return (
              <div>
                <button
                  className="link-btn"
                  onClick={() => deleteCard(card._id)}
                >
                  delete
                </button>
                <br />
                <Link to="/CRUD" className="link-btn">
                  edit
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
