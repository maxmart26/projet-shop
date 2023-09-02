



const AddProduit = () => {
    return (
        <div id="form-add">
            <h1>AJOUTER UN PRODUIT</h1>
            <form>
                <div className="formulaire">
                    <label for="category">CATEGORIE</label>
                    <select name="category" id="category">
                        <option value="VIANDE">select category</option>
                        <option value="VIANDE">VIANDE</option>
                        <option value="CHARCUTERIE">CHARCUTERIE</option>
                        <option value="PLAT">PLAT</option>
                    </select>
                    <label for="name">NOM DU PRODUIT</label>
                    <input type="text" id="name" name="name"/>
                    <label for="price">PRIX</label>
                    <input type="text" id="price" name="price"/>
                    <label for="cover">IMAGE</label>
                    <input type="file" id="cover" name="cover"/>
                    <label for="description">DESCRIPTION</label>
                    <input type="text" id="description" name="description"/>
                </div>
                <div id="button-log">
                    <button>AJOUTER</button>
                </div>
            </form>
        </div>
    )
}

export default AddProduit