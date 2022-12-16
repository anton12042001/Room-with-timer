import React from 'react';
import cl from './AuthForm.module.css'
import { useForm } from "react-hook-form";

const AuthForm = () => {
    const {
        register,
        handleSubmit,
        reset
    } = useForm();

    const onSubmit = (data) => {
        reset()

    }

    return (
        <div >
            <form className={cl.authFormLogin}  onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <input className={cl.signInInputEmail}  placeholder={"Введите email"} {...register("email")} type="email"/>
                </div>
                <div>
                    <input className={cl.signInInputPassword}  placeholder={"Введите пароль"} {...register("password")} type="password"/>
                </div>
                <button className={cl.buttonSignIp}  type={"submit"}>Войти</button>
            </form>
        </div>
    );
};

export default AuthForm;