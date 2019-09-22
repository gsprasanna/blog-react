import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import routes from "../routes/routes";
import ErrorScreen from "../Pages/ErrorScreen/ErrorScreen";
//import ErrorScreen from "../pages/ErrorScreen/ErrorScreen";

const PostSummary = ({ id, author, content, title, datetime }) => {
  //undefined.fun();
  try {
    return (
      <div className={`post-container container`}>
        <h3>{title}</h3>
        <p>{author}</p>
        <p>{content}</p>
        <NavLink
          className={`btn btn-primary`}
          to={routes.post.replace(":id", id)}
        >
          Read More
        </NavLink>
      </div>
    );
  } catch (e) {
    return <ErrorScreen text={"Error while loading the post..."} />;
  }
};

PostSummary.propTypes = {
  id: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  datetime: PropTypes.string.isRequired
};

export default PostSummary;
