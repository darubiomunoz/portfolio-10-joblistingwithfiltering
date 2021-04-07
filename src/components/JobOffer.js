import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./styles/JobOffer.css";

import { addCategory } from "../features/filters/filtersSlice";
import {
  noFiltersApplied,
  filterByRoles,
  filterByLevels,
  filterByLanguages,
  filterByTools,
} from "../features/joboffers/jobOffersSlice";

const JobOffers = () => {
  const dispatch = useDispatch();
  const joboffers = useSelector((state) => state.joboffers);
  const { roles, levels, languages, tools } = useSelector(
    (state) => state.filters
  );

  const handleAddCategory = (event) => {
    const category = event.target.innerText;
    dispatch(addCategory({ category }));
  };

  useEffect(() => {
    const empty =
      roles.length === 0 &&
      levels.length === 0 &&
      languages.length === 0 &&
      tools.length === 0;

    if (empty) dispatch(noFiltersApplied());
    console.log("all");
  }, [roles, levels, languages, tools]);

  useEffect(() => {
    dispatch(filterByRoles({ roles }));
  }, [roles]);

  useEffect(() => {
    dispatch(filterByLevels({ levels }));
  }, [levels]);

  useEffect(() => {
    dispatch(filterByLanguages({ languages }));
  }, [languages]);

  useEffect(() => {
    dispatch(filterByTools({ tools }));
  }, [tools]);

  const renderJobOffers = joboffers.map((joboffer) => {
    return (
      <div className="joboffer" key={joboffer.id}>
        <figure className="joboffer__image--container">
          <img
            className="joboffer__logo"
            src={joboffer.logo}
            loading="lazy"
            tabIndex="0"
            alt={`${joboffer.company}'s logo`}
          />
        </figure>
        <section className="joboffer__item">
          <section className="joboffer__details">
            <div className="joboffer__info">
              <h2 className="joboffer__company" tabIndex="0">
                {joboffer.company}
              </h2>
              {joboffer.new && (
                <p className="joboffer__new" tabIndex="0">
                  New!
                </p>
              )}
              {joboffer.featured && (
                <p className="joboffer__featured" tabIndex="0">
                  Featured
                </p>
              )}
            </div>
            <h3 className="joboffer__title" tabIndex="0">
              {joboffer.position}
            </h3>
            <div className="joboffer__extra">
              <p className="joboffer__status1" tabIndex="0">
                {joboffer.postedAt}
              </p>
              &#8226;
              <p className="joboffer__status2" tabIndex="0">
                {joboffer.contract}
              </p>
              &#8226;
              <p className="joboffer__status3" tabIndex="0">
                {joboffer.location}
              </p>
            </div>
          </section>
          <section className="joboffer__keywords">
            <p
              className="joboffer__badge "
              tabIndex="0"
              aria-label={`${joboffer.role}. Press enter to filter all job offers by ${joboffer.role}`}
              onClick={(event) => handleAddCategory(event)}
            >
              {joboffer.role}
            </p>
            <p
              className="joboffer__badge"
              tabIndex="0"
              aria-label={`${joboffer.level}. Press enter to filter all job offers by ${joboffer.level}`}
              onClick={(event) => handleAddCategory(event)}
            >
              {joboffer.level}
            </p>
            {joboffer.languages.map((language, index) => {
              return (
                <p
                  className="joboffer__badge"
                  key={index}
                  tabIndex="0"
                  aria-label={`${language}. Press enter to filter all job offers by ${language}`}
                  onClick={(event) => handleAddCategory(event)}
                >
                  {language}
                </p>
              );
            })}
            {joboffer.tools.map((tool, index) => {
              return (
                <p
                  className="joboffer__badge"
                  key={index}
                  tabIndex="0"
                  aria-label={`${tool}. Press enter to filter all job offers by ${tool}`}
                  onClick={(event) => handleAddCategory(event)}
                >
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
