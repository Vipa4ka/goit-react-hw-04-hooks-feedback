import React from "react";
import PropTypes from "prop-types";

const Statistics = ({ GOOD, NEUTRAL, BAD, total, positivePercentage }) => (
  <ul>
    <li>GOOD: {GOOD}</li>
    <li>NEUTRAL: {NEUTRAL}</li>
    <li>BAD: {BAD}</li>
    <li>Total:{total}</li>
    <li>Positive feedback: {positivePercentage}%</li>
  </ul>
);

Statistics.propTypes = {
  GOOD: PropTypes.number.isRequired,
  NEUTRAL: PropTypes.number.isRequired,
  BAD: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
