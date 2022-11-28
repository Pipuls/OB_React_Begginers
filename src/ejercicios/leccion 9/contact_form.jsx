import React, { useRef } from 'react';

const ContactForm = ({onAddContact}) => {
    const name = useRef('');
    const email = useRef('');

    function addContact(e) {
        e.preventDefault();
        
        const newContact = {nombre: name.current.value, email: email.current.value, conectado: true };

        onAddContact(newContact);
        name.current.value = '';
        email.current.value = '';
    }

    return (
        <form onSubmit={addContact} className='form cotact-component'>
            <h2>Añadir Contacto:</h2>
            <input ref={name} name='name' placeholder='Nombre del contacto' className='form-control mb-3'/>
            <input ref={email} name='email' placeholder='Email del contacto' className='form-control mb-3'/>
            <button onClick={addContact} type='submit' className='btn btn-primary btn-lg'>
            Agregar Contacto
            </button>
        </form>
    );
}

export default ContactForm;
