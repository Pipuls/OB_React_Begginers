import React, { useState, useEffect } from 'react';
import { LEVELS } from "../../models/levels.enums";
import { Task } from "../../models/task.class";
import TaskForm from "../pure/forms/taskForm";
import TaskComponent from "../pure/task";

const TaskListComponent = () => {
    const defaultTask1 = new Task("Example 1", "Description 1", true, LEVELS.NORMAL);
    const defaultTask2 = new Task("Example 2", "Description 2", false, LEVELS.URGENT);
    const defaultTask3 = new Task("Example 3", "Description 3", false, LEVELS.BLOCKING);

    //Estado del componente
    const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3]);
    const [loading, setLoading] = useState(true);

    //Control del ciclo de vida del componente
    useEffect(() => {
        console.log("Task State has been modified");
        setLoading(false);
        return () => {
            console.log("TaskList component is going to unmount...");
        };
    }, [tasks]);

    function completeTask(task){
        console.log('Complete this Task: ', task)
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks[index].completed = !tempTasks[index].completed;
        //actualizamos el estado del componente con la nueva listay se acutaliza
        //la iteracion de las tareas para que se vea reflejado 
        setTasks(tempTasks);
    }

    function deleteTask(task){
        console.log('Delete this Task: ', task)
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks.splice(index,1);
        setTasks(tempTasks);
    }

    function addTask(task){
        console.log('Add this Task: ', task)
        const tempTasks = [...tasks];
        tempTasks.push(task);
        setTasks(tempTasks);
    }

    return (
        <div>
            <div className='col-12'>
                <div className='card'>
                    <div className='card-header p-3'>
                        <h5>Tus tareas:</h5>
                    </div>
                    <div className='card-body' data-mdb-perfect-scrollbar='true' style={{ position: 'relative', height: '400px' }}>
                        <table>
                            <thead>
                                <tr>
                                    <th scope='col'>Título</th>
                                    <th scope='col'>Descripción</th>
                                    <th scope='col'>Prioridad</th>
                                    <th scope='col'>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tasks.map((task, index) => {
                                    return (
                                        <TaskComponent 
                                            key={index} 
                                            task={task}
                                            complete={completeTask}
                                            remove = {deleteTask}
                                            />
                                        )
                                    }
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <TaskForm add={addTask}/>
        </div>
    );
};

export default TaskListComponent;
