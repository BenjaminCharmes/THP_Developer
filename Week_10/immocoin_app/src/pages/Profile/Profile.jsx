import React, { useState, useEffect } from "react";
import { useAtom } from "jotai";
import userAtom from "../../stores/userStore";
import { advertAPI } from "../../services/fetchAdverts";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

export default function Profile() {
  const [adverts, setAdverts] = useState([]);
  const [user, setUser] = useAtom(userAtom);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await advertAPI.getAdverts();
        setAdverts(result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      <h2>{user.user.username}</h2>
      <p>Email: {user.user.email}</p>
      <h3>Annonces</h3>
      <ul>
        {adverts
          .filter((advert) => advert.user_id == user.user.id)
          .map((advert) => (
            <li key={advert.id}>{advert.title}</li>
          ))}
      </ul>
      <Footer />
    </div>
  );
}
