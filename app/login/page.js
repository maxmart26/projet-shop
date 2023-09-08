import React from "react";
import "./login.css";
import Header from "../components/Header/Header";
import Link from "next/link";

function login(props) {
  return (
    <>
      <Header />
      <h1>CONNECTION / INSCRIPTION</h1>
      <form
        className="login-form"
        action=""
        id="loginForm"
        name="loginForm"
        method="POST"
      >
        <label htmlFor="email">
          E-MAIL
          <input id="email" type="text" />
        </label>
        <label htmlFor="password">
          PASSWORD
          <input id="password" type="text" />
        </label>
        <div className="signup-login">
          <Link href="/signup">
            <button>S'INSCRIRE</button>
          </Link>
          <Link href="/add-product">
            <button>SE CONNECTER</button>
          </Link>
        </div>
      </form>
    </>
  );
}

export default login;
