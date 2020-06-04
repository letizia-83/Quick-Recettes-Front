//imports
import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Swal from "sweetalert2";
import Button from "react-bootstrap/Button";
import "./proposerRecette.css";

class proposerRecette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titre: "",
      ingredient1: "",
      ingredient2: "",
      ingredient3: "",
      ingredient4: "",
      ingredient5: "",
      show: false,
      recipe1: "",
      recipe2: "",
      recipe3: "",
      recipe4: "",
      recipe5: "",
      alertSweet: false,
      afficherTableauIngredien: false,
      affichageDansMain: false,
    };
  }

  //****changer le state pour afficher dans main */

  ///** La fonction pour afficher une alerte */
  swal = () => {
    if (this.state.alertSweet) {
      Swal.fire({
        title: "Maintenant au travail!",
        text: "",
        imageUrl: "/img/recette.jpg",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Custom image",
      });
      this.setState({ alertSweet: false });
    }
  };

  handelState = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  //*****L'affichage du contenu */

  afficherContenu = () => {
    if (this.state.show) {
      return (
        <ol>
          <li> {this.state.recipe1}</li>
          <li> {this.state.recipe2}</li>
          <li> {this.state.recipe3}</li>
          <li> {this.state.recipe4}</li>
          <li> {this.state.recipe5}</li>
        </ol>
      );
    }
  };
  //****changer le state pour afficher dans main */
  handelAfficherDansMainState = () => {
    //// la fonction qui sera appellé pour l'affichage
    /* Options, paramètres de la requête */
    const body = {
      titre: this.state.titre,
      ingredients: [
        { nom: this.state.ingredient1 },
        { nom: this.state.ingredient2 },
        { nom: this.state.ingredient3 },
        { nom: this.state.ingredient4 },
        { nom: this.state.ingredient5 },
      ],
      recipes: [
        { nom: this.state.recipe1 },
        { nom: this.state.recipe2 },
        { nom: this.state.recipe3 },
        { nom: this.state.recipe4 },
        { nom: this.state.recipe5 },
      ],
    };
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      mode: "cors",
      body: JSON.stringify(body),
    };

    /* Requête */
    fetch("http://localhost:8080/newRecette", options)
      .then((response) => response.json())
      .then(
        (data) => {
          console.log(data);
        },
        (error) => {
          console.log(error);
        }
      );

    this.setState({ affichageDansMain: true });
    this.setState({ afficherTableauIngredien: true });
  };

  //*******Afficher pour ingrédients dans Main */
  afficherIngredientDansMain = () => {
    if (this.state.afficherTableauIngredien) {
      return (
        <ol>
          <li> {this.state.titre}</li>
          <li> {this.state.ingredients}</li>
          <li> {this.state.ingredient2}</li>
          <li> {this.state.ingredient3}</li>
          <li> {this.state.ingredient4}</li>
          <li> {this.state.ingredient5}</li>
        </ol>
      );
    }
  };

  //******Affichage dans main */
  afficherContenuDansMain = () => {
    if (this.state.affichageDansMain) {
      return (
        <ol>
          <li> {this.state.recipe1}</li>
          <li> {this.state.recipe2}</li>
          <li> {this.state.recipe3}</li>
          <li> {this.state.recipe4}</li>
          <li> {this.state.recipe5}</li>
        </ol>
      );
    }
  };
  //*****L'affichage du contenue */

  render() {
    return (
      <div id="container1">
        <Form.Group>
          <p>Veuillez noter 5 ingrédients et 5 étapes max </p>

          <Form.Row className="justify-content-md-center titre">
            <Col xs={6}>
              <Form.Control
                onChange={this.enregistrerDansTableauIngredient}
                className="input1"
                type="text"
                placeholder="titre"
                name="titre"
                onChange={this.handelState}
                value={this.state.titre}
              />
            </Col>
          </Form.Row>
          <hr />
          <Form.Row className="justify-content-md-center">
            <Col xs={6}>
              <Form.Control
                onChange={this.enregistrerDansTableauIngredient}
                className="input1"
                type="text"
                placeholder="ingredient 1"
                name="ingredient1"
                onChange={this.handelState}
                value={this.state.ingredient1}
              />
            </Col>
          </Form.Row>
          <br />
          <Form.Row className="justify-content-md-center">
            <Col xs={6}>
              <Form.Control
                onChange={this.enregistrerDansTableauIngredient}
                className="input2"
                type="text"
                placeholder="ingredient 2"
                name="ingredient2"
                onChange={this.handelState}
                value={this.state.ingredient2}
              />
            </Col>
          </Form.Row>
          <br />
          <Form.Row className="justify-content-md-center">
            <Col xs={6}>
              <Form.Control
                onChange={this.enregistrerDansTableauIngredient}
                className="input3"
                type="text"
                placeholder="ingredient 3"
                name="ingredient3"
                onChange={this.handelState}
                value={this.state.ingredient3}
              />
            </Col>
          </Form.Row>
          <br />
          <Form.Row className="justify-content-md-center">
            <Col xs={6}>
              <Form.Control
                onChange={this.enregistrerDansTableauIngredient}
                className="input4"
                type="text"
                placeholder="ingredient 4"
                name="ingredient4"
                onChange={this.handelState}
                value={this.state.ingredient4}
              />
            </Col>
          </Form.Row>
          <br />
          <Form.Row className="justify-content-md-center">
            <Col xs={6}>
              <Form.Control
                onChange={this.enregistrerDansTableauIngredient}
                className="input5"
                type="text"
                placeholder="ingredient 5"
                name="ingredient5"
                onChange={this.handelState}
                value={this.state.ingredient5}
              />
            </Col>
          </Form.Row>
          <br />
          <Form.Row className="justify-content-md-center">
            <Col xs={6}>
              <Form.Control
                onChange={this.enregistrerDansTableauIngredient}
                className="input6"
                type="text"
                placeholder="Etape 1"
                name="recipe1"
                onChange={this.handelState}
                value={this.state.recipe1}
              />
            </Col>
          </Form.Row>
          <br />
          <Form.Row className="justify-content-md-center">
            <Col xs={6}>
              <Form.Control
                onChange={this.enregistrerDansTableauIngredient}
                className="input7"
                type="text"
                placeholder="Etape 2 "
                name="recipe2"
                onChange={this.handelState}
                value={this.state.recipe2}
              />
            </Col>
          </Form.Row>
          <br />
          <Form.Row className="justify-content-md-center">
            <Col xs={6}>
              <Form.Control
                onChange={this.enregistrerDansTableauIngredient}
                className="input8"
                type="text"
                placeholder="Etape 3"
                name="recipe3"
                onChange={this.handelState}
                value={this.state.recipe3}
              />
            </Col>
          </Form.Row>
          <br />
          <Form.Row className="justify-content-md-center">
            <Col xs={6}>
              <Form.Control
                onChange={this.enregistrerDansTableauIngredient}
                className="input9"
                type="text"
                placeholder="Etape 4"
                name="recipe4"
                onChange={this.handelState}
                value={this.state.recipe4}
              />
            </Col>
          </Form.Row>
          <br />
          <Form.Row className="justify-content-md-center">
            <Col xs={6}>
              <Form.Control
                onChange={this.enregistrerDansTableauIngredient}
                className="input10"
                type="text"
                placeholder="Etape 5"
                name="recipe5"
                onChange={this.handelState}
                value={this.state.recipe5}
              />
            </Col>
          </Form.Row>
          <br />
          <Form.Row className="justify-content-md-center">
            <Button
              className="bt1"
              variant="primary"
              onClick={this.changerShow}
            >
              Valider
            </Button>
            <Button
              className="bt2"
              variant="primary"
              onClick={this.handelAfficherDansMainState}
            >
              Publier
            </Button>
            {/* leState={this.state.affichageDansMain}  Appeler le state dans main  A inserer dans le bouton Publier*/}
          </Form.Row>

          <Form.Row className="justify-content-md-center">
            <div className="recette">
              {" "}
              Les étapes sont :{this.swal()} {this.afficherContenu()}{" "}
            </div>
          </Form.Row>
        </Form.Group>
      </div>
    );
  }
}

export default proposerRecette;
