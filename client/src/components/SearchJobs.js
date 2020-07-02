import React, { useState, useEffect } from 'react';
import JobCard from './JobCard';
import './SearchJobs.css';
import axios from 'axios';

const SearchJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const getJobs = async () => {
    const count = await axios.get('https://www.kalibrr.id/api/companies/kompas-gramedia/jobs?offset=0&limit=0')
    if (!count) return false;
    const vacancies = await axios.get('https://www.kalibrr.id/api/companies/kompas-gramedia/jobs?offset=0&limit=' + count.data.total_count)
    if (!vacancies) return false;
    vacancies.data.jobs.forEach(vacancy => {
      setJobs(allJobs => [
        ...allJobs,
        {
          id: vacancy.id,
          title: vacancy.name,
          category: vacancy.function,
          location: `${vacancy.google_location.address_components.city}, ${vacancy.google_location.address_components.region}`,
          picture: vacancy.company_info.logo,
          link: `https://www.kalibrr.com/c/${vacancy.company_info.code}/jobs/${vacancy.id}/${vacancy.slug}`
        }
      ])
    });
    setLoading(false);
  };

  const handleReload = () => {
    setLoading(true);
    getJobs();
  };

  const handleFilter = () => {
    
  };

  useEffect(() => {
    getJobs();
  },[]);

  return (
    <div id="searchJobs" className="searchJobs d-flex flex-column justify-content-start align-items-center" style={searchJobs}>
      {
        // eslint-disable-next-line
        loading && !jobs.length && (
          <div className="jobsLoadingText">
            <h4>Loading... Please wait...</h4>
            <div className="spinner-border" style={{width: '3rem', height: '3rem', color: '#009CDC', margin: '1rem'}} role="status">
              <span className="sr-only">Loading...</span>
            </div>
            <h6>Click <a href="#searchJobs" onClick={() => handleReload()}>here</a> to try again if it takes too long.</h6>
          </div>
          // eslint-disable-next-line
        ) || (
          <>
            <input type="search" placeholder="Filter by Keyword" className="filterBox text-dark text-center p-1" style={filterBox} />
            {jobs.map(job => {
              return <JobCard key={job.id} job={job} />
            })}
          </>
        )
      }
    </div>
  );
};

const searchJobs = {
  minHeight: '91vh',
  backgroundImage: 'url(./searchJobs.png)',
  backgroundSize: 'auto',
  backgroundPosition: 'center top',
  // padding: '10vh 20vw'
};

const filterBox = {
	border: '0px',
  height: '4rem',
  backgroundColor: 'white',
  fontWeight: '700',
}

export default SearchJobs;