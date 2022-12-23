import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import Copyright from '../../components/pure/Copyright';


const DashBoardPage = () => {

    const history = useHistory();

    const logOut = () => {
        history.push('/login');
    }

    return (
        <div>
            <Button variant="contained" onClick={logOut}>Cerrar Sesión</Button>
            <Copyright/>
        </div>
    );
}

export default DashBoardPage;
