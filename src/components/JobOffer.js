import React from 'react';
import './styles/JobOffer.css';

const JobOffer = () => {
  return (
    <div className="joboffer">
      <figure className="joboffer__image--container">
        <img
          className="joboffer__logo"
          src="https://i.postimg.cc/Y2xsG7wk/photosnap.png"
          loading="lazy"
          alt="company's logo"
        />
      </figure>
      <div className="joboffer__item">
        <section className="joboffer__info">
          <h2 className="joboffer__companyname">Company Name</h2>
          <h3 className="joboffer__title">Job title</h3>
          <div className="joboffer__details">
            <p className="joboffer__status">1d ago</p>
            <p className="joboffer__status">Fulltime</p>
            <p className="joboffer__status">USA only</p>
          </div>
        </section>
        <section className="joboffer__keywords">
          <p className="joboffer__badge">Frontend</p>
          <p className="joboffer__badge">Senior</p>
          <p className="joboffer__badge">HTML</p>
          <p className="joboffer__badge">CSS</p>
          <p className="joboffer__badge">JavaScript</p>
        </section>
      </div>
    </div>
  );
}

export default JobOffer;