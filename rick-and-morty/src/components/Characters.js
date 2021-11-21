import React from "react";
// characteres c'est une props pour savoir combian de columns on va creer, represent l'array de personages qu'on est recu par le props en app.js
const Characters = ({ characters = [] }) => {
  return (
    // Ici on va créér la grid
    // dans la row il aura une column pour chaque personage

    // {/* je veux iterer pour creer une column pour chaque personage, alor j'utilise map pour iterer le tablea qu'il a en characters 
    //             // Map prends deux parametres, le premier c'est un item (qui arrive) et le deuxieme un index qui sert comment key dans les columns*/}
    // item c'est cha'un des personages
    // index x'est le index du tableau
    //! key c'est propriete on va dire que 'c'est le index qui a partir de cero
    // l'iteration va nous retourner les colulns, on est mit notre div column dans la iteration

    <div className="row">  
      {characters.map((item, index) => (
        <div key={index}className="col mb-4"> 
            <div className="card" style={{minWidth: "200px"}}>
                <img src={item.image} alt=""/>
                <div className="card-boby">
                    <h5 className="card-title">
                        {item.name}
                    </h5>
                    <hr />
                    <p>species: {item.species} </p>
                    <p>location: {item.location.name} </p>
                </div>
            </div>

        </div>
      ))}
    </div>
  );
};

export default Characters;
