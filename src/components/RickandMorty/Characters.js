import Character from "./Character";
import {useState} from "react";

export default function Characters() {
    const [characters, setCharacters] = useState([]);

    fetch('https://rickandmortyapi.com/api/character')
        .then(value => value.json())
        .then(value => {
            setCharacters(value.results.splice(0, 6))
        });

    return (
        <div>
            {
                characters.map(character => <Character key={character.id} character={character}/>)
            }
        </div>

    )
}