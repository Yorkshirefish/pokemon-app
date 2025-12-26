import React, { useEffect, useState}  from "react";
import "../css/pokemon.css"

function SinglePokemon({name, sprites, id, moves, types}) {
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
            <img src={isShiny ? sprites.front_shiny : sprites.front_default} alt={name} />
            {isShiny && <p>Shiny</p>}
            <h1 className="pokemon-name">{name}</h1>
            <h2>#{id}</h2>
            <div>
                {types.map((type, i) =>
                    <p key={type.type.name + i}>{type.type.name}</p>
                )}
            </div>
            <p></p>
        </div>
    )
}

export default SinglePokemon;