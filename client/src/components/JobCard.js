import React from 'react';
import './JobCard.css';

const JobCard = (props) => {
  return (
    <a href="#">
      <div className="jobCard d-flex flex-row flex-wrap justify-content-start align-items-center" style={jobCard}>
        <img src="./Logo_Kompas_Gramedia_2.png" alt="" className="jobImg" style={jobImg} />
        <div className="jobDesc d-flex flex-column justify-content-center">
          <h6>{props.job.position + ' - ' + props.job.company}</h6>
          <p>{props.job.category}</p>
          <p><span><img src="./jobLocation.png" /> {props.job.city + ', ' + props.job.province}</span></p>
        </div>
      </div>
    </a>
  );
};

const jobCard = {
  // width: '100%',
  // backgroundColor: 'white',
  // boxShadow: '0rem 1rem 1rem 1rem rgba(128,128,128,0.1)',
  // borderRadius: '50rem'
};

const jobImg = {
};

export default JobCard;