import React, { useState } from 'react';
import JobCard from './JobCard';
import './SearchJobs.css';

const SearchJobs = () => {
  const [jobs, setJobs] = useState([
    { id: 1, company: 'Universitas Multimedia Nusantara', position: 'Lecturer in Visual Communication Design', category: 'Education and Training', city: 'Tangerang', province: 'Banten' },
    { id: 2, company: 'Universitas Multimedia Nusantara', position: 'Lecturer in Visual Communication Design', category: 'Education and Training', city: 'Tangerang', province: 'Banten' },
    { id: 3, company: 'Universitas Multimedia Nusantara', position: 'Lecturer in Visual Communication Design', category: 'Education and Training', city: 'Tangerang', province: 'Banten' },
    { id: 4, company: 'Universitas Multimedia Nusantara', position: 'Lecturer in Visual Communication Design', category: 'Education and Training', city: 'Tangerang', province: 'Banten' },
  ]);

  return (
    <div className="searchJobs d-flex flex-column justify-content-start align-items-center" style={searchJobs}>
      {jobs.map(job => {
        return <JobCard job={job} />
      })}
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

export default SearchJobs;