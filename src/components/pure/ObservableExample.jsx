import { getNumbers } from "../../services/observableService";
import React, { useState } from 'react';

const ObservableExample = () => {

    const [number, setNumber] = useState(0);

    const obtainNewNumbers = () => {

        console.log('suscripcion al observable');
        getNumbers.subscribe(
            {
                next(newNumber){
                    console.log('New Number: ', newNumber);
                    setNumber(newNumber);
                },
                error(error){
                    alert(`Algo fallo: ${error}`)
                    console.log('Error en el observable')
                },
                complete(){
                    alert(`Finalizo con: ${number}`)
                    console.log('termino el observable')
                }
            }
        )
    }


    return (
        <div>
            <h2>Number: {number}</h2>
            <button onClick={obtainNewNumbers}>Obtener numeros</button>
        </div>
    );
}

export default ObservableExample;
