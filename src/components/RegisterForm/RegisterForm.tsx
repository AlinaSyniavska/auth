import {FC, useState} from "react";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {joiResolver} from "@hookform/resolvers/joi";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {IUser} from "../../interfaces";
import {userValidator} from "../../validators";
import {userActions} from "../../redux";

const RegisterForm: FC = () => {
    const {register, reset, handleSubmit, formState: {errors, isValid}} = useForm<IUser>({
        resolver: joiResolver(userValidator),
        mode: 'onTouched'
    });

    const [errorsFromForm, setErrors] = useState<any>({});

    const navigate = useNavigate();
    const {formErrors, registerError} = useAppSelector(state => state.userReducer);
    const dispatch = useAppDispatch();


    const submitForm = async (user: IUser) => {
        try {
            await dispatch(userActions.registerUser({user}));
            if (!registerError) {
                navigate('/auth/login');
            }
            reset();
        } catch (e: any) {
            console.error(e.response.data);
            setErrors(e.response.data);
        }
    };

    return (
        <form onSubmit={handleSubmit(submitForm)}>
            <div>
                <label>Name
                    <input type={'text'} placeholder={'name  '} {...register('name')}/>
                </label>
            </div>
            {errors.name && <span>{errors.name.message}</span>}
            <div>
                <label>Age
                    <input type={'text'} placeholder={'age  '} {...register('age')}/>
                </label>
            </div>
            {errors.age && <span>{errors.age.message}</span>}
            <div>
                <label>Email
                    <input type={'text'} placeholder={'email  '} {...register('email')}/>
                </label>
            </div>
            {errors.email && <span>{errors.email.message}</span>}
            <div>
                <label>Phone
                    <input type={'text'} placeholder={'phone  '} {...register('phone')}/>
                </label>
            </div>
            {errors.phone && <span>{errors.phone.message}</span>}
            <div>
                <label>Password
                    <input type={'password'} placeholder={'password'} {...register('password')}/>
                </label>
            </div>
            {errors.password && <span>{errors.password.message}</span>}
            <button disabled={!isValid}>Register</button>

            <div>
                <div>{formErrors.name && <div>Error name: {formErrors.name[0]}</div>}</div>
                <div>{formErrors.age && <div>Error age: {formErrors.age[0]}</div>}</div>
                <div>{formErrors.email && <div>Error email: {formErrors.email[0]}</div>}</div>
                <div>{formErrors.phone && <div>Error phone: {formErrors.phone[0]}</div>}</div>
                <div>{formErrors.password && <div>Error password: {formErrors.password[0]}</div>}</div>
            </div>
        </form>
    );
};

export {RegisterForm};