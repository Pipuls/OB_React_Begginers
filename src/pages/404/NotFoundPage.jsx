import React from 'react';
import { useHistory } from 'react-router-dom';

const NotFoundPage = () => {

    const history = useHistory();

    const navigateTo = (path) => {
        history.push(path)
    }
    return (
        <div>
            <h1>404 - Page Not Found</h1>
            <div>
                <button onClick={() => navigateTo('/')}>
                    Volver al inicio
                </button>
            </div>
        </div>
    );
}

export default NotFoundPage;
