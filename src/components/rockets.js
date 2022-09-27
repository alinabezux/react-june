import {useEffect, useState} from "react";
import {rocketService} from "../services/rocketService";
import {Rocket} from "./rocket";

const Rockets = () => {

    const [rockets, setRockets] = useState([]);

    useEffect(() => {
        rocketService.getRockets().then(value => setRockets(value.data.filter(value => value.launch_year !== '2020')))
    }, [])

    return (
        <div>
            {
                rockets.map(rocket=><Rocket key={rocket.flight_number} rocket={rocket}/> )
            }
        </div>
    );
}
export {Rockets}