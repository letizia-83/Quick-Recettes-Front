//imports
import React, { Component } from "react";
import "./cuisine.css";

//cuisine component
class cuisine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auteur: "",
      texte: "",
      show: false,
      recettes: [],
    };
  }

  detectTexte = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  changeTexte = () => {
    const body = {
      commentaires: [
        { auteur: this.state.auteur },
        { commentaire: this.state.texte },
      ],
    };

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      mode: "cors",
      body: JSON.stringify(body),
    };

    /* Requête */
    fetch("http://localhost:8080/commentaire", options)
      .then((response) => response.json())
      .then(
        (data) => {
          console.log(data);
        },
        (error) => {
          console.log(error);
        }
      );

    this.setState({ show: true });
  };

  refreshTexte = () => {
    this.setState({
      auteur: "",
      texte: "",
      show: false,
    });
  };

  afficheTexte = () => {
    if (this.state.show) {
      return (
        <ul>
          <li>{this.state.auteur}</li>
          <li>{this.state.texte}</li>
        </ul>
      );
    }
  };

  //// FETCH
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

  afficherRecettes = () => {
    return this.state.recettes.map((element, index) => {
      return (
        <div key={index}>
          <ul>
            <h1>{element.titre}</h1>
            {/* <h3>Ingredients </h3> */}
            <br />
            {element.ingredients.map((ingredient, index) => {
              return <li>{ingredient.nom} </li>;
            })}
          </ul>
          <ul>
            {/* <h3>Etapes </h3> */}
            <br />
            {element.recipes.map((recipe, index) => {
              return <li>{recipe.nom} </li>;
            })}
          </ul>{" "}
          <br />
          <br />
          {/* <ul>
            <h3>Commentaire </h3>
            <br />
            {element.commentaires.map((commentaire, index) => {
              return (
                <div>
                  <li> {commentaire.auteur} </li>{" "}
                  <li> {commentaire.commentaire}</li>{" "}
                </div>
              );
            })}
          </ul> */}
        </div>
      );
    });
  };

  afficherCommentaire = () => {
    return this.state.recettes.map((element, index) => {
      return (
        <div key={index}>
          {/* <h3>Commentaire </h3> */}
          <br />
          {element.commentaires.map((commentaire, index) => {
            return (
              <div className="com1">
                <p className="cc1"> {commentaire.auteur} </p>
                <p className="cc1"> {commentaire.commentaire}</p>
              </div>
            );
          })}
        </div>
      );
    });
  };

  render() {
    return (
      <div className="contenurecette">
        <div className="afficherRecette">{this.afficherRecettes()}</div>

        <a
          className="lienn"
          href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.facebook.com%2FClic1Plat%2F&amp;src=sdkpreparse"
          target="blank"
        >
          Partager sur facebook
        </a>
        <div className="input">
          <input
            className="tt"
            type="text"
            name="auteur"
            placeholder="Auteur"
            value={this.state.auteur}
            onChange={this.detectTexte}
          ></input>
          <br />
          <textarea
            type="text"
            name="texte"
            value={this.state.texte}
            onChange={this.detectTexte}
            placeholder="Vous avez testé la recette ? Laissez un commentaire !"
          ></textarea>{" "}
          <br />
          <button type="submit" onClick={this.changeTexte}>
            Poster
          </button>
          <button onClick={this.refreshTexte} type="submit">
            {" "}
            Refresh
          </button>
          {this.afficheTexte()}
        </div>
        <div>{this.afficherCommentaire()}</div>
      </div>
    );
  }
}

export default cuisine;
