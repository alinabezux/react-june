import css from './car.module.css'

import {carService} from "../../services";

const Car = ({car, setCars, setUpdate}) => {
    const {id, model, price, year} = car;

    const deleteCar = async () => {
        await carService.deleteById(id);
        setCars(cars => {
            const index = cars.findIndex(value => value.id === id);
            cars.splice(index, 1)
            return [...cars]
        })
    }

    return (
        <div className={css.car}>
            <div>
                <h2>{id}</h2>
                <h3>{model}</h3>
                <h3>
                    <b>Price - {price}$</b><br/>
                    <i>{year}</i>
                </h3>
            </div>
            <div className={css.button}>
                <button onClick={() => setUpdate(car)}>Update</button>
                <button onClick={() => deleteCar()}>Delete</button>
            </div>
        </div>
    );
}

export {Car}