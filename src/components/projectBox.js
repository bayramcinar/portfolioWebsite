import React from 'react'
import "../style/projectBox.css"
import { Link } from 'react-router-dom'

function ProjectBox({img,name,explain,link,github}) {
  return (
    <div>
       <div className='projectBox' >
            <img src={img} className='projectImg'></img>
            <h5 style={{display:"flex",alignItems:"center",justifyContent:"center",marginTop:"10px"}}>{name}</h5>
            <p className="scrollable-text" style={{display:"flex",alignItems:"center",justifyContent:"center",marginTop:"10px",maxHeight:"100px",overflow:"scroll",maxWidth:"250px"}}>{explain}</p>
            <div className='links'>
                <Link target='_blank' className='btn btn-primary view' style={{color:"#fff",fontWeight:"600"}} to={link}>
                <i style={{marginRight:"5px"}} class="fa-regular fa-eye"></i>
                 View</Link>
                <Link target='_blank' className='btn btn-warning' style={{color:"#fff",fontWeight:"600"}} to={github}><i class="devicon-github-original"></i> Github</Link>
            </div>
       </div>
    </div>
  )
}

export default ProjectBox
