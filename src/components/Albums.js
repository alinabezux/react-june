import {useEffect, useState} from "react";

import {Album} from "./Album";

const Albums = () => {

    const [album, setAlbum] = useState([]);

    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/albums')
            .then(value => value.json())
            .then(value => {
                setAlbum([...value])
            })

    }, [])

    return (
        <div>
            {
                album.map(value => <Album key={value.id} album={value}/> )
            }
        </div>
    );
}

export {Albums}