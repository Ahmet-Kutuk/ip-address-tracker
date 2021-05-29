import React,{useState,useEffect} from 'react';
import Input from './input';
import Userinfo from '../Userinfo';
import {getIp} from '../Api';


function Header() {
    const [info,setInfo] = useState([]);

    useEffect(() => {
        const data = getIp();
  data.then(result => {
    setInfo(result);
  })
    },[])
    return (
        <>
            <header className="Header">
                <h1 className="Header-title">IP Address Tracker</h1>
                <Input />
                <Userinfo info={info} />
            </header>
        </>
    )
}

export default Header
