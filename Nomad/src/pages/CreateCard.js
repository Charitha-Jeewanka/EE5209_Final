import React, { useState } from "react";
import axios from "axios";

import "../styles/Forms.css";

const CreateCard = () => {
  const [card, setCard] = useState({
    url: "",
    title: "",
    price: "",
    duration: "",
    ratings: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setCard((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }

  function addCard(e) {
    e.preventDefault();
    alert("Card created");
    const newCard = {
      url: card.url,
      title: card.title,
      price: card.price,
      duration: card.duration,
      ratings: card.ratings,
    };
    axios.post("createCard", newCard);
  }

  return (
    <article>
      <h1>Create Card</h1>
      <form className="form-container">
        <div className="form-control">
          <label htmlFor="url"> </label>
          <input
            name="url"
            value={card.url}
            onChange={handleChange}
            placeholder="Image URL"
          />
        </div>
        <div className="form-control">
          <label htmlFor="title"></label>
          <input
            name="title"
            value={card.title}
            onChange={handleChange}
            placeholder="Title "
          />
        </div>
        <div className="form-control">
          <label htmlFor="price"></label>
          <input
            name="price"
            value={card.price}
            onChange={handleChange}
            placeholder="Price "
          />
        </div>
        <div className="form-control">
          <label htmlFor="duration"> </label>
          <input
            name="duration"
            value={card.duration}
            onChange={handleChange}
            placeholder="Duration"
          />
        </div>
        <div className="form-control">
          <label htmlFor="ratings"></label>
          <input
            name="ratings"
            value={card.ratings}
            onChange={handleChange}
            placeholder="Ratings "
          />
        </div>
        <button className="secondary-btn" onClick={addCard}>
          Create Card
        </button>
      </form>
    </article>
  );
};

export default CreateCard;
