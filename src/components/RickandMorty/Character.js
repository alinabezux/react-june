export default function Character(props) {
    const {character} = props;

    return (
        <div>
            <h2>{character.id} {character.name}</h2>
            <h3>Status - {character.status} <br/>
                Species - {character.species} <br/>
                Gender - {character.gender}
            </h3>
            <img src={character.image} alt={character.name}/>

        </div>
    );
}
