import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom"
import cl from './Bargaining.module.css'
const Bargaining = () => {

    const {token} = useSelector(state => state.user)
    const navigate = useNavigate()

    useEffect(() => {
        (!token) && navigate('/auth')
    },[])



    return (
        <div className={cl.bargainingContainer} >
            <div className={cl.bargainingTitle} >Ход торгов. Тестовые торги на аппарат ЛОТОС №2033564</div>
        </div>
    );
};

export default Bargaining;