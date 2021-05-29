import React from 'react'

function Input() {
   
    return (
        <div className="Input">
            <input className="Input-text" type="text" placeholder="Search for any IP address" />
            <button className="Input-button">
            <i className="fas fa-chevron-right"></i>
            </button>
        </div>
    )
}

export default Input;
