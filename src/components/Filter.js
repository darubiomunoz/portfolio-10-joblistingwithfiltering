import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import "./styles/Filter.css";

import { deleteCategory, clearFilters } from "../features/filters/filtersSlice";
import { filterByLanguages, filterByLevels, filterByRoles, filterByTools, noFiltersApplied } from "../features/joboffers/jobOffersSlice";

const Filter = () => {
  const { isActive, roles, levels, languages, tools } = useSelector(
    (state) => state.filters
  );
  const dispatch = useDispatch();

  const handleDeleteFilter = (event) => {
    const category = event.target.parentNode.firstChild.firstChild.data;

    dispatch(deleteCategory({ category }));

    dispatch(noFiltersApplied());

    if (!roles.includes(category) && roles.length > 0) dispatch(filterByRoles({ roles }));
    if (!levels.includes(category) && levels.length > 0) dispatch(filterByLevels({ levels }));
    if (!languages.includes(category) && languages.length > 0)
      dispatch(filterByLanguages({ languages }));
    if (!tools.includes(category) && tools.length > 0)
      dispatch(filterByTools({ tools }));
  };

  const handleClearFilter = () => dispatch(clearFilters());

  const renderBadge = (item) => {
    return (
      <>
        {item.map((category) => {
          return (
            <div className="filter__badge" key={nanoid()}>
              <p className="filter__name">{category}</p>
              <button
                className="filter__button--badge"
                type="button"
                onClick={(event) => handleDeleteFilter(event)}
              >
                X
              </button>
            </div>
          );
        })}
      </>
    );
  };

  return (
    <>
      {isActive && (
        <div className="filter">
          <div className="filter__categories">
            {roles.length > 0 && renderBadge(roles)}
            {levels.length > 0 && renderBadge(levels)}
            {languages.length > 0 && renderBadge(languages)}
            {tools.length > 0 && renderBadge(tools)}
          </div>
          <button
            className="filter__button"
            type="button"
            onClick={handleClearFilter}
          >
            Clear
          </button>
        </div>
      )}
    </>
  );
};

export default Filter;
