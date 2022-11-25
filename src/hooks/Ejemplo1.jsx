/*
Ejemplo del uso del hook useState

Crear un componente de tipo funcion y acceder a su estado 
privado a traves de un hook y , ademas, poder modificarlo
*/

import React, { useState } from 'react';

const Ejemplo1 = () => {
    //valor inicial para un contador
    const valorInicial  = 0;

    //Valor inicial para una persona
    const personaInicial = {
        nombre: 'Germán',
        email: 'germanrico@gmail.com'
    }

    /* Queresmos que el valorinicial y personainicial psean parte del 
    estado del componente para asi poder gestionar su cambio y que este
    se vea reflejadoen la vista del componente.

    const [nombreVariable, funcionParaCambiar] = useState(valorInicial)
    */

    const [contador, setContador] = useState(valorInicial);
    const [persona, setPersona] = useState(personaInicial);

    /*
    funcion para actualizar el estado privado que contiene el contador
    */
    function incrementarContador(){
        // funcionParaCambiar (nuevo valor)
        setContador(contador + 1);
    }

    /* funcion para actualizar el estado de persona en el componente
    */
    function actualizarPersona(){
        setPersona(
            {
                nombre: 'Jhon',
                email: 'jdhoe@gmail.com'
            }
        )
    }


    return (
        <div>
            <h1> *** Ejemplo de useState() ***</h1>
            <h2>Contador: {contador}</h2>
            <h2>Datos de la persona:</h2>
            <h3>Nombre: {persona.nombre}</h3>
            <h3>Email: {persona.email}</h3>
            <div>
                <button onClick={incrementarContador}>Incrementar Contador</button>
                <button onClick={actualizarPersona}>Actualizar Persona</button>
            </div>
        </div>
    );
}

export default Ejemplo1;
