import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { LEVELS } from '../../../../models/levels.enums';


const CrearTarea = () => {
    
    const defaultTask = {
        taskName: '',
        taskDescription: '',
        completed: false,
        level: LEVELS.NORMAL,
    }

    const taskSchema = Yup.object().shape(
        {
            taskName: Yup.string()
                .min(3, 'El nombre de la tarea es muy corto')
                .max(30, 'El nombre de la tarea es muy largo')
                .required('El nombre la tarea es obligatorio'),
            taskDescription: Yup.string()
                .min(3, 'La descripción es muy corta')
                .max(80, 'La descripción es muy larga')
                .required('La descrpición es obligatoria'),
        }
        );

    return (
        <div>
         <h4>Crear Tarea</h4>
            <Formik
            initialValues={ defaultTask }
                //*** Yup vaalidation schema */
                validationSchema={taskSchema}
                //*** evento onSubmit */
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 1000));
                    alert(JSON.stringify(values, null, 2));
                }}
            >
            {({ values, 
                errors, 
                touched, 
                isSubmitting, 
                //handleChange,
                //handleBlur 
                }) => (
                    <Form>
                        <label htmlFor='taskName'>Nombre:</label>
                        <Field id='taskName' name='taskName' type='text' placeholder='Escribe el nombre de la tarea' />
                        {/* Errores de username */}
                        {
                                errors.taskName && touched.taskName && (
                                    <ErrorMessage name='taskName' component='div'/>
                                )
                            }
                        
                        <label htmlFor='taskDescription'>Descripción:</label>
                        <Field id='taskDescription' name='taskDescription' type='text' placeholder='Escribe la descripción de la tarea' />
                        {/* Errores de username */}
                        {
                                errors.taskDescription && touched.taskDescription && (
                                    <ErrorMessage name='taskDescription' component='div'/>
                                )
                            }
                        
                            <Field as="select" name="level">
                                <option value={LEVELS.NORMAL}>Normal</option>
                                <option value={LEVELS.URGENT}>Urgente</option>
                                <option value={LEVELS.BLOCKING}>Bloqueante</option>
                            </Field>

                            <button type='submit'>Crear</button>
                            {isSubmitting ? (<p>Creando tarea...</p>) : null}
                    </Form>
                )
            }

            </Formik>

        </div>
    )
}

export default CrearTarea
