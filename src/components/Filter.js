import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import "./styles/Filter.css";

import { deleteFilter, clearFilter } from "../features/filters/filtersSlice";

const Filter = () => {
  const filters = useSelector((state) => state.filters);
  const dispatch = useDispatch();

  const handleDeleteFilter = (event) => {
    const category = event.target.parentNode.firstChild.firstChild.data;
    dispatch(deleteFilter({ category }));
  };

  const handleClearFilter = () => dispatch(clearFilter());

  return (
    <>
      {filters.length > 0 && (
        <div className="filter">
          <div className="filter__categories">
            {filters.map((filter) => {
              return (
                <div className="filter__badge" key={nanoid()}>
                  <p className="filter__name">{filter}</p>
                  <button
                    className="filter__button--badge"
                    type="button"
                    onClick={event => handleDeleteFilter(event)}
                  >
                    X
                  </button>
                </div>
              );
            })}
          </div>
          <button className="filter__button" type="button" onClick={handleClearFilter}>
            Clear
          </button>
        </div>
      )}
    </>
  );
};

export default Filter;
