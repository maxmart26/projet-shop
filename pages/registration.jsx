

const Registration = () => {
    return (
        <div id="registration">
            <h1>INSCRIPTION</h1>
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
                    <div className="formulaire">
                    <label for="password">CONFIRMATION PASSWORD</label>
                    <input type="password" id="password" name="password"  />
                    </div>
                    <div className="formulaire">
                    <label for="nom">NOM</label>
                    <input type="text" id="nom" name="nom"  />
                    </div>
                    <div className="formulaire">
                    <label for="prenom">PRENOM</label>
                    <input type="text" id="prenom" name="prenom"  />
                    </div>
                    <div className="formulaire">
                    <label for="adresse">ADRESSE</label>
                    <input type="text" id="adresse" name="adresse"  />
                    </div>
                    <div className="formulaire">
                    <label for="code_postal">CODE POSTAL</label>
                    <input type="text" id="code_postal" name="code_postal"  />
                    </div>
                    <div className="formulaire">
                    <label for="ville">VILLE</label>
                    <input type="text" id="ville" name="ville"  />
                    </div>
                    <div className="formulaire">
                    <label for="pays">PAYS</label>
                    <input type="text" id="pays" name="pays"  />
                    </div>
                    <div className="formulaire">
                    <label for="telephone">TELEPHONE</label>
                    <input type="text" id="telephone" name="telephone"  />
                    </div>
                    <div className="formulaire">
                    <label for="date_naissance">DATE DE NAISSANCE</label>
                    <input type="date" id="date_naissance" name="date_naissance"  />
                    </div>
                    <div id="button-log">
                    <input type="submit" value="INSCRIPTION" />
                    </div>
                </form>
                
            </div>
        </div>
    )

}

export default Registration