import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const NavBar = () => {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked)
    }

    return (
        <nav className="navbar">
            <Link to="/" className="title">
                Spacestagram
            </Link>
            {!clicked ? 
            <Link to='/favorite-photos'>
                <button className='btn-link' onClick={handleClick}>Favorite Photos</button>
            </Link>
            :
            <Link to='/'>
                <button className='btn-link' onClick={handleClick}>All Photos</button>
            </Link>}
        </nav>
    )
};

export default NavBar;