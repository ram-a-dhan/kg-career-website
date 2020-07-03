import React, { useState, useEffect } from 'react';
import JobCard from './JobCard';
import './SearchJobs.css';
import axios from 'axios';
import useFilter from '../hooks/useFilter';

const SearchJobs = () => {
  const [jobs, setJobs] = useState([]);
  const { filtered, setFiltered, onChangeText } = useFilter(jobs);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setFiltered(jobs);
    // eslint-disable-next-line
  }, [jobs]);
  const getJobs = async () => {
    const count = await axios.get('https://www.kalibrr.id/api/companies/kompas-gramedia/jobs?offset=0&limit=0')
    if (!count) return false;
    const vacancies = await axios.get('https://www.kalibrr.id/api/companies/kompas-gramedia/jobs?offset=0&limit=' + count.data.total_count)
    if (!vacancies) return false;
    let job = [];
    vacancies.data.jobs.forEach(vacancy => {
      job.push({
        id: vacancy.id,
        title: vacancy.name,
        category: vacancy.function,
        location: `${vacancy.google_location.address_components.city}, ${vacancy.google_location.address_components.region}`,
        picture: vacancy.company_info.logo,
        link: `https://www.kalibrr.com/c/${vacancy.company_info.code}/jobs/${vacancy.id}/${vacancy.slug}`
      });
    });
    setJobs(job);
    setLoading(false);
  };

  const handleReload = () => {
    setLoading(true);
    getJobs();
  };

  useEffect(() => {
    getJobs();
  },[]);

  return (
    <div id="searchJobs" className="searchJobs d-flex flex-column justify-content-start align-items-center" style={searchJobs}>
      {
        // eslint-disable-next-line
        loading && (
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
            <input
              type="search"
              onChange={onChangeText}
              placeholder="Search by Keyword"
              className="filterBox text-dark text-center p-1" style={filterBox}
            />
            {filtered.map(job => {
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