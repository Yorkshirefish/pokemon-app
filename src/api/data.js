
export async function fetchPokemon(id) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);

    if(!response.ok) {
        throw new Error(`There was an issue getting a pokemon. Response ${response.status}`);
    }

    const data = await response.json();

    return data;
}