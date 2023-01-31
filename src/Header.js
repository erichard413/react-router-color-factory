import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="Header">
            <h1>Welcome to the color factory.</h1>
            <p>
                <Link to="/colors/new">Add a color</Link>
            </p>
        </div>
    )
}

export default Header;