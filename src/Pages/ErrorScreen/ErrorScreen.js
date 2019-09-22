import React from "react";
import PropTypes from "prop-types";

const ErrorScreen = ({ text = "Something Went Wrong!" }) => {
  return <h1>{text}</h1>;
};

ErrorScreen.propTypes = {
  text: PropTypes.string
};

export default ErrorScreen;
