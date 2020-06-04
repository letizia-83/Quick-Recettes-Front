import React, { Component } from "react";
import Swal from "sweetalert2";
import "./tableau.css";

class tableau extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: "",
      prenom: " ",
      mail: "",
      message: "",
      show: false,
      alertSweet: false,
    };
  }
  handelState = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    // let coordonnées = [],
    // coordonnées.push([e.target.name] e.target.value)
  };
  refreshForm = (e) => {
    e.preventDefault();
    this.setState({
      nom: "",
      prenom: "",
      mail: "",
      message: "",
    });
  };
  changerShow = (e) => {
    e.preventDefault();
    this.setState({ show: true });
    this.setState({ alertSweet: true });

    const body = {
      nom: this.state.nom,
      prenom: this.state.prenom,
      mail: this.state.mail,
      message: this.state.message,
    };

    const options = {
      method: "POST",
      headers: { "Content-type": "application/json" },
      mode: "cors",
      body: JSON.stringify(body),
    };

    fetch("http://localhost:8080/formulaire", options)
      .then((response) => response.json())
      .then(
        (data) => {
          console.log(data);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  // afficherNom = ()=> {
  //     if(this.state.show){
  //     return <p> Bienvenue {this.state.nom}</p>
  //     }
  // }

  swal = () => {
    if (this.state.alertSweet) {
      Swal.fire({
        title: "Bienvenue!",
        text: this.state.prenom,
        imageUrl: "/img/img1.jpg",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Custom image",
      });
      this.setState({ alertSweet: false });
    }
  };

  render() {
    return (
      <div>
        <form className="container-fluid col-md-10">
          <h2 id="title">Formulaire de contact </h2>
          {/* <!-- Nom   --> */}
          <div className="form-row">
            <div className="form-group col-md-6">
              <label>Nom</label>
              <input
                onChange={this.handelState}
                name="nom"
                type="text"
                className="form-control"
                value={this.state.nom}
                placeholder="Votre nom"
              />
            </div>
          </div>
          {/* <!--        Prenom   --> */}
          <div className="form-row">
            <div className="form-group col-md-6">
              <label>Prenom</label>
              <input
                onChange={this.handelState}
                name="prenom"
                type="text"
                className="form-control"
                value={this.state.prenom}
                placeholder="Votre prenom"
              />
            </div>
          </div>
          {/* <!--      Mail       --> */}
          <div className="form-row">
            <div className="form-group col-md-6">
              <label>Email</label>
              <input
                onChange={this.handelState}
                name="mail"
                type="email"
                className="form-control"
                value={this.state.mail}
                placeholder="Email"
              />
            </div>
          </div>
          {/* <!-- TEL  --> */}
          <div className="form-row">
            <div className="form-group col-md-6">
              <label>Message </label>
              <textarea
                onChange={this.handelState}
                name="message"
                type="text"
                className="form-control"
                value={this.state.message}
                placeholder="Votre message"
              ></textarea>
            </div>
          </div>

          {/* 
                    <!-- Valider --> */}
          <button
            onClick={this.changerShow}
            type="submit"
            className="btn btn-dark"
            id="valider"
          >
            Valider
          </button>
          <button
            onClick={this.refreshForm}
            type="submit"
            className="btn btn-dark"
            id="refresh"
          >
            {" "}
            Refresh
          </button>

          <div>{this.swal()} </div>
        </form>
      </div>
    );
  }
}

export default tableau;
