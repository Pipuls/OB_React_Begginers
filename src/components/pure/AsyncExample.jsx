import React from 'react';

const AsyncExample = () => {

    async function generateNumber(){
        return 1;
    }

    async function generatePromiseNumber(){
        return Promise.resolve(2);
    }

    function obtainNumber() {
        generateNumber().then((response) => alert(`Response: ${response}`))
        .catch((error) => (`Algo ha ido mal: ${error}`))
    }

    function obtainPromiseNumber() {
        generatePromiseNumber().then((response) => alert(`Response: ${response}`))
        .catch((error) => (`Algo ha ido mal: ${error}`))
    }

    async function saveSessionStorage(key, value) {
        sessionStorage.setItem(key, value);

        return Promise.resolve(sessionStorage.getItem(key))
    }

    function showStorage(){
        saveSessionStorage('name', 'Germán')
        .then((response) => {
        let value = response;
            alert(`Nombre Guardado: ${value}`);
        }).catch((error) => {
            alert(`Algo ha ido mal: ${error}`)
        }).finally(() => alert('Nombre guardado y recuperado correctamente'))
        }

        async function obtainMessage(){
            let promise = new Promise((resolve, reject) => {
                setTimeout(() => resolve('Hello World'), 2000)
            });
            let message = await promise;

            await alert(`Mensaje recivido: ${message}`)
        }

        const returnError = async() => {
            await Promise.reject(new Error('OOPS!'));
        }

        const consumeError = () => {
            returnError()
            .then((response) => alert(`Todo esta bien: ${response}`))
            .catch((error) => alert(`Algo salio mal: ${error}`))
            .finally(() => alert(`Finally ejecutado`))
        }

        const urlNotFound = async () => {
            try {
                let response = await fetch('https://invalidURL.com');
                alert(`Respuesta: ${JSON.stringify(response)}`)
            } catch (error) {
                alert(`Algo salio mal en el url: ${error} mira la consola`)
            }
        }

        const multiplePromise = async () => {
            let results = await Promise.all(
                [
                    fetch('https://reqres.in/api/users'),
                    fetch('https://reqres.in/api/users?page=2')
                ]
            ).catch((error) => alert(`algo salio mal con las URLs: ${error} (mira la consola)`))
        }
    
    
    
    return (
        <div>
        <h1>Ejemplos de Async y Promise</h1>
            <button onClick={obtainNumber}>Obtener número</button>
            <button onClick={obtainPromiseNumber}>Obtener Promesa número</button>
            <button onClick={showStorage}>Guardar nombre y mostar</button>
            <button onClick={obtainMessage}>Mensage en 2 seg</button>
            <button onClick={consumeError}>boton de error</button>
            <button onClick={urlNotFound}>url inexistente</button>
            <button onClick={multiplePromise}> Multiple Promises </button>

        </div>
    );
}

export default AsyncExample;
