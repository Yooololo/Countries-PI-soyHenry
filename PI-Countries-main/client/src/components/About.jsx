import React from 'react';
import { Link } from "react-router-dom";
import a from './About.module.css';

// buscar el about de la app del clima
export default function About() {
    return (
    <div className={a.about}>
     <Link to="/home">
        <button>Home</button>
      </Link>
    <h1>Yooololo</h1>
    <p>This App was developed as a Personal Project for the Full-Stack Development Bootcamp by "SoyHenry"</p>
    </div>
    )
}