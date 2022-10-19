import {useEffect, useState} from "react";

import {CarForm} from "../../componets/CarForm/CarForm";
import {Cars} from "../../componets/Cars/Cars";
import {carService} from "../../services";
import {useSearchParams} from "react-router-dom";

const CarsPage = () => {

    const [cars, setCars] = useState([]);
    const [prev, setPrev] = useState(null);
    const [next, setNext] = useState(null);

    const [query, setQuery] = useSearchParams({page: '1'});

    useEffect(() => {
        carService.getAll(query.get('page')).then(({data: res}) => {
            setCars(res.data)
            setPrev(res.prev)
            setNext(res.next)
        })
    }, [query])

    const prevPage = () => {
        setQuery(value => ({page: value.get('page') - 1}))
    }
    const nextPage = () => {
        setQuery(value => ({page: +value.get('page') + 1}))
    }

    return (
        <div>
            <CarForm/>
            <hr/>
            <Cars cars={cars} setCars={setCars}/>
            <button disabled={!prev} onClick={prevPage}>Prev page</button>
            <button disabled={!next} onClick={nextPage}>Next page</button>

        </div>
    );
}

export {CarsPage}