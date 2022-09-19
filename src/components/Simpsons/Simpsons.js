import {simpsonsArray} from "./data";
import Simpson from "./Simpson";

export default function Simpsons() {
    return (
        <div>
            {
                simpsonsArray.map((simpson, index) =>
                    <Simpson key={index} simpson={simpson}/>)
            }
        </div>

    );
}