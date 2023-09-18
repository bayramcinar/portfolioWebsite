import React,{useEffect}from 'react'
import "../style/skillIcon.css"
import "aos/dist/aos.css"
import AOS from 'aos'

function SkillIcon({icon,name}) {
  useEffect(()=>{
    AOS.init({duration: 2000})
  },[])

  return (
    <div data-aos="zoom-in" className='box' style={{width:"140px",height:"140px",background: "linear-gradient(to bottom, #57059e, #4a00e0)",marginRight:"20px",borderRadius:"10px"}}>
        <img src={icon} style={{padding:"15px",width:"100px",marginLeft:"8%"}}></img>
        <h3 style={{display:"flex",justifyContent:"center",alignItems:"center",fontSize:"20px",color:"#fff",fontWeight:"700"}}>{name}</h3>
    </div>
  )
}

export default SkillIcon
