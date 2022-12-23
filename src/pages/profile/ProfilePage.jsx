import React from 'react';
import { useHistory } from 'react-router-dom'

const ProfilePage = ({ user }) => {

    const history = useHistory();

    const navigateTo = (path) => {
        history.push(path);
    }

    const goBack = () => {
        history.goBack();
    }

    return (
        <div>
            <h1>Tu Perfil</h1>
            <div>
                <button onClick={goBack}>
                    Atrás
                </button>
                <button onClick={() => navigateTo('/tasks')}>
                    Tus tareas
                </button>
            </div>
        </div>
    );
}

export default ProfilePage;
