const Dog = ({dog, dispatch}) => {

    const deleteDog = () => {
        dispatch({type: 'deleteDog', payload: dog.id})
    }

    return (
        <div>
            <h2><i>{dog.name}</i></h2>
            <button onClick={deleteDog}>Delete this dog</button>
        </div>
    );
}

export {Dog}