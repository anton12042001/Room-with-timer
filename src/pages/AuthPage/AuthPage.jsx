import React from 'react';
import cl from './AuthPage.module.css'
import AuthForm from "../../components/AuthForm/AuthForm";

const AuthPage = () => {
    return (
        <div className={cl.authContainer} >
            <AuthForm/>
        </div>
    );
};

export default AuthPage;