import React from 'react';
import { Link } from 'react-router-dom';
import ContactBox from './contactBox';
import info from '../img/phone.png';
import ig from '../img/instagram.png';
import cv from '../img/cv.png';
import pdf from '../img/cv.pdf';
import { TextField } from '@mui/material';

function Contact() {
  return (
    <>
    <div id='contact' style={{marginBottom:"30px"}}>
      <div className='infoArea' style={{ margin: '30px' }}>
        <img className='info' src={info} alt="Info" />
        <h2 className='infoText'>Contact</h2>
      </div>
      <div className='row'>
        <div className='social col-lg-6 col-sm-12' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <ContactBox logo={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'} link={'https://github.com/bayramcinar'} />
          <ContactBox logo={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg'} link={'https://www.linkedin.com/in/bayram-%C3%A7%C4%B1nar-275191251/'} />
          <ContactBox logo={ig} link={'https://www.instagram.com/bayrammcinar/'} />
          <ContactBox logo={cv} link={pdf} />
          <ContactBox logo={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg'} link={'https://twitter.com/Bayramcinar33'} />
        </div>
        <div className='social col-lg-6 col-sm-12' style={{ display: 'flex', alignItems: 'start', justifyContent: 'start' }}>
          <form action="https://formspree.io/f/mlekybpq" method="POST">
            <label className="backLabel" htmlFor="fname">Name :</label>
            <input className="form-control" type="text" id="fname" name="fname" style={{ width: '400px' }} />
            <br />
            <label className="backLabel" htmlFor="lname">Surname :</label>
            <br />
            <input className="form-control" type="text" id="lname" name="lname" style={{ width: '400px' }} />
            <br />
            <label className="backLabel" htmlFor="email">E-mail :</label>
            <br />
            <input className="form-control" type="email" id="email" name="email" style={{ width: '400px' }} />
            <br />
            <label className="backLabel" htmlFor="content">Subject :</label>
            <br />
            <input className="form-control" type="text" id="content" name="content" style={{ width: '400px' }} />
            <br />
            <label className="backLabel" htmlFor="message">Message :</label>
            <br />
            <textarea className="form-control" id="message" name="message" rows="4" cols="50" style={{ width: '400px' }} />
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
              <button className="btn" style={{color:"#fff"}}>Send</button>
            </div>
          </form>
        </div>
      </div>
      </div>
    </>
  );
}

export default Contact;
