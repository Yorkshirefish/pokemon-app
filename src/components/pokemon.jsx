import React, { useEffect, useState}  from "react";
import "../css/pokemon.css"

function SinglePokemon({data}) {
    const [isShiny, setIsShiny] = useState('false');
    

    //This function decides if it will be shiny or not
    function determineShiny() {
        const randNum = Math.ceil(Math.random() * 100)

        if(randNum === 1) {
            setIsShiny(true)
        } else {
            setIsShiny(false)
        }
    }       

    //This runs the function on the first load
    useEffect(() => {
        determineShiny();
    },[])



    return (
        <div>
            <img src={isShiny ? data.sprites.front_shiny : data.sprites.front_default} alt={data.name} />
            <h1 className="pokemon-name">{data.name}</h1>
            <h2>#{data.id}</h2>
            <p></p>
        </div>
    )
}

export default SinglePokemon;