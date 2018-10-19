import React from 'react';
import { Link } from 'react-router-dom';

import '../scss/components/header.scss';

const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <span className="navbar-brand">Translate services</span>

                <div className="collapse navbar-collapse" id="navbarsExample02">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to='/login'>Login</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header;
