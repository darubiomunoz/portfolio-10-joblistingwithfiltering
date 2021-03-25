import React from "react";
import './styles/JobList.css';

import Filter from '../components/Filter';
import JobOffer from '../components/JobOffer';

const JobList = () => {
  return (
    <div className="joblist">
      <h1>JobList</h1>
      <Filter />
      <JobOffer />
    </div>
  );
};

export default JobList;