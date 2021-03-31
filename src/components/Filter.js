import React from "react";
import { useSelector } from "react-redux";
import { nanoid } from '@reduxjs/toolkit';
import "./styles/Filter.css";

const Filter = () => {
  const filters = useSelector((state) => state.filters);
  console.log(filters);

  return (
    <div className="filter">
      <div className="filter__categories">
        {filters.map((filter) => {
          return (
            <div className="filter__badge" key={nanoid()}>
              <p className="filter__name">{filter}</p>
              <button className="filter__button--badge">X</button>
            </div>
          );
        })}
      </div>
      <button className="filter__button">Clear</button>
    </div>
  );
};

export default Filter;
