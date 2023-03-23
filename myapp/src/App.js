import React, { useState } from "react"
import RenderPokemon from "./RenderPokemon"

function App() {
    const [input, setInput] = useState(null)
    function HandleInput (event)  {
        setInput(event.target.value)
    }
    const [pokemon, setPokemon] = useState(null)
    function HandleName() {
        setPokemon(input)
    }
    return (
        <div>
            <input type="text" placeholder="insert your pokemon" value={input} onChange={HandleInput} />
            <button type="submit" onClick={HandleName}>submit</button>
            <RenderPokemon name={pokemon} />
        </div>
    )

}

export default App