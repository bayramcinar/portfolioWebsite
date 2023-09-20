import React from 'react'
import "../style/home.css"
import gif from "../img/bg.gif"
import me from "../img/me.jpeg"
import { TypeAnimation } from 'react-type-animation';

function Home() {
  return (
    <div className='generalDiv row' id='home'>
      <div className='homeText col-lg-6 col-sm-12'>
        <div className='row'>
          <div className='col-lg-5 col-sm-12'>
            <img src={me} className='mePhoto animate__animated animate__zoomIn'></img>
          </div>
          <div className='col-lg-6 col-sm-12'>
            <h1 className='helloText'>Hello,</h1>
            <h2 className='meText'>I am Bayram Çınar</h2>
            <TypeAnimation
              className='typingText'
              sequence={[
                'Junior',
                2000, 
                'Junior Frontend Developer', 
                2000, 
                'Junior Backend Developer', 
                2000, 
                'Junior Full Stack Developer', 
                2000,
                () => {
                },
              ]}
              wrapper="span"
              cursor={true}
              className="silinen"
              repeat={Infinity}
              style={{ fontSize: '25px', display: 'inline-block',color:"#F86F03",fontWeight:"700" }}
            />
          </div>
        </div>  
      </div>
      <img className='gif col-lg-6 col-sm-12' src={gif}></img>
    </div>
  )
}

export default Home
