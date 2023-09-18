import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import "../style/footer.css"

function Footer() {
  return (
    <div className='footer'>
    <div className='row generalFooter'>
        <div className='thanks col-3'>
            <h6>Thank you for visiting my website</h6>
        </div>
        <div className='col-4' style={{display:"inline-grid"}}>
            <div className='footlinks' style={{display:"inline-grid"}}>
                <Link smooth className='footLink' to="#home"><i class="fas fa-chevron-circle-right"></i> Home</Link>
                <Link smooth className='footLink' to="#about"><i class="fas fa-chevron-circle-right"></i> About Me</Link>
                <Link smooth className='footLink' to="#skills"><i class="fas fa-chevron-circle-right"></i> Skills</Link>
                <Link smooth className='footLink' to="#education"><i class="fas fa-chevron-circle-right"></i> Education</Link>
                <Link smooth className='footLink' to="#experience"><i class="fas fa-chevron-circle-right"></i> Experience</Link>
            </div>
        </div>
        <div className='col-5 footContact' style={{marginTop:"1%"}}>
            <h2>Contact</h2>
            <h5><i class="fas fa-envelope" style={{color:"#F86F03"}}></i> bayram200212@gmail.com</h5>
            <h5><i class="fas fa-map-marked-alt" style={{color:"#F86F03"}}></i> Turkey / Mersin, Adana</h5>
        </div>
    </div>
    </div>
  )
}

export default Footer
