import React, { useState } from 'react';
import logo from "../img/logo.jpg";
import "../style/navbar.css";
import { HashLink as Link } from 'react-router-hash-link';

function Navbar() {
    const [activeItem, setActiveItem] = useState(""); // State kullanarak aktif öğeyi sakla

    const handleItemClick = (item) => {
        setActiveItem(item); // Tıklanan öğeyi state'e ayarla
    };

    return (
        <nav className="navbar bg-body-tertiary navbar-expand-lg ">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src={logo} alt="Logo" width="50" height="50" className="d-inline-block align-text-top imgLogo" />
                    <span style={{alignItems:"center",justifyContent:"center", fontSize:"25px",fontWeight:"700"}} className='name'>Bayram Çınar</span>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#bar" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="bar">
                    <ul className="navbar-nav">
                        <li className="nav-item" >
                            <Link smooth className={`nav-link ${activeItem === 'home' ? 'active' : ''}`} onClick={() => handleItemClick('home')} to="#home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth className={`nav-link ${activeItem === 'about' ? 'active' : ''}`} onClick={() => handleItemClick('about')} to="#about">About Me</Link>
                        </li>
                        <li className="nav-item" >
                            <Link smooth className={`nav-link ${activeItem === 'skills' ? 'active' : ''}`} onClick={() => handleItemClick('skills')} to="#skills">Skills</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth className={`nav-link ${activeItem === 'education' ? 'active' : ''}`} onClick={() => handleItemClick('education')} to="#education">Education</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth className={`nav-link ${activeItem === 'projects' ? 'active' : ''}`} onClick={() => handleItemClick('projects')} to="#projects">Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth className={`nav-link ${activeItem === 'experience' ? 'active' : ''}`} onClick={() => handleItemClick('experience')} to="#experience">Experience</Link>
                        </li>
                        <li className="nav-item" >
                            <Link smooth className={`nav-link ${activeItem === 'contact' ? 'active' : ''}`} onClick={() => handleItemClick('contact')} to="#contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
