import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch, NavLink, Link } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import LoginPage from '../components/LoginPage.js';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage.js';
import AddExpensePage from '../components/AddExpensePage.js';
import EditExpensePage from '../components/EditExpensePage.js';
import PageNotFound from '../components/PageNotFound.js';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';


export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path="/" component={LoginPage} exact={true}/>
                <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} exact={true}/>                
                <PrivateRoute path="/create" component={AddExpensePage} />
                <PrivateRoute path="/edit/:id" component={EditExpensePage} />
                <Route component={PageNotFound} />    {/* Switch is what makes the 404 Page work... */}                    
            </Switch>
        </div>
    </Router>
);

export default AppRouter;