import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom"
import cl from './Bargaining.module.css'
import {getApparatus} from "../../reduxToolkit/slices/currentProductSlice";
import {getMembersProduct} from "../../reduxToolkit/slices/membersProductSlice";
import TableProductInfo from "../../components/TableProductInfo/TableProductInfo";

const Bargaining = () => {

    const {token} = useSelector(state => state.user)
    const {title, members} = useSelector(state => state.currentApparatus)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        (!token) && navigate('/auth')
    }, [])

    useEffect(() => {
        dispatch(getApparatus())
    }, [])

    useEffect(() => {
        dispatch(getMembersProduct(members))
    }, [])


    if (members.length === 0) {
        return <div>Загрузка...</div>
    }

    return (
        <div className={cl.bargainingContainer}>
            <div className={cl.bargainingTitle}>Ход торгов. Тестовые торги на аппарат {title}</div>
            <TableProductInfo/>
        </div>
    );
};

export default Bargaining;