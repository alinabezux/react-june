import {DELETE_CAT, DELETE_DOG, MAKE_CAT, MAKE_DOG} from "./actions";

const reducer = (state, {type, payload}) => {
    switch (type) {
        case MAKE_CAT:
            return {...state, cats: [...state.cats, {name: payload, id: (Math.random()) * 100}]};

        case DELETE_CAT:
            return {...state, cats: state.cats.filter(cat => cat.id !== payload)};

        case MAKE_DOG:
            return {...state, dogs: [...state.dogs, {name: payload, id: (Math.random()) * 100}]};

        case DELETE_DOG:
            return {...state, dogs: state.dogs.filter(dog => dog.id !== payload)};

        default:
            return state
    }

}
export {reducer}