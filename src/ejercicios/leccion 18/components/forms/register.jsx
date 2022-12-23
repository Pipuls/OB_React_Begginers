import React from 'react'
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from 'yup';

//models
import { ROLES } from '../../../../models/roles.enum';

const RegisterForm = ({onSubmit}) => {
    const initialValues = {
        username: '',
        email: '',
        password: '',
        confirm: '', //debe coincidir
        role: ROLES.USER,
    }

    const registerSchema = Yup.object().shape(
        {
            username: Yup.string()
            .min(6, 'El nombre de usuario debe tener minimo 6 caracteres')
            .max(12, 'El nombre de usuario debe tener maximo 12 caracteres')
            .required('El nombre de usuario es obligatorio'),
            email: Yup.string()
            .email('Formato de email no válido')
            .required('El email es obligatorio'),
            role: Yup.string().oneOf(
                [ROLES.USER, ROLES.ADMIN, 'Debes elegir un rol: User / Admin']
            ).required('El rol es requerido'),
            password: Yup.string()
            .min(8, 'La contraseña debe tener minimo 8 caracteres')
            .required('La contraseña es obligatoria'),
            confirm: Yup.string()
                .when("password", {
                    is: value => (value && value.length > 0 ? true : false),
                    then: Yup.string().oneOf(
                        [Yup.ref("password")],
                        '¡Las contraseñas debe coincidir!'
                    )
        }).required('Debes confirmar la contraseña')
        }
    )

    return (
        <div>
            <h4>Crear cuenta</h4>
            <Formik
                initialValues={ initialValues }
                //*** Yup vaalidation schema */
                validationSchema={registerSchema}
                //*** evento onSubmit */
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 1000));
                    onSubmit(values);
                }}>
            {/* obtener propiedades de formik */}
            {({ touched, errors, isSubmitting }) => (
                        <Form>
                        <label htmlFor='username'>Nombre de Usuario</label>
                        <Field id='username' name='username' type='text' placeholder='Escribe tu nombre de usuario' />
                        {/* Errores de username */}
                        {
                                errors.username && touched.username && (
                                    <ErrorMessage name='username' component='div'/>
                                )
                            }

                        <label htmlFor='email'>Email</label>
                        <Field id='email' name='email' type='email' placeholder='example@email.com' />
                        {/* Errores de email */}
                        {
                                errors.email && touched.email && (
                                    <ErrorMessage name='email' component='div'/>
                                )}

                        <label htmlFor='password'>Password</label>
                        <Field id='password' name='password' placeholder='password' type='password' />
                            {/* Errores de password */}
                            {
                                errors.password && touched.password && (
                                    <ErrorMessage name='password' component='div'/>
                                )}
                        
                        <label htmlFor='confirm'>Password</label>
                        <Field id='confirm' name='confirm' placeholder='Confirmar contraseña' type='password' />
                            {/* Errores de confrirmar password */}
                            {
                                errors.confirm && touched.confirm && (
                                    <ErrorMessage name='confirm' component='div'/>
                                )}

                        <button type='submit'>Registrar cuenta</button>
                            {isSubmitting ? (<p>Enviando credenciales...</p>) : null}
                        </Form>
                    )}
            </Formik>
        </div>
    )
}

export default RegisterForm
