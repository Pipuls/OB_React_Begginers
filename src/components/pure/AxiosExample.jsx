import React, { useState, useEffect } from 'react';
import { getRandomUser } from '../../services/axiosService';

const AxiosExample = () => {

    const [user, setUser] = useState(null);

    useEffect(() => {
        obtainUser();
    }, []);
    
    const obtainUser = () => {
        getRandomUser()
            .then((response) => {
                if (response.status === 200) {
                    setUser(response.data.results[0])
                }
            })
            .catch((error) => {
                alert(`Algo salio mal: ${error}`)
            })
    }

    return (
        <div>
            <h1>Ejemplo Axios</h1>
            { user !== null ?
            (
                <div>
                    {/* <img alt='Avatar' src={user.picture.large}/> */}
                    <h2>{user.name.title} {user.name.first} {user.name.last}</h2>
                    <h3>{user.email}</h3>
                </div>
            ) 
            : null }
            
                <div>
                    <p>Generar un usuario nuevo</p>
                    <button onClick={obtainUser}>
                        Usuario aleatorio
                    </button>
                </div>
        </div>
    );
}

export default AxiosExample;
