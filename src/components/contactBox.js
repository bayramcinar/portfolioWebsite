import React from 'react'
import { Link } from 'react-router-dom'
import "../style/contactBox.css"

function ContactBox({logo,link}) {
  return (
    <div className='contactDiv'>
        <Link target='_blank' to={link}><img src={logo} className='contactLogo' /></Link>
    </div>
  )
}

export default ContactBox
