import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
// import axios from "axios";
import "../styles/Search.css";
const SearchForm = () => {
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
    fetch("/searchDestination")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setCards(jsonRes))

      .catch((err) => console.log(err));
  }, [cards]);
  const [searchKey, setSearchKey] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    // axios
    //   .get("searchDestination", {
    //     params: {
    //       title: searchKey,
    //     },
    //   })
    //   .then(function (response) {
    //     return response;
    //   })
    //   .then((jsonRes) => setCards(jsonRes))
    //   .catch(function (error) {
    //     console.log(error);
    //   })
    //   .then(function () {
    //     // always executed
    //   });
  }

  return (
    <div className="search-container">
      <h4>Could not find your dream destination?</h4>
      <h1>Search here!</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="search-control">
          <label htmlFor="search-key"></label>
          <input
            name="search-key"
            value={searchKey}
            onChange={(e) => setSearchKey(e.target.value)}
            placeholder="Search Destination"
          />
        </div>
        <button className="contact-btn">
          <FaSearch />
          Search
        </button>
      </form>
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
                  <Link className="secondary-btn">View more</Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchForm;
