import { useParams } from "react-router-dom";
import viande from "../data/json/viande.json";
import {Link} from "react-router-dom";
import Home from "./home";
import { addPanier} from "../script/panier";


const Produit = () => {

    const id = useParams().id;
    for (let data of viande) {
        if (data.id === id) {
            console.log(data);
        return (  
            <div id="produit">
                <div>
                    <img src={data.cover} alt={data.name}/>
                </div>
                <div id="produit-description">
                    <h1>{data.name}</h1>
                    <div id="produit-des-price">
                        <h2>DESCRIPTION</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus maiores rerum molestiae non suscipit fugit ipsam sunt dolorum aut! Corporis omnis nesciunt quae atque repudiandae, facere recusandae in similique saepe.</p>
                        <h3>PRIX</h3>
                        <p id="price">{data.price}€</p>
                    </div>
                    <button>AJOUTER AU PANIER</button>
                </div>
            </div>
        );
    };
};
return <Home/>;
};
export default Produit;
