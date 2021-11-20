import React, { Component } from "react";
import { Slide } from "react-slideshow-image";

import "react-slideshow-image/dist/styles.css";

class Slideshow extends Component {
  constructor() {
    super();
    this.slideRef = React.createRef();
    this.back = this.back.bind(this);
    this.next = this.next.bind(this);
    this.state = {
      current: 0,
    };
  }

  back() {
    this.slideRef.current.goBack();
  }

  next() {
    this.slideRef.current.goNext();
  }

  render() {
    const properties = {
      duration: 5000,
      autoplay: true,
      transitionDuration: 500,
      arrows: false,
      infinite: true,
      easing: "ease",
    };
    const slideImages = [
      "https://images.unsplash.com/photo-1500754088824-ce0582cfe45f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFudGVybiUyMGZlc3RpdmFsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
      "../images/Berlin.jpg",
      "../images/Rome.jpg",
      "../images/Rocher.jpg",
    ];
    return (
      <div className="App">
        <div className="slide-container">
          <Slide ref={this.slideRef} {...properties}>
            {slideImages.map((each, index) => (
              <div key={index} className="each-slide">
                <img className="lazy" src={each} alt="sample" />
              </div>
            ))}
          </Slide>
        </div>
      </div>
    );
  }
}

export default Slideshow;
