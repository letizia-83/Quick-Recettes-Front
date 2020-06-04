import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import Cuisine from "../carousel/cuisine";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      recettes: [],
    };
  }

  // changeForm = () => {
  //   this.setState({ form: true });
  // };

  // afficherForm = () => {
  //   if (this.state.form) {
  //     return;
  //   }
  // };

  componentDidMount() {
    /* Options, paramètres de la requête */
    const options = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      mode: "cors",
    };

    /* Requête */
    fetch("http://localhost:8080/newRecette", options)
      .then((response) => response.json())
      .then(
        (data) => {
          this.setState({ recettes: data });
        },
        (error) => {
          console.log(error);
        }
      );
  }
  updateSearch(e) {
    this.setState({ search: e.target.value });
  }

  // afficherRecettes = ()=>{
  //   let filtredRecette = this.state.recettes.filter(
  //     (recette)=>{
  //       return recette.titre.indexOf(this.state.search) !== -1;
  //     }
  //   );
  //   return filtredRecette.map((element)=>{
  //     return(

  //           <Cuisine key={element.titre} element={element.titre}/>

  //     )
  //   })
  // }

  render() {
    return (
      <nav className="menu">
        <div className="titre">
          <Link to="/recette" className="lien">
            <h2 className="navh2">Quick Recettes</h2>
          </Link>
        </div>
        <div className="recherche">
          <input
            type="text"
            placeholder="Je cherche une recette"
            onChange={this.updateSearch.bind(this)}
            value={this.state.search}
          ></input>
        </div>
        <div className="contact">
          <Link to="/carousel">
            <button>Recettes</button>
          </Link>
        </div>
        <div className="posteRecette">
          <Link to="/posteRecette">
            <button>Poster</button>
          </Link>
        </div>
        <div className="connexion">
          <Link to="/contact">
            <button>CONNEXION</button>
          </Link>
        </div>
        {/* <div className="search">
          <Link to="/cuisine">
            <button onClick={this.afficherRecettes()} >Chercher</button>
          </Link>
          
        </div> */}
      </nav>
    );
  }
}

export default Nav;
