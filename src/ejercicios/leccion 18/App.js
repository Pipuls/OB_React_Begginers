import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from "react-router-dom";
import TaskDashBoard from "./pages/TaskDashBoard";
import LoginPg from "./pages/Login";
import RegisterPg from "./pages/Register";

const AppEj18 = () => {
    const loggedIn = true;

    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/">
                        {
                            loggedIn 
                            ? 
                            (<Redirect from="/" to="/dashboard" />) 
                            : 
                            (<Redirect from="/" to="/login" />)
                        }
                    </Route>
                    <Route exact path="/" component={LoginPg} />
                    <Route exact path="/registro" component={RegisterPg} />
                    <Route exact path="/dashboard" component={TaskDashBoard}>
                        {
                        loggedIn 
                            ? 
                                (<TaskDashBoard />)
                            : 
                                (<Redirect from="/" to="/login" />)
                        }
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};

export default AppEj18;
