/**
 * Ejemplo de uso del método componentWillUnmount para componente clase
 * Ejemplo de uso del hooks para componente funcional
 * (Cuando el componente va a desaparecer)
 */

import React, { Component, useEffect } from "react";

export class WillUnmount extends Component {
    componentWillUnmount() {
        console.log("Comportamiento antes de que el componente desaparezca");
    }

    render() {
        return (
            <div>
                <h1> Will WillUnmount</h1>
            </div>
        );
    }
}

export const WillUnmountHook = () => {

    useEffect(() => {
        //aca no ponemos nada
        return () => {
            console.log("Comportamiento antes de que el componente desaparezca");
        };
    }, []);

    return (
        <div>
            <h1> Will WillUnmount Hook</h1>
        </div>
    );
}

export default WillUnmount;

