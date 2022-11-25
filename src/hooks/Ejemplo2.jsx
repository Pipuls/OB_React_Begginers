/* 
Ejemplo de uso de:
    * useState()
    * useRef()
    * useEffect()
*/

import React, { useState, useRef, useEffect } from 'react';

const Ejemplo2 = () => {

    //Vamos a crear 2 contadores distintos
    //con estados diferentes

    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);

    //Vamos a crear una referencia con useRef() para asociar una variable
    //con un elemento del DOM del componente (vista html)
    const miRef = useRef();

    function incrementar1() {
        setContador1(contador1 + 1)
    }

    function incrementar2() {
        setContador2(contador2 + 1)
    }

    /* Trabajando con el useEffect
        ? caso 1: ejecutar siempre un sippet de codigo
        Cada vez que haya un cambio en el estado del componente
        se ejecuta lo que esta dentro del useEffect
    */

        // useEffect(() => {
        //     console.log('CAMBIO EN EL ESTADO DEL COMPONENTE');
        //     console.log('Mostrando Referencia a elemento del DOM');
        //     console.log(miRef);
        // })

        /*
        ? Caso 2: Ejecutar solo cuando cmbie contador1
        cada vez que cambia contador 1, se ejecuta useEffect()
        en caso que cambie el contador 2 no se ejecuta
        */

        // useEffect(() => {
        //     console.log('CAMBIO EN EL ESTADO DEL COMPONENTE');
        //     console.log('Mostrando Referencia a elemento del DOM');
        //     console.log(miRef);
        // }, [contador1]);

        /*
        ? Caso 3: Ejecutar solo cuando cmbie contador1
        cada vez que cambia contador 1, se ejecuta useEffect()
        cada vez que cambia contador 1, se ejecuta useEffect()
        */

            useEffect(() => {
            console.log('CAMBIO EN EL ESTADO DEL COMPONENTE');
            console.log('Mostrando Referencia a elemento del DOM');
            console.log(miRef);
        }, [contador1, contador2]);
        
    return (
        <div>
            <h1> *** Ejemplo de useState() useRef() useEffect() ***</h1>
            <h2>Contador 1: {contador1}</h2>
            <h2>Contador 2: {contador2}</h2>
            {/* elemento referenciado */}
            <h3 ref={miRef}>
                Ejemplo de elemento referenciado
            </h3>
            {/* botones para cambiar los contadores */}
            <div>
                <button onClick={incrementar1}>Incrementar Contador 1</button>
                <button onClick={incrementar2}>Incrementar Contador 2</button>
            </div>
        </div>
    );
}

export default Ejemplo2;
