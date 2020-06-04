/**
 * App.js - app component
 * app component
 */

/* Imports */
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Tableau from "./tableau/tableau";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./navbar/nav.js";
import RecetteDuJour from "./RecetteDuJour/RecetteDuJour";
import Carousel from "./carousel/carousel";
import Cuisine from "./carousel/cuisine";
import ProposerRecette from "./proposerRecette/proposerRecette";
import Connexion from "./connexion/connexion";
import Footer from "./Footer/Footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Router>
        <Nav />

        <div className="content">
          <Switch>
            <Route path="/recette">
              <RecetteDuJour />

              {/* <Main /> */}
            </Route>

            <Route path="/contact">
              {/* <Tableau /> */}
              <Connexion />
            </Route>

            <Route path="/carousel">
              <Carousel />
            </Route>

            <Route path="/cuisine">
              <Cuisine />
            </Route>

            <Route path="/posteRecette">
              <ProposerRecette />
            </Route>

            <Route path="/tableau">
              <Tableau />
            </Route>
          </Switch>
          <footer>
            <Footer />
          </footer>
        </div>
      </Router>
    );
  }
}
export default App;
