'use client'
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import './mapa.css';
import L from 'leaflet'

var parada = L.icon({
  iconUrl: 'bustop.png',
  shadowUrl: 'leaf-shadow.png',
  iconSize:     [30, 50], 
  iconAnchor:   [20, 50], 
  popupAnchor:  [-5, -40] 
});

var bus = L.icon({
  iconUrl: 'bus.png',
  shadowUrl: 'leaf-shadow.png',
  iconSize:     [40, 40], 
  iconAnchor:   [20, 50], 
  popupAnchor:  [6, -40] 
});
class Map extends Component {
  state = {
    center: [51.505, -0.091],
    zoom: 13,
  };
  render() {
    return (
      <div className='Mapa'>
        <MapContainer center={[-31.78122080057653, -52.323709218977434]} zoom={16}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
          />
          <Marker position={[-31.779801135261415, -52.3394397634887]} icon={parada}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
          <Marker position={[-31.77585247168381, -52.33925125438824]} icon={parada}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
          <Marker position={[-31.781001726274724, -52.33562450606109]} icon={parada}>
            <Popup>
              PARADA COTADA
            </Popup>
          </Marker>
          <Marker position={[-31.78122080057653, -52.323709218977434]} icon={bus}></Marker>
        </MapContainer>
      </div>
    );
  }
  
}
export default Map
const rootElement = document.getElementById('root');

