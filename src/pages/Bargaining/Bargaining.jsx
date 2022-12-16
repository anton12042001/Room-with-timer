import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom"

const Bargaining = () => {

    const {token} = useSelector(state => state.user)
    const navigate = useNavigate()

    useEffect(() => {
        (!token) && navigate('/auth')
    },[])



    return (
        <div>
            
        </div>
    );
};

export default Bargaining;