import React from "react";
import { useSelector } from "react-redux";
import "./styles/Filter.css";

const Filter = () => {
  const filters = useSelector(state => state.filters);
  const joboffers = useSelector((state) => state.joboffers.filter(joboffer => joboffer.role === filters));
  
  return (
    <div className="filter">
      <button className="filter__button">Filter</button>
    </div>
  );
};

export default Filter;
