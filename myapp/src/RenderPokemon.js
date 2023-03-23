import React, { useState } from "react";

function RenderPokemon({ name }) {
    const [data, getData] = useState(null)
    try {
        async function getPokemon() {
            const obj = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
            const pokemon = await obj.JSON()
            getData(pokemon)
        }
    } catch {
        console.log("errore, riprova")
    }
    return (
        <div>
            <img src={data && data.sprites.front_default} alt="not working" />
            <ul>
                <li>{data && data.species.name}</li>
                <li>{data && data.base_experience}</li>
                <li>{data && data.abilities[0].ability.name}</li>
                <li>{data && data.abilities[1].ability.name}</li>
            </ul>
        </div>
    )
}

export default RenderPokemon