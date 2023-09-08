import React from "react";
import Link from "next/link";
import "./Header.css";

function Header(props) {
  return (
    <header>
      <nav>
        <Link href="/">
          <img src="../assets/icon/logo.png" alt="logo" />
        </Link>
        <Link href="/">ACCUEIL</Link>
        <Link href="/products">PRODUITS</Link>
        <Link href="/about">À PROPOS</Link>
      </nav>
      <div className="account-shopping">
        <Link href="/login">
          <img src="../assets/icon/account.png" alt="compte" />
        </Link>
        <Link href="/shopping-cart">
          <img src="../assets/icon/shopping.png" alt="pannier d'achat" />
        </Link>
      </div>
    </header>
  );
}

export default Header;
