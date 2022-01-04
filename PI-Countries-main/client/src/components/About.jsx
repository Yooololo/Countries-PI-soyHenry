import React from 'react';
import { Link } from "react-router-dom";
import a from './About.module.css';

// buscar el about de la app del clima
export default function About() {
    return (
    <div className={a.about}>
      <div className={a.toito}>
      <div className={a.bkg} />
      <div className={a.container}>
     <Link to="/home" className={a.link}>
        <button className={a.boton}>Home</button>
      </Link>
    
    <p className={a.titulo}>This App was developed as an Individual Project for the Full-Stack Development Bootcamp by "SoyHenry"</p>
    <p className={a.titulo}>The source code is available on <a className={a.link} href="https://github.com/Yooololo/Countries-PI-soyHenry">https://github.com/Yooololo/Countries-PI-soyHenry</a></p>
    <p className={a.titulo}>Github: <a className={a.link} href="https://github.com/Yooololo">Yooololo</a></p>
    </div>
    </div>
    </div>
    )
}