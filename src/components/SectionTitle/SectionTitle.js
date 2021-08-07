import React from "react";
import PropTypes from "prop-types";

const SectionTitle = ({ title, children }) => (
  <div>
    <h2>{title}</h2>
    {children}
  </div>
);

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};

export default SectionTitle;
