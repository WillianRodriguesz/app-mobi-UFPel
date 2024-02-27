"use client"
import './menu.css'
import { useState } from 'react';
import { IoHomeOutline, IoLocationOutline, } from "react-icons/io5";
import { TbRoute } from "react-icons/tb";

export default function Menu() {
  const [showRoutesMenu, setShowRoutesMenu] = useState(false);

  const handleRoutesClick = () => {
    setShowRoutesMenu(!showRoutesMenu);
  };

  return (
    <ul className='Menu'>
      <li className='MenuItem'>
        <IoHomeOutline />
        <p>INÍCIO</p>
      </li>
      <li className='MenuItem'>
        <IoLocationOutline />
        <p>LOCALIZAÇÃO</p>
      </li>
      <li className='MenuItem' onClick={handleRoutesClick}>
        <TbRoute />
        <p>ROTAS</p>
        {showRoutesMenu && (
        <div className="RoutesMenu">
          <p>rota 1</p>
          <p>rota 2</p>
          <p>rota 3</p>
        </div>
      )}
      </li>
    </ul>
  );
}

