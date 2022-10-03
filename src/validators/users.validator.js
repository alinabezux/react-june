import Joi from "joi";

const userValidator = Joi.object({
    name: Joi.string().required(),

    username: Joi.string().regex(/^[a-zA-Z]{1,10}$/).required().messages({
        'string.pattern.base': 'Only english letters,max 10 symbols!'
    }),

    email: Joi.string().regex(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/).required().messages({
        'string.pattern.base': 'Only english letters, including "@ " !'
    })
})


export {userValidator}