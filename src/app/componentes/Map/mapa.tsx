'use client'
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import './mapa.css';

class Map extends Component {
  state = {
    center: [51.505, -0.091],
    zoom: 13,
  };

  render() {
    return (
      <div className='Mapa'>
        <MapContainer center={[-31.745225381712174, -52.30837163354698]} zoom={15}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
          />
          <Marker position={[-31.745225381712174, -52.30837163354698]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    );
  }
}
export default Map
const rootElement = document.getElementById('root');

