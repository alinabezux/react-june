import {useEffect} from "react";
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {carValidator} from "../../validators";
import {carService} from "../../services";

const CarForm = ({setCars, update, setUpdate}) => {
    const {register, reset, handleSubmit, formState: {errors, isValid}, setValue} = useForm(
        {
            mode: 'all',
            resolver: joiResolver(carValidator)
        });

    useEffect(() => {
        if (update) {
            setValue('model', update.model, {shouldValidate: true})
            setValue('price', update.price, {shouldValidate: true})
            setValue('year', update.year, {shouldValidate: true})
        }
    }, [setValue, update])

    const submit = async (car) => {
        if (update) {
            const {data} = await carService.updateById(update.id, car)
            setCars((cars) => {
                const findedCar = cars.find(value => value.id === update.id)
                Object.assign(findedCar, data)
                setUpdate(null)
                return [...cars]
            })
        } else {
            const {data} = await carService.createCar(car);
            setCars(cars => [...cars, data]);
        }
        reset()
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'model'} {...register('model')}/>
            {errors.model && <span>{errors.model.message}</span>}

            <input type="text" placeholder={'price'} {...register('price', {valueAsNumber: true})}/>
            {errors.price && <span>{errors.price.message}</span>}

            <input type="text" placeholder={'year'} {...register('year', {valueAsNumber: true})}/>
            {errors.year && <span>{errors.year.message}</span>}

            <button disabled={!isValid}>{update ? 'Update' : 'Save'}</button>


        </form>
    );
}

export {CarForm}