import React, { useEffect, useState } from "react";
// le use state nous permet de donner un state a nore aplication API
import Navbar from "./components/Navbar.js";
import Characters from "./components/Characters.js";
import Pagination from "./components/Pagination.js";

// tout ça on va le metre dans une fucntion

function App() {
  // return la variable du state et la fucntion qui modifie le state, usesState aura un tableau vide que c'est l'etat initial, cette tableau va se remplir  avce la done qui iens de l'api
  // characters c'est le tableau de personages que on va passer au composantcharacter a traver des props
  const [characters, setCharacters] = useState([]);
  const [info, setinfo] = useState({});

  const initialUrl = "https://rickandmortyapi.com/api/character";

  const fetchChracters = (url) => {
    fetch(url)
      // le premier then c'est la reponse en json
      .then((response) => response.json())
      // le deuxieme then c'est la reponse tranforme en objet
      // ici on a la reponse en forme d'objet, don on peut pacourrio ce objet. data.rasulta va me donner le tableau avec toputes caracteres alors on besoin
      // Alors je besoin garder ses donnes comme state ici "characteres"
      // je ne veux paas faire un console.log sinon tadannnn setCharacteres c'est la fucntion qui modifie le state
      // J'ai passe alor
      .then((data) => {
        setCharacters(data.results);
        setinfo(data.info);
      })
      .catch((error) => console.log(error));
  };


  // ces fucntion vont appeller a la api avce la nouvelle url

  const onPrevious = () => {
    fetchChracters(info.prev)
  }

  const onNext = () => {
    fetchChracters(info.next)
  }



  useEffect(() => {
    //  dans le hook de use effect j'appele la fucntion de fetch
    fetchChracters(initialUrl);
  }, []);

  return (
    <>
      <Navbar brand="Rick and Morty" />
      {/* le omposant Characters a comme prop character qui aura comme valeur le tableau character du state, don on est passe le tableau vers le composant Characters  */}
      <div className="container mt-5">
        <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext}/>
        <Characters characters={characters} />
        <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext}/>
      </div>
    </>
  );
}

export default App;
