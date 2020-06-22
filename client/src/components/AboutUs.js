import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <>
      <div className="aboutUs" style={aboutUs}>
        <div data-aos="fade-right">
          <div className="aboutText rounded-lg" style={aboutText}>
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
        </div>
        <div style={{ textAlign: 'right' }}>
          <div data-aos="fade-left">
            <img src="./aboutPic.png" alt="" className="aboutPic" style={aboutPic} />
          </div>
        </div>
      </div>
      <div className="d-flex flex-row flex-wrap justify-content-end align-items-center" style={stripeContainer}>
        <div id="aboutStripe"></div>
      </div>
      <div className="" style={bgContainer}></div>
    </>
  )
};

const aboutUs = {
	height:'91vh'
};

const aboutPic = {
  // borderRadius: '50rem 0rem 0rem 50rem',
};

const aboutText = {
  width: '55vh',
  // margin: '0rem 6rem 0rem 2rem',
	backgroundColor: 'rgba(255,255,255,0.8)',
};

const aboutH1 = {
  color: '#004E9E',
  fontWeight: '400',
};

const aboutP1 = {
  color: '#888',
  letterSpacing: '0.05rem',
};

const stripeContainer = {
  height: '91vh',
  position: 'absolute',
  top: '100vh',
  right: '0',
  zIndex: '-2',
}

const bgContainer = {
  width: '100%',
  height: '91vh',
  position: 'absolute',
  top: '100vh',
  zIndex: '-3',
  backgroundImage: 'url(./aboutBg.png)',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'left bottom',
}

export default AboutUs;