import React from 'react';
import './DashboardOverview.css';

const DashboardOverview = () => {
  return (
    <div className="dashboardOverview container d-flex flex-column flex-nowrap justify-content-start align-items-center" style={dashboardOverview}>
      <h3 className="my-5">Dashboard</h3>
      <button className="overviewItem btn btn-light rounded-pill shadow my-2 p-3">
        Banner 1
      </button>
      <button className="overviewItem btn btn-light rounded-pill shadow my-2 p-3">
        Banner 2
      </button>
      <button className="overviewItem btn btn-light rounded-pill shadow my-2 p-3">
        Profile
      </button>
      <button className="overviewItem btn btn-light rounded-pill shadow my-2 p-3">
        Infographics
      </button>
      <button className="overviewItem btn btn-light rounded-pill shadow my-2 p-3">
        Testimonials
      </button>
      <button className="overviewItem btn btn-light rounded-pill shadow mt-2 mb-5 p-3">
        Social Media
      </button>
    </div>
  )
};

const dashboardOverview = {
  minHeight: '82vh',
};

export default DashboardOverview;