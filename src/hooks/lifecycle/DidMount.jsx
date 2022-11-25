/**
 * Ejemplo de uso del método
 * de ciclo de vida en componete clase y el hook de ciclo de vida
 * en componente funcional
 */

import React, { Component, useEffect } from 'react';

export class DidMount extends Component {

    componentDidMount(){
        console.log('Comportamiento antes de que el componente sea añadido al DOM (rederice)')
    }

    render() {
        return (
            <div>
                <h1>Did Mount</h1>
            </div>
        );
    }
}

export const DidMountHook = () => {

    useEffect(() => {
        console.log('Comportamiento antes de que el componente sea añadido al DOM (rederice)')
    }, []) //lista vacia para que se ejecute siempre

    return (
        <div>
            <h1>Did Mount Hook</h1>
        </div>
    );
}




