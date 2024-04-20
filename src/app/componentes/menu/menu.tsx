"use client"
import './menu.css'
import { useState } from 'react';
import { IoHomeOutline, IoLocationOutline, } from "react-icons/io5";
import { TbRoute } from "react-icons/tb";
import Link from 'next/link';

export default function Menu() {
  const [showRoutesMenu, setShowRoutesMenu] = useState(false);

  const handleRoutesClick = () => {
    setShowRoutesMenu(!showRoutesMenu);
  };

  return (
    <ul className='Menu'>
      <li className='MenuItem'>
        <IoHomeOutline />
        <Link href="/inicio"><p>INICIO</p></Link>
      </li>
      <li className='MenuItem'>
        <IoLocationOutline />
        <Link href="/"><p>LOCALIZACÃO</p></Link>
      </li>
      <li className='MenuItem' onClick={handleRoutesClick}>
        <TbRoute />
        <p>ROTAS</p>
        {showRoutesMenu && (
        <div className="RoutesMenu">
          <p>Anglo</p>
          <p>rota 2</p>
          <p>rota 3</p>
        </div>
      )}
      </li>
    </ul>
  );
}

