// Imports
import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import "./carousel.css";

// Class Carousel Components
class carousel extends Component {
  render() {
    return (
      <div>
        <Carousel className="carousel">
          <Carousel.Item>
            <img
              className="dblock"
              src="/img/asiatique.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Cuisine Asiatique</h3>
              <Link to="/cuisine">
                <p>Voir les recettes</p>
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="dblock"
              src="/img/carbonara.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Cuisine Italienne</h3>
              <Link to="/cuisine">
                <p>Voir les recettes</p>
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="dblock" src="/img/cake1.jpg" alt="Third slide" />

            <Carousel.Caption>
              <h3>Desserts</h3>
              <Link to="/cuisine">
                <p>Voir les recettes</p>
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default carousel;
