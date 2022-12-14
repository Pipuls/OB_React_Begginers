import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

//modelos
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enums';

//importamos hoja de estilos task.scss
import '../../styles/task.scss';


const TaskComponent = ({ task, completed, remove }) => {

    useEffect(() => {
        console.log('Task created')
        return () => {
            console.log(`Task: ${task.name} is going to unmount`)
        }
    }, [task])

    // funcion que retorna un badge dependiendo del nivel de la tarea
    function taskLevelBadge(){
        switch (task.level) {
            case LEVELS.NORMAL:
                return(
                <h6 className='mb-0'>
                    <span className='badge bg-success'>
                    {task.level}
                    </span>
                </h6>)
                case LEVELS.URGENT:
                return(
                <h6 className='mb-0'>
                    <span className='badge bg-warning'>
                    {task.level}
                    </span>
                </h6>)
                case LEVELS.BLOCKING:
                    return(
                    <h6 className='mb-0'>
                        <span className='badge bg-danger'>
                        {task.level}
                        </span>
                    </h6>)
            default:
                break;
        }
    }

    // Funcion que devuelve un icono dependiendo de si la tarea esta completa o no
    function taskIconCompleted(){
        if(task.completed){
            return (<i 
                        onClick={() => completed(task)} 
                        className='bi bi-toggle-on fw-bold fs-4 task-action' 
                        style={{color: 'green'}}></i>)
        } else {
            return (<i 
                        onClick={() => completed(task)} 
                        className='bi bi-toggle-off fw-bold fs-4 task-action' 
                        style={{color: 'grey'}}></i>)
        }
    }

    const taskCompleted = {
        backgroundColor: 'grey',
        color: 'tomato',
        textDecoration: 'line-through'
    };

    const taskPending = {
        backgroundColor: 'aquamarine',
        color: 'black',
        fontWeight: 'bold',
        textDecoration: 'none'
    };


    return (
        <tr className='fw-normal' style={task.completed ? taskCompleted : taskPending}>
            <th>
                <span className='ms-2'>{task.name}</span>
            </th>
            <td className='align-middle'>
                <span>{task.description}</span>
            </td>
            <td className='align-middle'>
                {/* Se ejecuta la funcion que devuelve elemento badge */}
                {taskLevelBadge()}
            </td>
            <td className='align-middle'>
                {/* TODO: Sustituir por iconos */}
                {taskIconCompleted()} 
                    <i 
                        className='bi bi-trash task-action'  
                        onClick={() => remove(task)}
                        style={{color: 'tomato'}}></i>
            </td>
        </tr>
    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task).isRequired,
    completed: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
};


export default TaskComponent;
