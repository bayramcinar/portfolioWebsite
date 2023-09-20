import React,{useEffect}from 'react'
import { Link } from 'react-router-dom'
import "../style/contactBox.css"
import "aos/dist/aos.css"
import AOS from 'aos'

function ContactBox({logo,link,name}) {
  useEffect(()=>{
    AOS.init({duration: 1000})
  },[])
  return (
    <div className='contactDiv' data-aos="zoom-in">
      <div className='contactInside'>
        <Link target='_blank' to={link}><img src={logo} className='contactLogo' /></Link>
        <h4 className='boxName'>{name}</h4>
      </div>
    </div>
  )
}

export default ContactBox
