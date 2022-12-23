import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';

import './App.css';

import HomePage from './pages/home/HomePage';
import NotFoundPage from './pages/404/NotFoundPage'
import AboutPage from './pages/about-faqs/AboutPage';
import ProfilePage from './pages/profile/ProfilePage';
import TasksPage from './pages/tasks/TasksPage';
import TaskDetailPage from './pages/tasks/TaskDetailPage';
import LoginPage from './pages/auth/LoginPage';
import StatePage from './pages/home/StatePage';


function AppRouting() {

  let logged = false;

  let taskList = [
    {
      id: 1,
      name: 'Tarea 1',
      description: 'Primera tarea lorem impsum'
    },
    {
      id: 2,
      name: 'Tarea 2',
      description: 'Segunda tarea lorem impsum'
    }
  ]

  useEffect(() => {
    logged = localStorage.getItem('credentials');
    console.log('user logged?', logged)
    }, []);

  return (
    <Router>
      <div>
      <aside>
          <Link to='/'>|| Inicio |</Link>
          <Link to='/about'>| Acerca de |</Link>
          <Link to='/faqs'>| FAQs |</Link>
          <Link to='/task/1'>| Tarea 1 |</Link>
          <Link to='/task/2'>| Tarea 2 |</Link>
          <Link to='/any404'>| Not Existing Route |</Link>
          <Link to='/login'>| Iniciar Sesión |</Link>
        </aside>

        <main>
          <Switch> 
            <Route exact path='/' component={ HomePage } />
            <Route exact path='/online-state' component={ StatePage } />
            <Route path='/login' component={ LoginPage }> 
            {
              logged ? 
              () => {
                alert('Ya has iniciado sesión, redirigiendo al Inicio')
                return (<Redirect to='/'/>)
              } : 
              () => {
                return (<LoginPage/>)
              }
            }
            </Route> 
            <Route path='/(about|faqs)' component={ AboutPage } />
            <Route path='/profile' component={ ProfilePage }> 
            {
              logged ? <ProfilePage /> 
              : () => {
                alert('Debes iniciar sesión para ingresar a tu perfil')
                return (<Redirect to='/login'/>)
              }
            }
            </Route>
            <Route path='/tasks' component={ TasksPage } />
            <Route exact 
              path='/task/:id' 
              render = {
              ({match}) => (<TaskDetailPage task={taskList[match.params.id -1]}/>)
              }> 
            
            </Route>

            {/* Dejar siempre al final el 404 - Not Found */}
            <Route component= { NotFoundPage } />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default AppRouting;
