import React from 'react'

function Userinfo() {
    return (
        <div className="Userinfo">
            <div className="Userinfo-ip">
                <h5>IP ADDRESS</h5>
                <p>193.207.174.142</p>
            </div>
            <div className="Userinfo-location">
                <h5>LOCATION</h5>
                <p>ANTALYA,TURKEY</p>
            </div>
            <div className="Userinfo-timezone">
                <h5>TIMEZONE</h5>
                <p>UTC-05:00</p>
            </div>
            <div className="Userinfo-ısp">
                <h5>ISP</h5>
                <p>VodofoneNet</p>
            </div>
        </div>
    )
}

export default Userinfo
