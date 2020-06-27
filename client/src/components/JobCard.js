import React from 'react';
import { clickGA } from '../helpers/clickGA';
import './JobCard.css';

const JobCard = (props) => {

  const clickKalibrr = (individualLink) => {
    clickGA('Link (External)', 'Go to Kalibrr link');
    clickGA('Link (External)', individualLink);
  };

  return (
    // eslint-disable-next-line
    <a
      data-aos="fade-up"
      href={props.job.link}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => clickKalibrr(props.job.link)}>
      <div className="jobCard d-flex flex-row flex-wrap justify-content-start align-items-center" style={jobCard}>
        <img src={props.job.picture} alt="" className="jobImg" style={jobImg} />
        <div className="jobDesc d-flex flex-column justify-content-center">
          <h6>{props.job.title}</h6>
          <p>{props.job.category}</p>
          <p><span><img src="./jobLocation.png" alt="" /> {props.job.location}</span></p>
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