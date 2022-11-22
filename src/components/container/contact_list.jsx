import React from 'react';
import { Contact } from '../../models/contact.class';
import TaskComponent from '../pure/contact';

const ContactListComponent = () => {

    const defaultContact = new Contact('Jhon', 'Dhoe', 'Jdhoe@gmail.com', false);

    return (
        <div>
            <div>
                <h1>Lista de contactos:</h1>
            </div>
            {/* TODO: Aplicar un For/Map para hacer una lista */}
            <TaskComponent contact={defaultContact}/>
        </div>
    );
};

export default ContactListComponent;
