import React from 'react';
import {useLocation, useHistory} from 'react-router-dom'

const HomePage = () => {

    //const location = useLocation();
    const history = useHistory();

    const navigate = (path) => {
        history.push(path);
    }

    const navigateProps = (path) => {
        history.push({
            pathname: path,
            search: '?online=true', //query params
            state: {
                online: true
            }
        })
    }

    return (
        <div>
            <h1>Home Page</h1>
            <div>
                <button onClick={ () => navigate('/profile')}>
                    Ver perfil
                </button>
                <button onClick={ () => navigateProps('/online-state')}>
                    Ver estado
                </button>
            </div>
        </div>
    );
}

export default HomePage;
