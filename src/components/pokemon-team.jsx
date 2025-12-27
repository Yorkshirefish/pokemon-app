import React, { useState, useEffect } from "react";
import SinglePokemon from "./pokemon";
import { fetchPokemon } from "../api/data";

function PokemonTeam() {

    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(false);
    const [hasError, setHasError] = useState(null);
    const [fullPokemonTeam, setFullPokemonTeam] = useState([]);

    //This function loads 6 random pokemon and adds them to the fullPokemonTeam state
    async function buildTeam() {
        //Removing any existing team
        setFullPokemonTeam([])
        setIsLoading(true);
        setHasError(null);

        try {

            const pokemon_1 = await fetchPokemon(Math.ceil(Math.random() * 1025))
            const pokemon_2 = await fetchPokemon(Math.ceil(Math.random() * 1025))
            const pokemon_3 = await fetchPokemon(Math.ceil(Math.random() * 1025))
            const pokemon_4 = await fetchPokemon(Math.ceil(Math.random() * 1025))
            const pokemon_5 = await fetchPokemon(Math.ceil(Math.random() * 1025))
            const pokemon_6 = await fetchPokemon(Math.ceil(Math.random() * 1025))
            setFullPokemonTeam([pokemon_1, pokemon_2, pokemon_3, pokemon_4, pokemon_5, pokemon_6])
        } catch(e) {
            setHasError("There has been an error building the team")
        } finally {
            setIsLoading(false);
        }
    }

    function handleNewTeam() {
        buildTeam();
    }

    

    useEffect(() => {
        buildTeam()
    }, []);

    
    //This is so I can see the data loading correctly
    useEffect(() => {
        console.log(fullPokemonTeam);
    }, [fullPokemonTeam]);
      


    if(isLoading) {
        return (
        <p>Loading...</p>
        )
    }

    if(hasError) {
        return (
        <p>There has been an error getting Pokemon Data</p>
        )
    }

    if(fullPokemonTeam.length > 0) {
        return (
            <div>
                {fullPokemonTeam.map((pokemon, i) =>
                    <SinglePokemon key={i + "-key"} name={pokemon.name} sprites={pokemon.sprites} id={pokemon.id} moves={pokemon.moves} types={pokemon.types}/>
                )}
                <button onClick={handleNewTeam}>New Team</button>
            </div>
        )
    }
}

export default PokemonTeam;