import React from 'react'
import info from "../img/skills.png"
import bg4 from "../img/bg4.gif"
import SkillIcon from './skillIcon'
import "../style/skills.css"

function Skills() {
  return (
    <div id='skills'>
        <div className='infoArea' style={{marginBottom:"30px",marginTop:"30px"}}>
            <img className='info' src={info}></img>    
            <h2 className='infoText' style={{marginLeft:"20px"}}>Skills</h2>  
        </div>
        <div className='row skillsArea'>
            <div className='liste col-lg-6 col-sm-12 row' style={{alignItems:"center",justifyContent:"center"}}>
                <SkillIcon icon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"} name={"NodeJS"}/>
                <SkillIcon icon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"} name={"React"}/>
                <SkillIcon icon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"} name={"HTML"}/>
                <SkillIcon icon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"} name={"CSS"}/>
                <SkillIcon icon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg"} name={"Tailwind"}/>
                <SkillIcon icon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"} name={"Bootstrap"}/>
                <SkillIcon icon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"} name={"JavaScript"}/>
                <SkillIcon icon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg"} name={"Angular"}/>
                <SkillIcon icon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"} name={"Pyhton"}/>
                <SkillIcon icon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"} name={"Typescript"}/>
            </div>
            <img className='gif4 col-lg-6 col-sm-12' src={bg4}></img>
            
        </div>
    </div>
  )
}

export default Skills
