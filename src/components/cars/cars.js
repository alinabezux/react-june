import {useEffect, useState} from "react";

import {CarForm} from "../carForm/carForm";
import {carService} from "../../services";
import {Car} from "../car/car";

const Cars = () => {

    const [cars, setCars] = useState([]);
    const [update, setUpdate] = useState(null);

    useEffect(() => {
        carService.getCars().then(({data}) => setCars(data))
    }, [])

    return (
        <div>
            <CarForm setCars={setCars} update={update} setUpdate={setUpdate}/>
            <hr/>
            {cars.map(car => <Car key={car.id} car={car} setCars={setCars} setUpdate={setUpdate}/>)}
        </div>
    );
}

export {Cars}