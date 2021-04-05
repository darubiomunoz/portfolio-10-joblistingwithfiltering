import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import "./styles/Filter.css";

import { deleteCategory, clearFilters } from "../features/filters/filtersSlice";

const Filter = () => {
  const { isActive, roles, levels, languages, tools } = useSelector(
    (state) => state.filters
  );
  const dispatch = useDispatch();

  const handleDeleteFilter = (event) => {
    const category = event.target.parentNode.firstChild.firstChild.data;
    dispatch(deleteCategory({ category }));
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
