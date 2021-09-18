import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const NavBar = () => {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked);
    };

    return (
        <nav className="navbar">
            <Link to="/" className="title">
                Spacestagram
            </Link>
            {!clicked ? 
            <Link to='/apod'>
                <button className='btn-link' onClick={handleClick}>APOD</button>
            </Link>
            :
            <Link to='/'>
                <button className='btn-link' onClick={handleClick}>Rover Images</button>
            </Link>}
        </nav>
    )
};

export default NavBar;