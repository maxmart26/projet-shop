import Image_top from "../Components/Image-top/image-top"
import datas from "../data/json/viande.json"
import CardViande from "../Components/Card-viande/card-viande"



const Viande = () => {
    return (
        <div id="body">
            <div id="top">
            <Image_top image='../data/images/image_viande.png' alt='viande' />
            </div>
            <div id="button">
                <button>VIANDE</button>
                <button>PRIX</button>
            </div>
            <div id="produits">
                {datas.map((viande) => (
                    <CardViande viande={viande} key={viande.id} />
                ))}
            </div>
        </div>
    )
}

export default Viande