import React, { useState, useEffect } from "react";
import SinglePokemon from "./pokemon";
import { fetchPokemon } from "../api/data";

function PokemonTeam() {

    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(false);
    const [hasError, setHasError] = useState(null);
    const [fullPokemonTeam, setFullPokemonTeam] = useState([]);



    // async function getPokemonData(id) {
    //     setIsLoading(true);
    //     setHasError(null);

    //     try {
    //     const returnedData = await fetchPokemon(id);
    //     return returnedData;
    //     } catch(e) {
    //     setHasError("There has been an issue in the ")
    //     } finally {
    //     setIsLoading(false)
    //     }
    // }

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

    

    useEffect(() => {
        buildTeam()
    }, []);

    
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
            </div>
        )
    }
}

export default PokemonTeam;