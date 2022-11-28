import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';

//importamos hoja de estilos task.scss
import '../../styles/task.scss';


const TaskComponent = ({ task }) => {

    useEffect(() => {
        console.log('Task created')

        return () => {
            console.log(`Task: ${task.name} is going to unmount`)

        }
    }, [task])


    return (
        <tr className='fw-normal'>
            <th>
                <span className='ms-2'>{task.name}</span>
            </th>
            <td className='align-middle'>
                <span>{task.description}</span>
            </td>
            <td className='align-middle'>
                {/* TODO: Sustituir por un badge */}
                <span>{task.level}</span>
            </td>
            <td className='align-middle'>
                {/* TODO: Sustituir por iconos */}
                {task.completed}
            </td>
        </tr>
        // <div>
        //     <h2 className='task-name'>
        //         Nombre: {task.name}
        //     </h2>
        //     <h3>
        //         Descripciión: {task.description}
        //     </h3>
        //     <h4>
        //         Nivel: {task.level}
        //     </h4>
        //     <h5>
        //         Esta tarea está: {task.completed ? 'COMPLETADA' : 'PENDIENTE'}
        //     </h5>
        //</div>
    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task)
};


export default TaskComponent;
