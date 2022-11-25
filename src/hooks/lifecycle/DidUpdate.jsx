/**
 * Ejemplo de uso de método componentDidUpdate en componente de clase
 * y uso de hook en componete funcional
 */

import React, { Component, useEffect } from 'react'

export class DidUpdate extends Component {

    componentDidUpdate(){
        console.log('Comportamiento cuando el componente recibe nuevos props o cambio en su estado privado')
    }

    render() {
        return (
            <div>
                <h1>Did Update</h1>
            </div>
        )
    }
}


const DidUpdateHook = () => {

    useEffect(() => {
        console.log('Comportamiento cuando el componente recibe nuevos props o cambio en su estado privado')
    }, [])
    

    return (
        <div>
            <h1>Did Update con Hook</h1>
        </div>
    );
}

