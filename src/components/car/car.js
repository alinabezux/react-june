import {useDispatch} from "react-redux";

import {carActions} from "../../redux";

const Car = ({car}) => {
    const dispatch = useDispatch();
    const {id, model, price, year} = car;
    return (
        <div>
            <h1>{model}</h1>
            <h2>{price}</h2>
            <h2>{year}</h2>
            <button onClick={() => dispatch(carActions.setCarForUpdate(car))}>Update</button>
            <button onClick={() => dispatch(carActions.deleteCar({id}))}>Delete</button>
        </div>
    );
}

export {Car}