import React from 'react'

function Userinfo({info}) {
    return (
        <div className="Userinfo">
            <div className="Userinfo-ip">
                <h5>IP ADDRESS</h5>
                <p>{info.ip}</p>
            </div>
            <div className="Userinfo-location">
                <h5>LOCATION</h5>
                <p>{info.region_name}</p>
            </div>
            <div className="Userinfo-timezone">
                <h5>TIMEZONE</h5>
                <p>{info.time_zone}</p>
            </div>
            <div className="Userinfo-ısp">
                <h5>ISP</h5>
                <p>{info.asn_org ? info.asn_org : "No isp info"}</p>
            </div>
        </div>
    )
}

export default Userinfo
