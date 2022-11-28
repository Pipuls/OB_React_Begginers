import React, { useState } from 'react';
import Contact from './contact';
import ContactForm from './contact_form';
import './contact.css';

const ContactList = () => {
    const defaultContact = [
        { nombre: 'Juan Perez', email: 'jperez@gmail.com', conectado: true },
        { nombre: 'Jose Gomez', email: 'jgomez@gmail.com', conectado: false },
    ];

    const [nuevoContacto, setNuevoContacto] = useState(defaultContact);

    function changeState(contact) {
        const index = nuevoContacto.indexOf(contact);
        const tempContact = [...nuevoContacto];

        tempContact[index].conectado = !tempContact[index].conectado;
        setNuevoContacto(tempContact);
    }

    function remove(contact) {
        const index = nuevoContacto.indexOf(contact);
        const tempContact = [...nuevoContacto];
        tempContact.splice(index, 1);
        setNuevoContacto(tempContact);
    }

    function addContact(contact) {
        const tempContact = [...nuevoContacto];
        tempContact.push(contact);
        setNuevoContacto(tempContact);
    }


    return (
        <div className='contact-app'>
            <h1>Contactos</h1>

            <div className='card-container'>
                {nuevoContacto.map((contact, index) => {
                    return (
                        <Contact key={index} contact={contact} changeState={changeState} remove={remove} />
                    );
                })}
            </div>

            <ContactForm onAddContact={addContact}/>
        </div>
    );
}

export default ContactList;
