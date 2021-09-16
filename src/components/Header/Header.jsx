import React from 'react';
import './Header.css'

const Header = ({ setSearchDate }) => {
    const onChange = e => {
        setSearchDate(e.target.value)
    }

    return (
        <div className="header">
            <h1 className="header-title">Welcome to Spacestagram</h1>
            <h2 className="header-subtitle">Brought to you by NASA's image API</h2>
            <h3 className="search-title">See images below or filter by date:</h3>
            <form onChange={onChange} method="get" className="search-form">
                <input
                type="date"
                />
            </form>
        </div>
    )
};

export default Header;