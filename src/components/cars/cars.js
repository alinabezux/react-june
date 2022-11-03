import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {carActions} from "../../redux";
import {Car} from "../car/car";

const Cars = () => {
    const dispatch = useDispatch();
    const {cars, error, loading} = useSelector(state => state.cars);

    useEffect(() => {
        dispatch(carActions.getAll())
    }, [dispatch])

    return (
        <div>
            {loading && <h1>Loading.....</h1>}
            {error && <h1>Error:(</h1>}
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
}

export {Cars}