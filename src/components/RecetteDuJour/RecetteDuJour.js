/**
 * RecetteDuJour.js - 2nd app component
 * 2nd app component
 */

/* Imports */
import React, { Component } from "react";
import Main from "../main/main";
import "./RecetteDuJour.css";

/* RecetteDuJour component ****************************************************************************/
class RecetteDuJour extends Component {
  /* State */
  constructor(props) {
    super(props);
    this.state = {
      showBlock: false,
    };
  }

  /* Interrupteur false/true de show */
  toggleblockShow = () => {
    this.setState({
      showBlock: !this.state.showBlock,
    });
  };

  /* A afficher quand show = true */
  displayRecette = () => {
    if (this.state.showBlock) {
      return <Main />;
    }
  };

  render() {
    return (
      <div className="recette-conteneur">
        <h1 className="rdjTitle">La recette du jour</h1>
        <h2 className="slogan">
          Le P'tit Gourmand : 100% de plaisir non coupable
        </h2>
        <p className="accroche"> Parfait pour les p'tites fringales !</p>
        <button className="mainContenerButton" onClick={this.toggleblockShow}>
          Voir la recette
        </button>
        {this.displayRecette()}
      </div>
    );
  }
}
export default RecetteDuJour;
