import React, { useEffect, useState}  from "react";
import "../css/pokemon.css"

function SinglePokemon({data}) {
    const [pokeSprite, setPokeSprite] = useState('')
    

    function isShiny() {
        const randNum = Math.ceil(Math.random() * 100)

        if(randNum === 1) {
            setPokeSprite(data.sprites.front_shiny)
        } else {
            setPokeSprite(data.sprites.front_default)
        }
    }       

    useEffect(() => {
        isShiny();
    },[])



    return (
        <div>
            <img src={pokeSprite} alt={data.name} />
            <h1 className="pokemon-name">{data.name}</h1>
            <p></p>
        </div>
    )
}

export default SinglePokemon;