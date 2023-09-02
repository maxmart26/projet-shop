import { Link } from "react-router-dom"



const CardViande = ({ viande }) => {
    return (
        <div className="card">
        <Link to={`/produit/${viande.id}`}>
            <div className="card">
                <img src={viande.cover} alt={viande.name}/>
                <div className="card-body">
                    <h2>{viande.name}</h2>
                    <p>{viande.price}€</p>
                </div>
            </div>
        </Link>
        </div>

    )
}

export default CardViande