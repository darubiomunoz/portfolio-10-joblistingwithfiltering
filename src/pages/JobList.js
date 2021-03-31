import React from "react";
import "./styles/JobList.css";

import Filter from "../components/Filter";
import JobOffers from "../components/JobOffer";

import headerMobile from "../assets/images/bg-header-mobile.svg";
import headerDesktop from "../assets/images/bg-header-desktop.svg";

const JobList = () => {
  return (
    <div className="joblist">
      <header className="joblist__header">
        <picture className="joblist__background">
          <source srcSet={headerDesktop} media="(min-width: 1024px)"></source>
          <img
            className="background--header"
            src={headerMobile}
            loading="lazy"
            alt="Header background pattern"
          />
        </picture>
      </header>
      <main className="joblist__main">
        <Filter />
        <JobOffers />
      </main>
    </div>
  );
};

export default JobList;
