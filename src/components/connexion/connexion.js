import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./connexion.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class connexion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: "",
      prenom: "",
      email: "",
      // password: "",
    };
  }

  //capture de la valeur des inputs inscription form
  handelState = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value })
  }

  //enregistrement données formulaire inscription dans la BDD au clic
  handelEnvoiBddState = () => {
    //mise en forme body
    const body = {
      nom: this.state.nom,
      prenom: this.state.prenom,
      email: this.state.email,
      // password: this.state.password,
    }

    //options
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      mode: "cors",
      body: JSON.stringify(body)
    };

    //Requête fetch
    fetch("http://localhost:8080/inscription", options)
      .then((response) => response.json())
      .then(
        (data) => {
          console.log(data);
        },
        (error) => {
          console.log(error);
        }
      );

  }

  render() {
    return (
      <div class="compte">

        <div class="seconnecter col-md-5">
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Votre identifiant</Form.Label>
              <Form.Control type="email" placeholder="Email" />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Votre mot de passe</Form.Label>
              <Form.Control type="password" placeholder="Mot de passe" />
            </Form.Group>

            <Link to="/recette">
              <Button variant="dark" type="submit">
                Connexion
              </Button>
            </Link>
          </Form>
        </div>

        <div className="sinscrire col-md-5">
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Nom</Form.Label>
              <Form.Control
                type="text"
                name="nom"
                placeholder="Nom"
                value={this.state.nom}
                onChange={this.handelState} />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Prénom</Form.Label>
              <Form.Control
                type="text"
                name="prenom"
                placeholder="Prénom"
                value={this.state.prenom}
                onChange={this.handelState} />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Email"
                value={this.state.email}
                onChange={this.handelState} />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Mot de passe</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Saisir un mot de passe"
                value={this.state.password}
                onChange={this.handelState} />
            </Form.Group>

            <Button variant="dark"
              type="submit"
              onClick={this.handelEnvoiBddState}>
              S'inscrire
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default connexion;
