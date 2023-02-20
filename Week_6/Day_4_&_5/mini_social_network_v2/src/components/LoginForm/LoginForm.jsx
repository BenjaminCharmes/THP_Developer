import React, { useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { useSetAtom} from 'jotai'
import { tokenAtom, uidAtom } from "../../atoms/atoms";

export const LoginForm = () => {
  const navigate = useNavigate();

  const setToken = useSetAtom(tokenAtom)
  const setUid = useSetAtom(uidAtom);

  const [formData, setFormData] = useState({
    identifier: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:1337/api/auth/local", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((response) => {
        Cookies.set("token", response.jwt);
        Cookies.set("uid", response.user.id);
        setUid(response.user.id);
        setToken(response.jwt);
        navigate("/");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <input
        type="text"
        name="identifier"
        placeholder="Identifiant"
        value={formData.identifier}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Mot de passe"
        value={formData.password}
        onChange={handleChange}
      />
      <button type="submit">Connexion</button>
    </form>
  );
};
