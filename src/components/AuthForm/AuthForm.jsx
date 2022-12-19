import React from 'react';
import cl from './AuthForm.module.css'
import { useForm } from "react-hook-form";
import {useDispatch} from "react-redux";
import {authUser} from "../../reduxToolkit/slices/userSlice";

const AuthForm = () => {
    const dispatch = useDispatch()
    const {
        register,
        handleSubmit,
        reset
    } = useForm();

    const onSubmit = (data) => {
        const authData = {
            email:data.email,
            password:data.password
        }
        if(!<AuthForm/>){
            reset()
        }
        dispatch(authUser(authData))
    }

    return (
        <div className={cl.authFormContainer} >
            <div className={cl.authFormTitle} >Авторизация</div>
            <form className={cl.authFormLogin}  onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <input className={cl.signInInputEmail}  placeholder={"Введите email"} {...register("email")} type="email"/>
                </div>
                <div>
                    <input className={cl.signInInputPassword}  placeholder={"Введите пароль"} {...register("password")} type="password"/>
                </div>
                <div className={cl.formButtonSignUp} >
                    <button className={cl.buttonSignUp} type={"submit"}>Войти</button>
                </div>
            </form>
        </div>
    );
};

export default AuthForm;