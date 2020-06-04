import React, { Component } from "react";
import "./main.css";
// import ProposerRecette from "../proposerRecette/proposerRecette";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableauIngredients: [
                "Pain",
                "Viande hachée",
                "Tranche de tomate",
                "Tranche de concombre",
                "75g de rillettes de saumon",
                "3 cuillère de crème fraîche",
                "Aneth",
                "poivre",
                "sel",
            ],
            derouleDeLaRecette: [
                "Mettez à fondre votre beurre dans une poêle et préchauffez votre four à 240°C (thermostat 8).",
                "Coupez le haut de la courge en tranche d'environ 1 cm d'épaisseur (il vous en faut au minimum 4 tranches), et les faire dorer dans le beurre (1 à 2 min sur chaque côté).",
                "Lorsque les côtés de chaque tranche sont bien dorés, ajoutez du gruyère sur chaque tranche et les enfourner au four pendant une dizaine de minutes (tout dépend de l'épaisseur de vos tranches).",
                "Pendant ce temps faites cuire vos steaks hachés à votre goût.",
                "Une fois vos tranches de courges sont cuites, retirez la peau (beaucoup plus simple une fois la courge cuite) et passez au dressage : le steak haché entre 2 tranches de butternut.",
            ],
        };
    }
    // Function shows recipes table
    afficherRecetteHamburger = () => {
        let liste = [];
        for (let i = 0; i < this.state.derouleDeLaRecette.length; i++) {
            liste.push(<li>{this.state.derouleDeLaRecette[i]} </li>);
        }
        return liste;
    };
    // Function shows ingredient
    afficherTableauHamburger = () => {
        let liste = [];
        for (let i = 0; i < this.state.tableauIngredients.length; i++) {
            liste.push(<li> {this.state.tableauIngredients[i]}</li>);
        }
        return liste;
    };
    //****Function afficher proposer recette */
    afficherProposerRecette = () => {
        if (this.props.leState) {
            return <h1>Bonjour</h1>;
        }
    };

    render() {
        return (
            <div>
                <section className="container">
                    <div id="ingredient">
                        <h2 className="mainh2"> Les ingrédients</h2>
                        <ol>{this.afficherTableauHamburger()}</ol>
                    </div>
                    <div id="recette">
                        <h2> La recette</h2>
                        <ol>{this.afficherRecetteHamburger()}</ol>
                    </div>
                    <div id="commentaire">
                        {/* facebook SDK  1part */}
                        <div id="fb-root"></div>
                        <script
                            async
                            defer
                            crossorigin="anonymous"
                            src="https://connect.facebook.net/fr_FR/sdk.js#xfbml=1&version=v6.0&appId=2143733312616357&autoLogAppEvents=1"
                        ></script>
                        <h2> les commentaires</h2>
                        <a
                            id="lien1"
                            target="_new"
                            href="https://www.marmiton.org/recettes/recette_hamburger-butternut_312947.aspx"
                        >
                            {" "}
                            Visitez les commentaires
                        </a>{" "}
                        <tr></tr>
                        <a
                            id="lien2"
                            target="_new"
                            href="https://www.marmiton.org/recettes/recette_burger-feuillete_347367.aspx"
                        >
                            {" "}
                            Plus de photos
                        </a>
                        {/* facebook SDK  2 part*/}
                        <div
                            class="fb-share-button"
                            data-href="https://www.facebook.com/Clic1Plat/"
                            data-layout="button_count"
                            data-size="small"
                        >
                            <a
                                // target="_blank"
                                href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.facebook.com%2FClic1Plat%2F&amp;src=sdkpreparse"
                                class="fb-xfbml-parse-ignore"
                            >
                                Partager sur Facebook
                            </a>
                        </div>
                    </div>
                    {this.afficherProposerRecette()}
                </section>
            </div>
        );
    }
}

export default Main;
