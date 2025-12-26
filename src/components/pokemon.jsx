import React, { useEffect, useInsertionEffect, useState}  from "react";
import "../css/pokemon.css"

function SinglePokemon({name, sprites, id, moves, types}) {
    const [isShiny, setIsShiny] = useState('false');
    const [fourMoves, setFourMoves] = useState([]);

    function setMoves() {
        setFourMoves([]);

        const pokemon_move_1 = Math.floor(Math.random() * moves.length);
        const pokemon_move_2 = Math.floor(Math.random() * moves.length);
        const pokemon_move_3 = Math.floor(Math.random() * moves.length);
        const pokemon_move_4 = Math.floor(Math.random() * moves.length);

        setFourMoves([moves[pokemon_move_1], moves[pokemon_move_2], moves[pokemon_move_3], moves[pokemon_move_4]]);

    }

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
        setMoves();
    },[])

    useEffect(() => {
        console.log(fourMoves);
    }, [fourMoves])



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
            <div>
                {fourMoves.map((move, i) => 
                    <p key={i} >{move.move.name}</p>
                )}
            </div>
            <p></p>
        </div>
    )
}

export default SinglePokemon;