import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <nav>
            <NavLink to="/" activeClassName="is-active" exact={true}>Expensify Dashboard</NavLink>        
            <NavLink to="/create" activeClassName="is-active">Add An Expense</NavLink>        
        </nav>    
    </header>
);

export default Header;