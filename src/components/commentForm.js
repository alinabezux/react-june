import {useForm} from "react-hook-form";

import {commentsService} from "../services";

const CommentForm = ({setComments}) => {

    const {register, reset, handleSubmit, formState: {errors}} = useForm(
        {
            mode: 'all',
            defaultValues: {
                name: "name",
                email: 'email',
                body: 'body'
            }
        })

    const onSubmit = (obj) => {
        commentsService.postComment(obj).then(({data}) => setComments(comment => [...comment, data]))
        reset()
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" {...register("name",{required:"This is required input!"})}/>
            {errors.name && <span>{errors.name.message}</span>}
            <input type="text" {...register("email")}/>
            <input type="text" {...register("body",{required:'This is required input!'})}/>
            {errors.body && <span>{errors.body.message}</span>}

            <input type="submit"/>
        </form>
    );
}

export {CommentForm}