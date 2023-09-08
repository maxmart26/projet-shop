"use client";
import Header from "@/app/components/Header/Header";
import Link from "next/link";
import { useState } from "react";
import "./signup.css";

function Signup() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    lastName: "",
    firstName: "",
    address: "",
    postalAddress: "",
    city: "",
    country: "",
    phone: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const showOrhidePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // envoyer les données du formulaire avec l'API .
    console.log("Données du formulaire soumises :", formData);
    window.location.href = "/add-product";
  };

  return (
    <div>
      <Header />

      <h1>INSCRIPTION</h1>
      <form className="signup-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">E-MAIL</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="password">
          <label htmlFor="password">MOT DE PASSE</label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            minLength={5}
            required
          />
          <div
            className="show-hide-password"
            onClick={() => {
              showOrhidePassword();
            }}
          ></div>
        </div>
        <div>
          <label htmlFor="lastName">NOM</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="firstName">PRÉNOM</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="address">ADRESSE</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="postalAddress">CODE POSTAL</label>
          <input
            type="text"
            id="postalAddress"
            name="postalAddress"
            value={formData.postalAddress}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="city">VILLE</label>
          <input
            name="city"
            id="city"
            value={formData.city}
            type="text"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="country">PAYS</label>
          <input
            name="country"
            id="country"
            value={formData.country}
            type="text"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="phone">TÉLÉPHONE</label>
          <input
            name="phone"
            id="phone"
            value={formData.phone}
            type="text"
            onChange={handleChange}
          />
        </div>
        <div className="signup-login">
          <Link href="/login">
            <button>SE CONNECTER</button>
          </Link>

          <button type="submit">S'INSCRIRE</button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
