import React , { useState } from 'react';
import './OurImpact.css';
import Infograph from './Infograph.js'

const OurImpact = () => {
  // eslint-disable-next-line
  const [graphs, setGraphs] = useState([
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
  ]);
	return (
		<div className="ourImpact d-flex flex-column justify-content-center align-items-start" style={ourImpact}>
			<div className="impactText d-flex flex-column justify-content-start align-items-start" style={impactText}>
				<h1 className="impactH1 text-left mb-4" style={impactH1}>Our Impact</h1>
				{/* eslint-disable-next-line */}
				<p className="impactP1 text-left mb-2" style={impactP1}>Our ventures to build a better Indonesia. Soon, with you too! 🌟</p>
			</div>
			<div className="slider d-flex flex-row flex-nowrap justify-content-start align-items-center" style={{width: '100%', height: '50%'}}>
          {
            graphs.map(graph => {
              return <Infograph key={graph.id} graph={graph} />
            })
          }
          <div style={{height: '100%', width: '1px', paddingLeft: '2rem'}}></div>
			</div>
      <div className="" style={bgContainer}></div>
    </div>
	);
};

const ourImpact = {
	height:'91vh',
};

const impactText = {
};

const impactH1 = {
  color: '#004E9E',
  fontWeight: '400',
};

const impactP1 = {
  color: '#888',
  letterSpacing: '0.05rem',
};

const bgContainer = {
  width: '100%',
  height: '91vh',
  position: 'absolute',
  top: '191vh',
  zIndex: '-3',
  backgroundImage: 'url(./impactBg.png)',
  backgroundSize: '110% 50%',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'right 70%',
}

export default OurImpact;
