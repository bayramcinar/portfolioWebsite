import React from 'react'
import info from "../img/experience.png"
import kardelen from "../img/kardelem.png"
import ExperienceBox from './experienceBox'
import free from "../img/free.jpeg"
import "../style/experience.css"

function Experience() {
  return (
    <div id='experience'>
      <div className='infoArea' style={{margin:"30px"}}>
          <img className='info' src={info}></img>    
          <h2 className='infoText'>Experience</h2>  
      </div>
      <div style={{alignItems:"center",justifyContent:"center",display:"flex"}}>
        <div className='experienceList' style={{alignItems:"center",justifyContent:"center"}}>
          <ExperienceBox name={"Kardelen Yazılım"} img={kardelen} date={"01.07.2023 - 01.08.2023"} explain={"I was intern at Kardelen Software. I made a human resources app for their company by using React, NodeJS and MySQL. "}/>
          <ExperienceBox name={"Freelance"} img={free} date={"01.01.2023 - Present"} explain={"I have been working freelance. I create website by using several technologies. I am using BIONLUK, FIVER, UPWORK."}/>
        </div>
      </div>
    </div>
  )
}

export default Experience
