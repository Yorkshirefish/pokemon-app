import React, { useState, useEffect } from "react";
import SinglePokemon from "./pokemon";
import { fetchPokemon } from "../api/data";

function PokemonTeam() {

    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(false);
    const [hasError, setHasError] = useState(null);
    const [pokemonId, setPokemonId] = useState(150)

    const pokemon = 1025;


    async function getPokemonData(id) {
        setIsLoading(true);
        setHasError(null);

        try {
        const returnedData = await fetchPokemon(id);
        setData(returnedData)
        } catch(e) {
        setHasError("There has been an issue in the ")
        } finally {
        setIsLoading(false)
        }
    }

    

    useEffect(() => {
        getPokemonData(pokemonId)
    }, [pokemonId])


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

    return (
        <div>
            {data && <SinglePokemon data={data}/>}
        </div>
    )
}

export default PokemonTeam;