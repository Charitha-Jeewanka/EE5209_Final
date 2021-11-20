import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// import SearchForm from "../components/SearchForm";

// cards
//import HomeCards from "../components/HomeCards"; //structure
// import Loading from "../components/Loading";

//styling
import "../styles/Dest.css";
import "../styles/Cards.css";
import "../styles/Forms.css";
import noMad from "../logov2.svg";

export default function Destinations() {
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
      .then((jsonRes) => setCards(jsonRes))
      .catch((err) => console.log(err));
  }, [cards]);

  function deleteCard(id) {
    axios.delete("delete/" + id);
    alert("card deleted");
  }

  // Update
  const [isPut, setIsPut] = useState(false);
  const [updatedItem, setUpdatedItem] = useState([
    {
      id: "",
      url: "",
      title: "",
      price: "",
      duration: "",
      ratings: "",
    },
  ]);

  function openUpdate(id) {
    setIsPut(true);
    setUpdatedItem((prevInput) => {
      return {
        ...prevInput,
        id: id,
      };
    });
  }

  function closeUpdate(id) {
    setIsPut(false);
  }

  function updateItem(id) {
    axios.put("put/" + id, updatedItem);
    alert("Item updated");
  }

  function handleUpdate(e) {
    const { name, value } = e.target;
    setUpdatedItem((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }

  return (
    <div>
      {!isPut ? (
        <div>
          <div className="dest-hero">
            <div className="dest-container">
              <img src={noMad} alt="logo" />
            </div>
          </div>
          <div className="add-link">
            <Link to="/create" className="link-btn">
              Create New
            </Link>
          </div>
          <div className="cards">
            {cards.map((item) => {
              return (
                <div className="card">
                  <img src={item.url} alt="charitha" />
                  <div className="card-body">
                    <h2>{item.title}</h2>

                    <div className="blocks-container">
                      <div className="block">
                        <h4>price</h4>
                        <h5>{item.price}</h5>
                      </div>
                      <div className="block">
                        <h4>duration</h4>
                        <h5>{item.duration}</h5>
                      </div>
                      <div className="block">
                        <h4>ratings</h4>
                        <h5>{item.ratings}</h5>
                      </div>
                    </div>
                    <div className="btn-center">
                      <Link to="/experiences" className="secondary-btn">
                        View more
                      </Link>
                      <br />
                      <button
                        className="link-btn"
                        onClick={() => deleteCard(item._id)}
                      >
                        delete
                      </button>
                      <br />
                      <button
                        className="link-btn"
                        onClick={() => openUpdate(item._id)}
                      >
                        edit
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="form-container">
          <div className="form-control">
            <label htmlFor="url"> </label>
            <input
              name="url"
              value={updatedItem.url}
              onChange={handleUpdate}
              placeholder="Image URL"
            />
          </div>
          <div className="form-control">
            <label htmlFor="title"></label>
            <input
              name="title"
              value={updatedItem.title}
              onChange={handleUpdate}
              placeholder="Title "
            />
          </div>
          <div className="form-control">
            <label htmlFor="price"></label>
            <input
              name="price"
              value={updatedItem.price}
              onChange={handleUpdate}
              placeholder="Price "
            />
          </div>
          <div className="form-control">
            <label htmlFor="duration"> </label>
            <input
              name="duration"
              value={updatedItem.duration}
              onChange={handleUpdate}
              placeholder="Duration"
            />
          </div>
          <div className="form-control">
            <label htmlFor="ratings"></label>
            <input
              name="ratings"
              value={updatedItem.ratings}
              onChange={handleUpdate}
              placeholder="Ratings "
            />
          </div>
          <button className="secondary-btn" onClick={closeUpdate}>
            Go Back
          </button>
          <button
            className="secondary-btn"
            onClick={() => updateItem(updatedItem.id)}
          >
            Update
          </button>
        </div>
      )}
    </div>
  );
}
