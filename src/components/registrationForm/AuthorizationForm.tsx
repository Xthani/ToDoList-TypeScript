import React, { useEffect, useRef, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { verification } from "../../Store/action";
import { useAppSelector } from "../../hooks";

const schema = yup.object().shape({
    email: yup.string().email().required("Email обязателен"),
    password: yup.string().min(4).max(15).required()
})

const AuthorizationForm = () => {
    const { userList } = useAppSelector((state: any) => state.todos);
    const dispatch = useDispatch();

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        mode: 'all'
    });

    // Объект с пользователем
    const authorization = (user: any) => {
        dispatch(verification(user, userList))
    };

    // focus на input
    const ref = useRef<HTMLInputElement>(null);
    useEffect(() => {
        ref.current?.focus()
        return ref.current?.focus()
    }, []);

    return (
        <form
            className="Registration-Form"
            onSubmit={handleSubmit(authorization)} >
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
            <input className="btn-form-wrapper" type="submit" />
        </form>
    )
}

export default AuthorizationForm;