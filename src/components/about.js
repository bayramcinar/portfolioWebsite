import React,{useEffect} from 'react'
import info from "../img/info.png"
import "../style/about.css"
import gif3 from "../img/bg3.gif"
import "aos/dist/aos.css"
import AOS from 'aos'



function About() {

useEffect(()=>{
    AOS.init({duration: 2500})
  },[])

  return (
    <div id='about'>
      <div className='infoArea'>
        <img className='info' src={info}></img>    
        <h2 className='infoText'>About Me</h2>  
      </div>
      <div className='aboutDiv row'>
        <img className='gif2 col-lg-6 col-sm-12' src={gif3}></img>
        <div className='aboutmeArea col-lg-6 col-sm-12'>
            <h3 data-aos="fade-down" className='aboutmeTitle'>Bayram Çınar</h3>
            <h4 data-aos="fade-down" className='aboutmeJob'>Junior Software Developer</h4>
            <p data-aos="fade-down" className='aboutmeText'>I am studying Computer Engineering at Cukurova University (3rd
            grade). I am 22 years old. I am a junior full stack web developer.
            I know HTML, CSS, JavaScript, ReactJs, NodeJS, Pyhton and
            Typescript. I am currently learing Angular and .Net Core.
            </p>
            <h6 data-aos="fade-down">
            🥷I'm currently working on Web Developing
            </h6>
            <h6 data-aos="fade-down">
            💥I'm learning Angular and .NET Core
            </h6>
            <h6 data-aos="fade-down">
            ⚡Ask me about Web Developing
            </h6>
            <h6 data-aos="fade-down">
            📩E-mail: bayram200212@gmail.com
            </h6>
        </div>
      </div>
    </div>
  )
}

export default About
