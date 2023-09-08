import React from "react";
import Header from "../components/Header/Header";
import "./products.css";
function products(props) {
  return (
    <main>
      <Header />
      <div className="products-banner">
        <img src="../assets/images/nos-viandes.png" alt="Bannière" />
      </div>
      <section>
        <select>
          <option>Produits</option>
          <option>test2</option>
          <option>test3</option>
        </select>
        <select>
          <option>Prix</option>
          <option>Croissant</option>
          <option>Décroissant</option>
        </select>
      </section>
    </main>
  );
}

export default products;
