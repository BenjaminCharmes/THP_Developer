import StudyCase from "../../components/StudyCase/StudyCase";
import { useState } from 'react';
import { createContext } from 'react';

export const DisplayContext = createContext(null);

const Works = () => {
  const [display, setDisplay] = useState("link")

  const toggleDisplay = () => {
    setDisplay((curr) => (curr === "link" ? "card" : "link"))
  }

  return (
    <>
      <DisplayContext.Provider value ={{ display, toggleDisplay }}>
        <StudyCase />
        <div>
          <h1>Au fil des années, nous avons pu accompagner les meilleurs.</h1> 
          <p>Découvrez pas à pas comment nous avons été présents pour lancer vos marques préférées.</p>
        </div>
      </DisplayContext.Provider>
    </>
  );
};

export default Works;
