
function savePanier() {
    localStorage.setItem('panier', JSON.stringify(panier));
}

function loadPanier() {
    panier = JSON.parse(localStorage.getItem('panier'));
}

function addPanier(produit) {
    if (panier[produit] == undefined) {
        panier[produit] = 1;
    } else {
        panier[produit]++;
    }
    savePanier();
}

function delPanier(produit) {
    if (panier[produit] > 1) {
        panier[produit]--;
    } else {
        delete panier[produit];
    }
    savePanier();
}

function delPanierAll() {
    panier = {};
    savePanier();
}

function countPanier() {
    let count = 0;
    Object.values(panier).forEach(item => {
        count += item;
    });
    return count;
}

function totalPanier() {
    let total = 0;
    Object.keys(panier).forEach(produit => {
        total += products[produit].price * panier[produit];
    });
    return total.toFixed(2);
}

export {addPanier}

