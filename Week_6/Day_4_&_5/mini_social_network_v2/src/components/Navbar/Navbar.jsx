import React from "react";
import { Link } from "react-router-dom";
import { DisconnectButton } from "../DisconnectButton/DisconnectButton";
import { useAtomValue } from "jotai";
import { tokenAtom } from "../../atoms/atoms";

export const Navbar = () => {
  const token = useAtomValue(tokenAtom);

  return (
    <nav>
      <Link to="/">Home </Link>
      {token ? (
        <>
          <Link to="/profile">Profil </Link>
          <DisconnectButton />
        </>
      ) : (
        <>
          <Link to="/login">Connexion </Link>
          <Link to="/register">Inscription </Link>
        </>
      )}
    </nav>
  );
};
