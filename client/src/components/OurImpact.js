import React , { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './OurImpact.css';
import Infograph from './Infograph.js'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const OurImpact = () => {
  // eslint-disable-next-line
  // const [graphs, setGraphs] = useState([
  //   { id: 1, filename: 'Rekata-03.jpg' },
  //   { id: 2, filename: 'StratX-02.jpg' },
  //   { id: 3, filename: 'StratX_Larisin-01.jpg' },
  //   // { id: 4, filename: 'banner.jpg' },
  //   // { id: 5, filename: 'banner.jpg' },
  // ]);
  const [graphs, setGraphs] = useState([]);
  const impactReducer = useSelector(state => state.dataReducer.impact);
  useEffect(() => {
    if (impactReducer) setGraphs(impactReducer);
  }, [impactReducer]);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 480, min: 0 },
      items: 1
    }
  };
	return (
    <>
      <div className="ourImpact d-flex flex-column justify-content-center" style={ourImpact}>
        <div data-aos="fade-right">
          <div className="impactText d-flex flex-column justify-content-start align-items-start" style={impactText}>
            <h1 className="impactH1 text-left mb-4" style={impactH1}>Our Impact</h1>
            {/* eslint-disable-next-line */}
            <p className="impactP1 text-left mb-2" style={impactP1}>Our ventures to build a better Indonesia. Soon, with you too! 🌟</p>
          </div>  
        </div>
        <div data-aos="zoom-in">
          <Carousel responsive={responsive} infinite={ true } centerMode>
            {
              graphs.map(graph => {
                return <Infograph key={graph.id} graph={graph} />
              })
            }
          </Carousel>
        </div>
        <div data-aos="fade-right" data-aos-duration="3000" className="" style={bgContainer}></div>
      </div>
    </>
	);
};

const ourImpact = {
  height:'91vh',
	overflow: 'hidden',
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
