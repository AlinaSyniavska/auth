import Joi from "joi";

const userValidator = Joi.object({
    name: Joi.string().regex(/^[a-zA-ZА-яёЁіІїЇ]{2,20}$/).required().messages({
        'string.pattern.base': 'Тільки букви: мінімум 1 символ, максимум 20'
    }),
    age: Joi.number().min(1).max(120),
    // eslint-disable-next-line no-empty-character-class
    email: Joi.string().regex(/([-!#-'*+/-9=?A-Z^-~]+(\.[-!#-'*+/-9=?A-Z^-~]+)*|"([]!#-[^-~ \t]|(\\[\t -~]))+")@[\dA-Za-z]([\dA-Za-z-]{0,61}[\dA-Za-z])?(\.[\dA-Za-z]([\dA-Za-z-]{0,61}[\dA-Za-z])?)+/).required(),
    password: Joi.string().regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?\d)(?=.*?[#?!@$%^&*-]).{8,}$/).required(),
    // phone: Joi.string().regex(/\(?\+\d{1,3}\)? ?-?\d{1,3} ?-?\d{3,5} ?-?\d{4}( ?-?\d{3})? ?(\w{1,10}\s?\d{1,6})?/).required(),
    phone: Joi.string().required(),
});

export {
    userValidator
}