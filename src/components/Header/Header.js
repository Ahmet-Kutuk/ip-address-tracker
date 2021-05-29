import React,{useState,useEffect} from 'react';
import Input from './input';
import Userinfo from '../Userinfo';
import {getIp} from '../Api';


function Header({chang}) {
    const [info,setInfo] = useState([]);
    const [value,setValue] = useState("");
    useEffect(() => {
        const data = getIp(value);
  data.then(result => {
    setInfo(result);
  })
    },[value])

    const changeValue= (text) => {
            setValue(text);
    }
    console.log(value);
    return (
        <>
            <header className="Header">
                <h1 className="Header-title">IP Address Tracker</h1>
                <Input chang={chang} value={changeValue} />
                <Userinfo info={info} />
            </header>
        </>
    )
}

export default Header
