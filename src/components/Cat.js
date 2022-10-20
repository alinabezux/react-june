const Cat = ({cat, dispatch}) => {

    const deleteCat = () => {
        dispatch({type: 'deleteCat', payload: cat.id})
    }

    return (
        <div>
            <h2><i>{cat.name}</i></h2>
            <button onClick={deleteCat}>Delete this cat</button>
        </div>
    );
}

export {Cat}