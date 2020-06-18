import React from 'react';
import './GrowWithKG.css';

const GrowWithKG = () => {
  return (
    <>
      <div className="growWithKG d-flex flex-row-reverse flex-wrap justify-content-end align-items-center" style={growWithKG}>
        <div className="growText px-2 rounded-lg" style={growText}>
          <h1 className="growH1 text-left mb-3" style={growH1}>
            <del>Work</del> Grow With KG
          </h1>
          <span className="d-flex flex-row flex-nowrap">
            <p style={{fontSize: '5rem', lineHeight: '3rem', letterSpacing: '0.75rem', fontStyle: 'italic', color: 'lightgrey'}}>
              "
            </p>
            <p className="growP1 text-left" style={growP1}>
              We have lots of chance to learn and turn my research ideas into reality, 
              and I learn a lot about how to put my academic experience into practice. 
              It is a great place to learn and share together. 
            </p>
          </span>
          <p className="growP2" style={growP2}>
            Cika Theresia, Product Executive Larisin
          </p>
        </div>
        <img src="./banner.jpg" alt="" className="growPic" style={growPic} />
      </div>
      <div className="d-flex flex-row flex-wrap justify-content-start align-items-center" style={stripeContainer}>
        <div id="growStripe"></div>
      </div>
    </>
  )
};

const growWithKG = {
	height:'91vh'
};

const growPic = {
  borderRadius: '0rem 50rem 50rem 0rem',
};

const growText = {
  width: '55vh',
  margin: '0rem 2rem 0rem 6rem',
	backgroundColor: 'white',
};

const growH1 = {
  color: '#004E9E',
  fontWeight: '400',
};

const growP1 = {
  color: '#888',
  letterSpacing: '0.1rem',
};

const growP2 = {
  color: '#666',
  letterSpacing: '0.1rem',
  fontWeight: 'bold',
  display: 'block',
  marginLeft: '2.2rem',
};

const stripeContainer = {
  height: '91vh',
  position: 'absolute',
  top: '282vh',
  left: '0',
  zIndex: '-1',
}

export default GrowWithKG;