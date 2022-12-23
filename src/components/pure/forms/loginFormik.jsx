import React from "react";
import { useHistory } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from 'yup';


const loginSchema = Yup.object().shape(
    {
        email: Yup.string()
            .email('Formato de email no válido')
            .required('El campo email es obligatorio'),
        password: Yup.string()
            .required('El campo password es obligatorio')
    }
);

const LoginFormik = () => {
    const initialCredentials = {
        email: '',
        password: ''
    }

const history = useHistory();

    return (
        <div>
            <h4>Inicia sesión</h4>
            <Formik
                //*** Valores iniciales */
                initialValues={initialCredentials}
                //*** Yup vaalidation schema */
                validationSchema={loginSchema}
                //*** evento onSubmit */
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 1000));
                    alert(JSON.stringify(values, null, 2));
                    //guardamos los datos de log in en el local storage
                    await localStorage.setItem('credentials', values);
                    history.push('/profile');
                }}>

                {/* obtener propiedades de formik */}
                {({ values, 
                    errors, 
                    touched, 
                    isSubmitting, 
                    handleChange,
                    handleBlur }) => (
                        <Form>
                            <label htmlFor='email'>Email</label>
                            <Field id='email' name='email' type='email' placeholder='example@email.com' />
                            {/* Errores de email */}
                            {
                                errors.email && touched.email && (
                                    <ErrorMessage name='email' component='div'/>
                                )
                            }
                            <label htmlFor='password'>Password</label>
                            <Field
                                id='password'
                                name='password'
                                placeholder='password'
                                type='password'
                            />
                            {/* Errores de password */}
                            {
                                errors.password && touched.password && (
                                    <ErrorMessage name='password' component='div'/>
                                )
                            }
                            <button type="submit">Enviar</button>
                            {isSubmitting ? (<p>Enviando credenciales...</p>) : null}
                        </Form>
                )}
            </Formik>
        </div>
    );
};

export default LoginFormik;
