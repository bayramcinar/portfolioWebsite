import React, { useState } from 'react';
import { Link } from 'react-scroll';
import "../style/footer.css"

function Footer() {
    const [activeItem, setActiveItem] = useState(""); 

    const handleItemClick = (item) => {
        setActiveItem(item);
    };
  return (
    <div className='footer'>
    <div className='row generalFooter'>
        <div className='thanks col-3'>
            <h6>Thank you for visiting my website</h6>
        </div>
        <div className='col-4' style={{display:"inline-grid"}}>
            <div className='footlinks' style={{display:"inline-grid"}}>
                <Link
                            className='nav-link'
                            activeClass="active"
                            to="home"
                            spy={true}
                            smooth={true}
                            duration={100}
                            onClick={() => handleItemClick('home')}
                        >
                            <i class="fas fa-chevron-circle-right"></i> Home
                </Link>
                <Link
                            className='nav-link'
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            duration={100}
                            onClick={() => handleItemClick('about')}
                        >
                            <i class="fas fa-chevron-circle-right"></i> About Me
                </Link>
                <Link
                            className='nav-link'
                            activeClass="active"
                            to="skills"
                            spy={true}
                            smooth={true}
                            duration={100}
                            onClick={() => handleItemClick('skills')}
                        >
                            <i class="fas fa-chevron-circle-right"></i> Skills
                </Link>
                <Link
                            className='nav-link'
                            activeClass="active"
                            to="education"
                            spy={true}
                            smooth={true}
                            duration={100}
                            onClick={() => handleItemClick('education')}
                        >
                            <i class="fas fa-chevron-circle-right"></i> Education
                </Link>
                <Link
                            className='nav-link'
                            activeClass="active"
                            to="projects"
                            spy={true}
                            smooth={true}
                            duration={100}
                            onClick={() => handleItemClick('projects')}
                        >
                            <i class="fas fa-chevron-circle-right"></i> Projects
                </Link>
                <Link
                            className='nav-link'
                            activeClass="active"
                            to="experience"
                            spy={true}
                            smooth={true}
                            duration={100}
                            onClick={() => handleItemClick('experience')}
                        >
                            <i class="fas fa-chevron-circle-right"></i> Experience
                </Link>
            </div>
        </div>
        <div className='col-5 footContact' style={{marginTop:"1%"}}>
            <h2>Contact</h2>
            <h5 className="footerMail"><i class="fas fa-envelope" style={{color:"#F86F03"}}></i> bayram200212@gmail.com</h5>
            <h5 className="footerAdress"><i class="fas fa-map-marked-alt" style={{color:"#F86F03"}}></i> Turkey / Mersin, Adana</h5>
        </div>
    </div>
    </div>
  )
}

export default Footer
