'use client'
import React, { Component } from 'react';
import { MapContainer, TileLayer, Polyline } from 'react-leaflet';
import './mapa.css';
import CoordenadasRotas from './coordenadas/rotas';
import Parada, { CoordenadasParadas } from './paradas/paradas';


class Map extends Component {
  state = {
    center: [-31.78122080057653, -52.323709218977434],
    zoom: 16,
  };

  render() {
    return (
      <div className='Mapa'>
          <MapContainer center={[this.state.center[0], this.state.center[1]]} zoom={this.state.zoom}>          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
          />
          <Polyline positions={CoordenadasRotas.anglo.map(coord => [coord[0], coord[1]])} color="#068efd" weight={5} opacity={0.6} />

          {CoordenadasParadas.map((parada, index) => (
            <Parada key={index} position={parada.position} popupContent={parada.popupContent} />
          ))}

        </MapContainer>
      </div>
    );
  }
}

export default Map;
