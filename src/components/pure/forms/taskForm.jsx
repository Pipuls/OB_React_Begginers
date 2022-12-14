import React, { useRef }from 'react';
import PropTypes from 'prop-types';
import { LEVELS } from '../../../models/levels.enums';
import { Task } from '../../../models/task.class';

const TaskForm = ({add, lenght}) => {

    const nameRef = useRef('');
    const descriptionRef = useRef('');
    const levelRef = useRef(LEVELS.NORMAL);

    function addTask(e){
        e.preventDefault();

        const newTask = new Task(
            nameRef.current.value,
            descriptionRef.current.value,
            false,
            levelRef.current.value
        );
        add(newTask);
    }
    const normalStyle = {
        color: 'green',
        fontWeight: 'bold'
    }
    const urgentStyle = {
        color: 'yellow',
        fontWeight: 'bold'
    }
    const blockingStyle = {
        color: 'red',
        fontWeight: 'bold'
    }
    
    return (
        <div>
            <form onSubmit={addTask} className='d-flex justify-content-center align-items-center mb-4'>
                <div className='form-outline flex-fill'>
                    <input 
                        ref={nameRef} 
                        id='inputName' 
                        type='text' 
                        className='form-control form-control-lg my-2' 
                        placeholder='Nombre de la tarea'
                        autoFocus
                        required />
                    <input 
                        ref={descriptionRef} 
                        id='inputDescription' 
                        type='text' 
                        className='form-control form-control-lg my-2'
                        placeholder='Descripción-  de la tarea' 
                        required />
                    <select 
                        className='form-control form-control-lg my-2'
                        ref={levelRef} defaultValue={LEVELS.NORMAL} 
                        id='selectLevel'>
                        <option style={normalStyle} value={LEVELS.NORMAL}>
                            Normal
                        </option>
                        <option style={urgentStyle} value={LEVELS.URGENT}>
                            Urgente
                        </option>
                        <option style={blockingStyle} value={LEVELS.BLOCKING}>
                            Prioritario
                        </option>
                    </select>
                    <button type='submit' className='btn btn-primary btn-lg ms-2 '>
                        {lenght > 0 ? 'Nueva Tarea' : 'Crear Tarea'}
                    </button>
                </div>
            </form>
        </div>
    );
}

TaskForm.protoTypes = {
    add: PropTypes.func.isRequired,
    lenght: PropTypes.number.isRequired,
}

export default TaskForm;
