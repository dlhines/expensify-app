import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = ({ startLogout }) => (
    <header>
        <h1>Expensify</h1>
        <nav>
            <NavLink to="/dashboard" activeClassName="is-active" >Expensify Dashboard</NavLink>        
            <NavLink to="/create" activeClassName="is-active">Add An Expense</NavLink>
            <button onClick={startLogout}>Logout</button>        
        </nav>    
    </header>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout()),
});

export default connect(undefined, mapDispatchToProps)(Header);