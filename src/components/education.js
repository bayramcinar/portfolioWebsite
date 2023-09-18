import React from 'react'
import info from "../img/education.png"
import cu from "../img/cu.jpg"
import birey from "../img/birey.jpg"
import fen from "../img/fen.jpg"
import EducationBox from './educationBox'
import "../style/education.css"

function Education() {
  return (
    <div id='education'>
      <div className='infoArea' style={{margin:"30px"}}>
        <img className='info' src={info}></img>    
        <h2 className='infoText'>Education</h2>  
      </div>
      <div className='schoolList'>
        <div style={{justifyContent:"center",alignItems:"center",display:"flex",padding:"30px"}}>
            <EducationBox img={cu} name={"Cukurova University"} date={"2020-2025"} />
        </div>
        <div style={{justifyContent:"center",alignItems:"center",display:"flex",padding:"30px"}}>
            <EducationBox img={birey} name={"Mersin Birey Collage"} date={"2018-2020"} />
        </div>
        <div style={{justifyContent:"center",alignItems:"center",display:"flex",padding:"30px"}}>
            <EducationBox img={fen} name={"Erdemli Fen lisesi"} date={"2016-2018"} />
        </div>
      </div>
    </div>
  )
}

export default Education
