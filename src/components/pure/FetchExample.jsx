import React, { useState, useEffect} from 'react';
import { getAllPagedUsers, getAllUsers, getUserDetails, login } from '../../services/fetchService';

const FetchExample = () => {

    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [totalUsers, setTotalUsers] = useState(12);
    const [usersPerPage, setUsersPerPage] = useState(6);
    const [pages, setPages] = useState(2);
    useEffect(() => {
        obtainUsers();
    }, [])
    
    const obtainUsers = () => {
        getAllUsers()
        .then((response) => {
            console.log('Usuarios', response.data)
            setUsers(response.data);
            setPages(response.total_pages);
            setTotalUsers(response.total);
            setUsersPerPage(response.per_page)
        })
        .catch((error) => {
            alert(`Error al reciBir los usuarios: ${error}`)
        })
        .finally(() => {
            console.log('Termino de obtener los usuarios')
            console.table(users);
        });
    }

    const obtainPageUsers = (page) => {
        getAllPagedUsers(page)
            .then((response) => {
                console.log('Usuarios por página', response.data)
                setUsers(response.data);
                setPages(response.total_pages);
                setTotalUsers(response.total);
                setUsersPerPage(response.per_page)
            })
            .catch((error) => {
                alert(`Error al reciBir los usuarios: ${error}`)
            })
            .finally(() => {
                console.log('Termino de obtener los usuarios')
                console.table(users);
            });
    }

    const obtainUserDetails = (id) => {
        getUserDetails(id)
        .then((response) => {
            console.log('Usuario seleccionado', response.data)
            setSelectedUser(response.data);
        })
        .catch((error) => {
            alert(`Error al reciBir los usuarios: ${error}`)
        })
        .finally(() => {
            console.log('Termino de obtener los datos del usuario')
            console.table(selectedUser);
        });
    }

    const authUser = () => {
        login('eve.holt@reqres.in', 'cityslicka')
        .then((response) => {
            console.log('TOKEN', response.token)
            sessionStorage.setItem('token', response.token)
        })
        .catch((error) => {
            alert(`Error al loguear usuario: ${error}`)
        })
        .finally(() => {
            console.log('Termino de loguear el usuario. Redireccionando a Home...')
        });
    }

    return (
        <div>
            {/* Boton de logueo */}
            <button onClick={authUser}>
            LogIn
            </button>
            <h2>Usuarios:</h2>
            { users.map((user, index) => 
                (<p key={index} onClick={() => obtainUserDetails(user.id)}>
                    {user.first_name} {user.last_name}
                </p>)
                )
            }
            <p>Mostrando {usersPerPage} usuarios de {totalUsers}.</p>
            <button onClick={() => obtainPageUsers(1)}>
                1
            </button>
            <button onClick={() => obtainPageUsers(2)}>
                2
            </button>
            <div>
                { selectedUser != null ?
                    (
                        <div>
                            <h3>
                                Detalle del usuario:
                            </h3>
                                <p>Nombre: {selectedUser.first_name}</p>
                                <p>Apellido: {selectedUser.last_name}</p>
                                <p>Email: {selectedUser.email}</p>
                                <img alt='Avatar' src={selectedUser.avatar} style={{height: '100px', width: '100px'}} />
                        </div>
                    ):
                    (<h6> Selecciona un usuario para ver los detalles</h6>)
                }
            </div>
        </div>
    );
}

export default FetchExample;
