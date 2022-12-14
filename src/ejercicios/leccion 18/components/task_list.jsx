import React from 'react';
import useList from '../hooks/useList.js';
import { LEVELS } from '../models/levels.enums.js';
import Taskform from '../components/forms/taskForm';

const Tasklist = ({ user }) => {
    const defaultTask = {
        name: 'Tarea 1',
        description: 'Ejercicio leccion 18',
        level: LEVELS.URGENT,
        done: false,
    };
    const tasks = useList([defaultTask]);
    const usuario = JSON.parse(user);
    return (
        <div>
            <h1>Task List - Usuario: {usuario.email}</h1>
            <Taskform onAdd={(values) => tasks.push(values)} />
            {tasks.isEmpty() ? (
                <p>Task List is Empty</p>
            ) : (
                tasks.value.map((task, index) => (
                    <div key={index} style={{ display: 'flex', alignItems: 'center' }} role="button">
                        <input type="checkbox" onClick={() => tasks.remove(index)} checked={false} />
                        <p style={{ fontWeight: 'bold', marginRight: '5px' }}>{task.name}</p>
                        <p>{task.description}</p>
                    </div>
                ))
            )}
        </div>
    );
};

export default Tasklist;