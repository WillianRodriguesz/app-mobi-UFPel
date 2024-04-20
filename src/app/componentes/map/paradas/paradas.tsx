import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

interface ParadaProps {
  position: [number, number];
  popupContent: string;
}

const Parada: React.FC<ParadaProps> = ({ position, popupContent }) => {
  const paradaIcon = L.icon({
    iconUrl: 'bustop.png',
    shadowUrl: 'leaf-shadow.png',
    iconSize: [30, 50],
    iconAnchor: [20, 50],
    popupAnchor: [-5, -40],
  });

  return (
    <Marker position={position} icon={paradaIcon}>
      <Popup>{popupContent}</Popup>
    </Marker>
  );
};

export default Parada;

export const CoordenadasParadas: ParadaProps[] = [
  { position: [-31.779801135261415, -52.3394397634887], popupContent: "Parada 1" },
  { position: [-31.77585247168381, -52.33925125438824], popupContent: "FAUrb" },
  { position: [-31.781001726274724, -52.33562450606109], popupContent: "Cotada - CENG" }
];
