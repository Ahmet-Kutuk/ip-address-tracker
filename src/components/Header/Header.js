import React from 'react';
import Input from './input';

function Header() {
    return (
        <>
            <header className="Header">
                <h1 className="Header-title">IP Address Tracker</h1>
                <Input />
            </header>
        </>
    )
}

export default Header
