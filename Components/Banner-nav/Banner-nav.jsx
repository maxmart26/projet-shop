
import Collapse from "../Collapse/Collapse"


const BannerNav = () => {
    const viande = <ul>
        <li>boeuf</li>
        <li>veau</li>
        <li>agneau</li>
        <li>porc</li>
        <li>volaille</li>
        <li>lapin</li>
    </ul>
    const charcuterie = <ul>
        <li>saucisson</li>
        <li>saucisse</li>
        <li>rillette</li>
        <li>terrines</li>
        <li>paté</li>
        <li>andouillette</li>
    </ul>
    const plats = <ul>
        <li>plat preparé</li>
        <li>plat cuisiné</li>
        <li>plat traiteur</li>
    </ul>

return (
    <div id="banner-nav">
        <Collapse title="viande" content={viande}/>
        <Collapse title="charcuterie" content={charcuterie}/>
        <Collapse title="plats" content={plats}/>
    </div>
    )
}

export default BannerNav