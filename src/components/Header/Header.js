import React from 'react';
import Input from './input';
import Userinfo from '../Userinfo';

function Header() {
    return (
        <>
            <header className="Header">
                <h1 className="Header-title">IP Address Tracker</h1>
                <Input />
                <Userinfo />
            </header>
        </>
    )
}

export default Header
