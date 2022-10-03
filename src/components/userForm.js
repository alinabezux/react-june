import {useForm} from "react-hook-form";
import {useEffect} from "react";
import {joiResolver} from "@hookform/resolvers/joi";

import {usersService} from "../services";
import {userValidator} from "../validators";

const UserForm = ({setUsers}) => {
    const {register, reset, handleSubmit, formState: {errors, isValid}, setValue} = useForm({
        resolver: joiResolver(userValidator),
        mode: 'all'
    });
    useEffect(() => {
        setValue('name', 'Henry Sebek')
        setValue('username', 'Linkoln')
        setValue('email', 'henry@ukrnet')
    }, [])

    const submit = (obj) => {
        usersService.createUser(obj).then(({data}) => setUsers(users => [...users, data]))
        reset();
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder='Enter name' {...register('name')}/>
            {errors.name && <span>{errors.name.message}</span>}

            <input type="text" placeholder='Enter username' {...register('username')}/>
            {errors.username && <span>{errors.username.message}</span>}

            <input type="text" placeholder='Enter email' {...register('email')}/>
            {errors.email && <span>{errors.email.message}</span>}

            <button disabled={!isValid}>Create new User</button>
        </form>
    )
}

export {UserForm};