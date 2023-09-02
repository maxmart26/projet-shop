import { Routes ,Route } from 'react-router-dom';
import image_boucherie from "../data/images/Rectangle-6.png"
import Image_top from "../Components/Image-top/image-top.jsx"
import image_viande from "../data/images/image_viande.png"
import image_charcuterie from "../data/images/image_charcuterie.png"
import image_plat from "../data/images/image_plat.png"
import { Link } from "react-router-dom"


const Home = () => { 
    return (
      <section>
        <Image_top image={image_boucherie} alt="boucherie"/>
        <div id='produits'>
          <div id='nos-produits'>
          <h2>NOS PRODUITS</h2>
          </div>
          <figure id='first-viande'>
            <img src={image_viande} alt="viande"/>
            <Link to="/viande"> <figcaption>NOS VIANDE</figcaption></Link>
          </figure>
          <figure id='first-charcuterie'>
            <img src={image_charcuterie} alt="charcuterie"/>
            <figcaption>NOS CHARCUTERIE</figcaption>
          </figure>
          <figure id='first-plat'>
            <img src={image_plat} alt="plat"/>
            <figcaption>NOS PLATS</figcaption>
          </figure>

        </div>
      </section>
    ) 
}

export default Home