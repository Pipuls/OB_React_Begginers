import React from 'react';

const Contact = ({ contact, changeState, remove }) => {
    return (
        <div className='contact-component'>
            <h2 className='p-2'>{contact.nombre}</h2>
            <span className='fs-5 pb-3'>{contact.email}</span>

            <button
                style={{ backgroundColor: contact.conectado ? 'green' : 'red' }}
                className='btn state-button'
                onClick={() => { changeState(contact); }}>
                {contact.estado ? 'Online' : 'Offline'}
            </button>
            <button
                className='btn remove-button'
                onClick={() => remove(contact)}>
                Borrar Contacto
            </button>
            <hr></hr>
        </div>
    );
}

export default Contact;
