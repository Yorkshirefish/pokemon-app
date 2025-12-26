import React from "react";

function SinglePokemon({data}) {

    console.log(data)

    return (
        <div>
            <img src={data.sprites.front_default} alt="" />
            <h1>Name of Pokemon = {data.name}</h1>
            <p></p>
        </div>
    )
}

export default SinglePokemon;