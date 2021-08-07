import React from "react";
import PropTypes from "prop-types";
import styles from "./FeedbackOptions.module.scss";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul>
      {Object.keys(options).map((option) => (
        <button
          className={styles.button}
          type="button"
          onClick={() => onLeaveFeedback(option)}
          key={option}
        >
          {option}{" "}
        </button>
      ))}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
