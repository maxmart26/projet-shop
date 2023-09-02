import img_logo from "../../data/icon/game-icons_knife-fork.png"
import img_utilisateur from "../../data/icon/iconamoon_profile-thin.png"
import img_panier from "../../data/icon/icon-park-outline_shopping.png"
import React from "react"
import { Link } from "react-router-dom"

const Nav = () => {
    return (
        <div id="nav">
            <nav>
                <div id="first-nav">
                <img src={img_logo} alt="logo" />
                    <Link to="/">ACCUEIL</Link>
                    <Link to="/">PRODUITS</Link>
                    <Link to="/">A PROPOS</Link>
                </div>
                <div id="second-nav">
                    <Link to="/log"><img src={img_utilisateur} alt="profil" /></Link>
                    <Link to="/"><img src={img_panier} alt="panier" /></Link>
                </div>
            </nav>
        </div>
    )
}

export default Nav