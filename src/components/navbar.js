import React, { useState } from 'react';
import logo from "../img/logo.jpg";
import "../style/navbar.css";
import { Link } from 'react-scroll';

function Navbar() {
    const [activeItem, setActiveItem] = useState(""); 

    const handleItemClick = (item) => {
        setActiveItem(item);
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
                        <Link
                            className='nav-link'
                            activeClass="active"
                            to="home"
                            spy={true}
                            smooth={true}
                            duration={100}
                            onClick={() => handleItemClick('home')}
                        >
                            Home
                        </Link>
                        </li>
                        <li className="nav-item">
                        <Link
                            className='nav-link'
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            duration={100}
                            onClick={() => handleItemClick('about')}
                        >
                            About Me
                        </Link>

                        </li>
                        <li className="nav-item" >
                            <Link
                                className='nav-link'
                                activeClass="active"
                                to="skills"
                                spy={true}
                                smooth={true}
                                duration={100}
                                onClick={() => handleItemClick('skills')}
                            >
                                Skills
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className='nav-link'
                                activeClass="active"
                                to="education"
                                spy={true}
                                smooth={true}
                                duration={100}
                                onClick={() => handleItemClick('education')}
                            >
                                Education
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className='nav-link'
                                activeClass="active"
                                to="projects"
                                spy={true}
                                smooth={true}
                                duration={100}
                                onClick={() => handleItemClick('projects')}
                            >
                                Projects
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className='nav-link'
                                activeClass="active"
                                to="experience"
                                spy={true}
                                smooth={true}
                                duration={100}
                                onClick={() => handleItemClick('experience')}
                            >
                                Experience
                            </Link>
                        </li>
                        <li className="nav-item" >
                            <Link
                                className='nav-link'
                                activeClass="active"
                                to="contact"
                                spy={true}
                                smooth={true}
                                duration={100}
                                onClick={() => handleItemClick('contact')}
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
