import React from 'react';

import {useLocation, useHistory} from 'react-router-dom'

const AboutPage = () => {

    const location = useLocation();
    const history = useHistory();

    const navigate = (path) => {
        history.push(path);
    }

    const goBack = () => {
        history.goBack();
    }

    const goForward = () => {
        history.goForward();
    }

    return (
        <div>
            <h1>About Page/FAQs</h1>
            <div>
            <button onClick={ goBack }>
                    Atrás
                </button>
                <button onClick={ () => navigate('/')}>
                    Ir al inicio
                </button>
                <button onClick={ goForward }>
                    Adelante
                </button>
            </div>
        </div>
    );
}

export default AboutPage;
