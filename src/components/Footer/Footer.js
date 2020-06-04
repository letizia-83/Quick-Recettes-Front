/**
 * Footer.js - Footer component
 * Footer component
 */

// Imports
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

// Footer Component
class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <br />
        <Link to="/tableau">
          <h1 className="contactFooter">Contactez nous</h1>
        </Link>
        <h1 className="suivreFooter">Suivez nous</h1>
        <a
          className="facebookFooter"
          href="https://fr-fr.facebook.com/lapagede750grammes"
        >
          Facebook
        </a>
        <br />
        <a
          className="instagramFooter"
          href="https://www.instagram.com/750grammes/?hl=fr"
        >
          Instagram
        </a>
      </div>
    );
  }
}

export default Footer;
