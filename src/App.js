import React, { useEffect, useState} from "react";
import PokemonTeam from "./components/pokemon-team";
import "./css/app.css";

function App() {

  return (
    <div className="app-cont">
      <img src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg" alt="Pokemon Logo"/>
      <h1>Your Pokemon Team...</h1>
      <PokemonTeam />
    </div>
  );
}

export default App;
