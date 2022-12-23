import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import NotFoundPage from './pages/404/NotFoundPage'
import LoginPage from './pages/auth/LoginPage';
import DashBoardPage from './pages/dashboard/DashBoard';

function AppRoutingFinal() {

  //todo: change value from sessionStorage
  let loggedIn = true;

  return (
    <Router>
      {/* Routes Switch */}
      <Switch>
        {/* Redirect para proteger las rutas */}
        <Route exact path='/'>
          {
            loggedIn ? 
            (<Redirect from='/' to='/dashboard'/>)
            :
            (<Redirect from='/' to='/login' />)
          }
        </Route>
        {/* Login route */}
        <Route exact path='/login' component={LoginPage}/>
        {/* Dashboard route */}
        <Route exact path='/dashboard'>
          {
            loggedIn ? 
            (<DashBoardPage/>)
            :
            (<Redirect from='/' to='/login' />)
          }
        </Route>
        <Route component={NotFoundPage}/>
      </Switch>
    </Router>
  );
}

export default AppRoutingFinal;
