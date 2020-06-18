import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <>
      <div className="aboutUs d-flex flex-row flex-wrap justify-content-end align-items-center" style={aboutUs}>
        <div className="aboutText px-2 rounded-lg" style={aboutText}>
          <h1 className="aboutH1 text-right mb-1" style={aboutH1}>
            Who We Are
          </h1>
          <p className="aboutP1 text-right m-0" style={aboutP1}>
            Kompas Gramedia (KG) is the biggest media conglomerate in Indonesia. We aim to be&nbsp;
            <span style={{textDecoration: 'underline'}}>
              the biggest, best, integrated and spread in South East Asia through knowledge base industry to create
              well educated society, enlighten and respect to cultural differences and social welfare.
            </span>
          </p>
        </div>
        <img src="./banner.jpg" alt="" className="aboutPic" style={aboutPic} />
      </div>
      <div className="d-flex flex-row flex-wrap justify-content-end align-items-center" style={stripeContainer}>
        <div id="aboutStripe"></div>
      </div>
    </>
  )
};

const aboutUs = {
	height:'91vh'
};

const aboutPic = {
  borderRadius: '50rem 0rem 0rem 50rem',
};

const aboutText = {
  width: '55vh',
  margin: '0rem 6rem 0rem 2rem',
	backgroundColor: 'white',
};

const aboutH1 = {
  color: '#004E9E',
  fontWeight: '400',
};

const aboutP1 = {
  color: '#888',
  letterSpacing: '0.1rem',
};

const stripeContainer = {
  height: '91vh',
  position: 'absolute',
  top: '100vh',
  right: '0',
  zIndex: '-1',
}

export default AboutUs;