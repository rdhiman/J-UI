import React, { Component } from 'react';
import './Navbar.scss';

import JoanyLogo from '../../assets/joany-logo.png';

class Navbar extends Component {
    render() {
        return (
            <div className="navbar-container">
                <nav>
                    <div className="logo-container">
                        <img className="joany-logo" src={JoanyLogo} alt="Joany logo" />
                    </div>
                    <ul className="menu-links">
                        <li>
                            <a href="tel:323-384-7705">
                                323-384-7705
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                Log Out
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Navbar;
