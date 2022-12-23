import React from 'react';
import { useLocation } from 'react-router-dom'

const StatePage = () => {

    const location = useLocation();

    // console.log('Location state', location.state.online) //state sent
    console.log('Query param', location.search); //query params set

    return (
        <div>
            <h1>State: {location.state.online ? 'El usuario esta logueado' : 'El usaurio esta desconectado'}</h1>
        </div>
    );
}

export default StatePage;
