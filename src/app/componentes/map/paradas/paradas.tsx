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
  { position: [-31.779801135261415, -52.3394397634887], popupContent: "FAUrb" },
  { position: [-31.77585247168381, -52.33925125438824], popupContent: "Campus II" },
  { position: [-31.781001726274724, -52.33562450606109], popupContent: "Cotada - CENG" },
  { position: [-31.773641430567558, -52.343466843091555], popupContent: "Parada XV" },
  { position: [-31.77285888788418, -52.34837615733047], popupContent: "Casa do Estudante - CEU" },
  { position: [-31.772061515906117, -52.34015249228024], popupContent: "Odontologia" },
  { position: [-31.779574384529226, -52.340068818351504], popupContent: "Odontologia" },
  { position: [-31.773550515260986, -52.33634182545455], popupContent: "Agência da Lagoa Mirim - ALM" },
  { position: [-31.779574384529226, -52.340068818351504], popupContent: "Odontologia" },
  { position: [-31.777726885259025, -52.35062132916751], popupContent: "Eng. Madereira" },
  { position: [-31.769606746030735, -52.339493278627515], popupContent: "RU" }
  
];
