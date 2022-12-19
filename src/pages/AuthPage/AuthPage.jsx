import React, {useEffect} from 'react';
import cl from './AuthPage.module.css'
import AuthForm from "../../components/AuthForm/AuthForm";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom"

const AuthPage = () => {
    const {token} = useSelector(state => state.user)
    const navigate = useNavigate()

    useEffect(() => {
      if(token){
          navigate('/bargaining')
      }
    },[token])

    return (
        <div className={cl.authContainer} >
            <AuthForm/>
        </div>
    );
};

export default AuthPage;