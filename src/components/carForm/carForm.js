import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {carActions} from "../../redux";

const CarForm = () => {
    const {register, reset, handleSubmit, setValue} = useForm();
    const {carForUpdate, error} = useSelector(state => state.cars);
    const dispatch = useDispatch();

    useEffect(() => {
        if (carForUpdate) {
            setValue('model', carForUpdate.model)
            setValue('price', carForUpdate.price)
            setValue('year', carForUpdate.year)
        }
    }, [setValue, carForUpdate])

    const submit = async (car) => {
        if (carForUpdate) {
            await dispatch(carActions.updateCar({id: carForUpdate.id, car: car}))
        } else {
            await dispatch(carActions.createCar({car: car}))
        }
        reset();
    };

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'model'} {...register('model')}/>
            <input type="text" placeholder={'price'} {...register('price')}/>
            <input type="text" placeholder={'year'} {...register('year')}/>
            <button>{carForUpdate ? 'update' : 'save'}</button>
            {error && <div>{JSON.stringify(error)}</div>}
        </form>
    );
}

export {CarForm}