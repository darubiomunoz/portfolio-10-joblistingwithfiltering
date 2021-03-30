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
      <section className="joboffer__item">
        <section className="joboffer__details">
          <div className="joboffer__info">
            <h2 className="joboffer__company">Photosnap</h2>
            {false && <p>Featured</p>}
          </div>
          <h3 className="joboffer__title">Senior Frontend Developer</h3>
          <div className="joboffer__extra">
            <p className="joboffer__status1">1d ago</p>
            &#8226;
            <p className="joboffer__status2">Fulltime</p>
            &#8226;
            <p className="joboffer__status3">USA only</p>
          </div>
        </section>
        <section className="joboffer__keywords">
          <p className="joboffer__badge">Frontend</p>
          <p className="joboffer__badge">Senior</p>
          <p className="joboffer__badge">HTML</p>
          <p className="joboffer__badge">CSS</p>
          <p className="joboffer__badge">JavaScript</p>
        </section>
      </section>
    </div>
  );
}

export default JobOffer;