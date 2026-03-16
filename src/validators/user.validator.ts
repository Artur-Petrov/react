import Joi from "joi";

export const userValidator = Joi.object({
    username:Joi.string().pattern(/w{4,}/).required().messages({
        'string.pattern.base': 'Username must have at least 4 chars',
    }),
    password:Joi.string().min(3).max(6).required().messages({
        'string.min': 'Password must be at least 3 characters',
        'string.max': 'Password must be at least 6 characters',
    }),

    age:Joi.number().min(1).max(117).required().messages({
      'number.min': 'Age must be at least 1',
      'number.max': 'Age must be max 117',
    })
})