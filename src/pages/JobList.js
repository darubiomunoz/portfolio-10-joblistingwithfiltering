import React from "react";
import { connect } from "react-redux";
import "./styles/JobList.css";

import Filter from "../components/Filter";
import JobOffer from "../components/JobOffer";

import headerMobile from "../assets/images/bg-header-mobile.svg";
import headerDesktop from "../assets/images/bg-header-desktop.svg";

const JobList = ({ joboffers }) => {
  console.log(joboffers)
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
        <JobOffer />
      </main>
    </div>
  );
};

let mapStateToProps = async (state) => {
  return {
    joboffers: await state.joboffers,
  }
}

export default connect(mapStateToProps, null)(JobList);
