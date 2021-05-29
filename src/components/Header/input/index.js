import React,{useState} from 'react'

export default function Input({value,chang}) {
   const [text,setText] = useState("");
    return (
     
        <div className="Input">
            <input className="Input-text" onChange={e => setText(e.target.value)} type="text" placeholder="Search for any IP address" />
            <button style={{zIndex:"1",cursor:"pointer"}} type="button" onClick={() => {value(text); chang(text)}} className="Input-button">
            <i className="fas fa-chevron-right"></i>
            </button>
        </div>
    )
}
