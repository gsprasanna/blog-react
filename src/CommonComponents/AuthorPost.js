import React from "react";
import PropTypes from "prop-types";

const AuthorPost = ({ id, author, content, title, datetime }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{author}</p>
      <p>{content}</p>
    </div>
  );
};

AuthorPost.propTypes = {
  id: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  datetime: PropTypes.string.isRequired
};

export default AuthorPost;
