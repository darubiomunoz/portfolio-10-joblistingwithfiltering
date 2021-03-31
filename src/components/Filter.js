import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import "./styles/Filter.css";

import { deleteFilter } from '../features/joboffers/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);
  console.log(filters);

  const handleDeleteFilter = (event) => {
    console.log(event);
  }

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
                    onClick={(event) => handleDeleteFilter(event)}
                  >
                    X
                  </button>
                </div>
              );
            })}
          </div>
          <button className="filter__button" type="button">Clear</button>
        </div>
      )}
    </>
  );
};

export default Filter;
