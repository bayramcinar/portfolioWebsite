import React,{useEffect}from 'react'
import "aos/dist/aos.css"
import AOS from 'aos'

function ExperienceBox({img,name,date,explain}) {
  useEffect(()=>{
    AOS.init({duration: 1000})
  },[])

  return (
    <div data-aos="zoom-in" >
      <div class="card mb-3" style={{maxWidth: "840px"}}>
        <div class="row g-0">
            <div class="col-md-4">
            <img src={img} class="img-fluid rounded-start" style={{justifyContent:"center"}} />
            </div>
            <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">{name}</h5>
                <p class="card-text">{explain}</p>
                <p class="card-text"><small class="text-body-secondary">{date}</small></p>
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default ExperienceBox
