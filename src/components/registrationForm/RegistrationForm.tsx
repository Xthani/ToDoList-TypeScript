import React, { useEffect, useRef } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { TDataRegForm } from "../../Store/types";
import { useDispatch } from "react-redux";
import { addingUser } from "../../Store/action";
import { useAppSelector } from "../../hooks";

const schema = yup.object().shape({
    firstName: yup.string().required("П жалуйста укажите имя"),
    email: yup.string().email().required("Email обязателен"),
    age: yup.number().positive().integer().max(99).required(),
    password: yup.string().min(4).max(15).required(),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null])
})

const RegistrationForm = () => {
    const { userList } = useAppSelector((state: any) => state.todos);
    const dispatch = useDispatch();
    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        mode: 'all'
    });

    // Объект с пользователем
    const submitForm = (newUser: TDataRegForm | any) => {
        dispatch(addingUser(newUser, userList))
    };

    // focus на textarea
    const ref = useRef<HTMLInputElement>(null);
    useEffect(() => {
        ref.current?.focus()
        return ref.current?.focus()
    }, []);

    return (
        <form
            className="Registration-Form"
            onSubmit={handleSubmit(submitForm)} >
            <Controller
                control={control}
                name='firstName'
                defaultValue=''
                render={({
                    field: { value, onChange, onBlur, name } }) => (
                    <>
                        <h2>FirstName</h2>
                        <input ref={ref} className="inp-form" {...{ value, onChange, onBlur, name }} />
                        <p>{errors.firstName?.message}</p>
                    </>
                )}
            />
            <Controller
                control={control}
                name='email'
                defaultValue=''
                render={({
                    field: { value, onChange, onBlur, name } }) => (
                    <>
                        <h2>email</h2>
                        <input className="inp-form" {...{ value, onChange, onBlur, name }} />
                        <p>{errors.email?.message}</p>
                    </>
                )}
            />
            <Controller
                control={control}
                name='age'
                defaultValue=''
                render={({
                    field: { value, onChange, onBlur, name } }) => (
                    <>
                        <h2>age</h2>
                        <input className="inp-form" {...{ value, onChange, onBlur, name }} />
                        <p>{errors.age?.message}</p>
                    </>
                )}
            />
            <Controller
                control={control}
                name='password'
                defaultValue=''
                render={({
                    field: { value, onChange, onBlur, name } }) => (
                    <>
                        <h2>password</h2>
                        <input className="inp-form" type='password' {...{ value, onChange, onBlur, name }} />
                        <p>{errors.password?.message}</p>
                    </>
                )}
            />
            <Controller
                control={control}
                name='confirmPassword'
                defaultValue=''
                render={({
                    field: { value, onChange, onBlur, name } }) => (
                    <>
                        <h2>confirmPassword</h2>
                        <input className="inp-form" type='password' {...{ value, onChange, onBlur, name }} />
                        <p>{errors.confirmPassword?.message}</p>
                    </>
                )}
            />
            <input className="btn-form-wrapper" type="submit" />
        </form>
    )
}

export default RegistrationForm;