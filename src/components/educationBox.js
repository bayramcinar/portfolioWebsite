import React from 'react'
import "../style/educationBox.css"

function EducationBox({img,name,date}) {
  return (
    <div>
      <div className="card mb-3" style={{maxWidth: "980px"}}>
        <div className="row g-0">
            <div className="col-md-4">
            <img src={img} className="img-fluid rounded-start" />
            </div>
            <div className="col-md-8">
            <div className="card-body">
                <h5 className="card-title" style={{fontSize:"30px", fontWeight:"700",color:"#053B50"}}>{name}</h5>
                <p className="card-text" style={{fontSize:"20px", fontWeight:"700",color:"rgb(248, 111, 3)"}}>{date}</p>
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default EducationBox
