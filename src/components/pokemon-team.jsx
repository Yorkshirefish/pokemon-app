import React, { useState, useEffect } from "react";
import SinglePokemon from "./pokemon";
import { fetchPokemon } from "../api/data";
import "../css/pokemon-team.css";

function PokemonTeam() {

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
    

    useEffect(() => {
        buildTeam()
    }, []);


    //Function for a manually added pokemon
    async function addNewPokemon(name, index) {
        setIsLoading(true);
        setHasError(null);
        
        try {
            const newPokemon = await fetchPokemon(name);

            const updatedTeam = fullPokemonTeam.map((pokemon, i) => {
                if(i === index) {
                    return newPokemon;
                } else {
                    return pokemon;
                }
            })

            setFullPokemonTeam(updatedTeam);
        } catch(e) {
            setHasError("Cannot retrieve pokemon");
        } finally {
            setIsLoading(false);
        }
    }

    //Function for single Random Pokemon
    async function newRandomPokemon(index) {
        setIsLoading(true);
        setHasError(null);

        try {
            const newPokemon = await fetchPokemon(Math.ceil(Math.random() * 1025))

            const updatedTeam = fullPokemonTeam.map((pokemon, i) => {
                if(i === index) {
                    return newPokemon;
                } else {
                    return pokemon;
                }
            })

            setFullPokemonTeam(updatedTeam);
        } catch(e) {
            setHasError("Cannot retrieve pokemon");
        } finally {
            setIsLoading(false);
        }
    }

    
    //This is so I can see the data loading correctly
    useEffect(() => {
        console.log(fullPokemonTeam);
    }, [fullPokemonTeam]);
      


    if(isLoading) {
        return (
            <div className="loading-cont">
                <p>Loading...</p>
            </div>
        )
    }

    if(hasError) {
        return (
            <div className="error-cont">
                <p>There has been an error getting Pokemon Data</p>
                <button className="new-team-btn" onClick={buildTeam}>New Team</button>
            </div>
        )
    }

    if(fullPokemonTeam.length > 0) {
        return (
            <div className="outer-team-cont">
                <div className="team-cont">
                    {fullPokemonTeam.map((pokemon, i) =>
                        <SinglePokemon key={i + "-key"} name={pokemon.species.name} sprites={pokemon.sprites} id={pokemon.id} moves={pokemon.moves} types={pokemon.types} addNewPokemon={addNewPokemon} index={i} newRandomPokemon={newRandomPokemon} />
                    )}
                </div>
                <button className="new-team-btn" onClick={buildTeam}>New Team</button>
            </div>
        )
    }
}

export default PokemonTeam;