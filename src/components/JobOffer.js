import React from "react";
import { useSelector } from "react-redux";
import "./styles/JobOffer.css";

const JobOffers = () => {
  const joboffers = useSelector((state) => state.joboffers);

  const renderJobOffers = joboffers.map((joboffer) => {
    return (
      <div className="joboffer" key={joboffer.id}>
        <figure className="joboffer__image--container">
          <img
            className="joboffer__logo"
            src={joboffer.logo}
            loading="lazy"
            alt="company's logo"
          />
        </figure>
        <section className="joboffer__item">
          <section className="joboffer__details">
            <div className="joboffer__info">
              <h2 className="joboffer__company">{joboffer.company}</h2>
              {joboffer.new && <p className="joboffer__new">New!</p>}
              {joboffer.featured && (
                <p className="joboffer__featured">Featured</p>
              )}
            </div>
            <h3 className="joboffer__title">{joboffer.position}</h3>
            <div className="joboffer__extra">
              <p className="joboffer__status1">{joboffer.postedAt}</p>
              &#8226;
              <p className="joboffer__status2">{joboffer.contract}</p>
              &#8226;
              <p className="joboffer__status3">{joboffer.location}</p>
            </div>
          </section>
          <section className="joboffer__keywords">
            <p className="joboffer__badge">{joboffer.role}</p>
            <p className="joboffer__badge">{joboffer.level}</p>
            {joboffer.languages.map((language, index) => {
              return (
                <p className="joboffer__badge" key={index}>
                  {language}
                </p>
              );
            })}
            {joboffer.tools.map((tool, index) => {
              return (
                <p className="joboffer__badge" key={index}>
                  {tool}
                </p>
              );
            })}
          </section>
        </section>
      </div>
    );
  });

  return <>{renderJobOffers}</>;
};

export default JobOffers;
