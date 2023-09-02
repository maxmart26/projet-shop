import { Link } from "react-router-dom"

const Log = () => {
    return (
        <div id="log">
            <h1>CONNECTION / INSCRIPTION</h1>
            <div>
                <form>
                    <div className="formulaire">
                    <label for="email">E-MAIL</label>
                    <input type="email" id="email" name="email"  />
                    </div>
                    <div className="formulaire">
                    <label for="password">PASSWORD</label>
                    <input type="password" id="password" name="password"  />
                    </div>
                    <div id="button-log">
                    <Link to="/registration">INSCRIPTION</Link>
                    <Link to="/add-produit">CONNECTION</Link>
                    </div>
                </form>
                
            </div>
        </div>
    )

}

export default Log