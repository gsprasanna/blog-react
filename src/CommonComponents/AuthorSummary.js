import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import routes from "../routes/routes";

const AuthorSummary = ({ title }) => {
  // console.log();
  return (
    <div>
      {/* <p>{title}</p> */}
      <NavLink to={routes.author.replace(":authorname", title)}>
        {title}
      </NavLink>
    </div>
  );
};

AuthorSummary.propTypes = {
  title: PropTypes.string.isRequired
};

export default AuthorSummary;
