import React,{useState,useEffect} from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import {getIp} from '../Api';

function Usermap({value}) {
  const [map,setMap] = useState([0,0,0]);
  const [key,setKey] = useState();

  useEffect(() => {
    const data = getIp(value);
  data.then(result => {
    setMap([result.lat,result.lon]);
  })
  },[value])
  
let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});
useEffect(() => {
  setKey(Math.random()*100);
}, [map])

L.Marker.prototype.options.icon = DefaultIcon;
    return map.length<3 ?(
        <MapContainer key={key} style={{height:"700px",zIndex:"-1"}} center={map} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={map}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer> 
     
    ):null

}

export default Usermap;
