import React, { useEffect, useInsertionEffect, useState}  from "react";
import "../css/pokemon.css"

function SinglePokemon({name, sprites, id, moves, types, addNewPokemon, index, newRandomPokemon}) {
    const [isShiny, setIsShiny] = useState('false');
    const [fourMoves, setFourMoves] = useState([]);
    const [newPokemon, setNewPokemon] = useState('');

    //
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


    //Function for handling Input Change 
    function handleNewPokemonChange({target}) {
        setNewPokemon(target.value);
    }

    function handleNewPokemonSubmit(e) {
        e.preventDefault();

        addNewPokemon(newPokemon, index)
    }


    //Function for new random Pokemon
    function handleNewRandomPokemon() {
        newRandomPokemon(index)
    }


    return (
        <div className="pokemon-cont">
            <img src={isShiny ? sprites.front_shiny : sprites.front_default} alt={name} />
            {isShiny && <p>Shiny</p>}
            <h1 className="pokemon-name">{name}</h1>
            <h2>#{id}</h2>
            <div className="type-cont">
                {types.map((type, i) =>
                    <p key={type.type.name + i} className={type.type.name + "-type pokemon-type"}>{type.type.name}</p>
                )}
            </div>
            <div className="moves-cont">
                {fourMoves.map((move, i) => 
                    <p key={i} className="pokemon-move">{move.move.name}</p>
                )}
            </div>
            <h3>Replace Pokemon?</h3>
            <form onSubmit={handleNewPokemonSubmit} className="pokemon-form">
                <input type="text" value={newPokemon} placeholder="Type ID or Name" onChange={handleNewPokemonChange}/>
                <button type="submit">Add</button>
            </form>
            <button className="rand-pokemon" onClick={handleNewRandomPokemon} >Random Pokemon</button>
        </div>
    )
}

export default SinglePokemon;