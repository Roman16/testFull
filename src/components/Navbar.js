import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import '../scss/components/navbar.scss'

class Navbar extends Component{
    render() {
        return (
            <nav className="nav navbar-left navbar-dark bg-dark flex-column">
                <NavLink
                    activeClassName='active-item-menu'
                    className='nav-link'
                    to='/home'>
                    Home
                </NavLink>

                <NavLink
                    activeClassName='active-item-menu'
                    className='nav-link'
                    to='/users'>
                    Users
                </NavLink>
            </nav>
        )
    }
}

export default Navbar;
