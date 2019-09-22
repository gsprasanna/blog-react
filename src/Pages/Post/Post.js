import React, { Component, Fragment } from "react";
import { GET_POSTS_BY_ID_API } from "../../constants/serverUrls";
import fetchData from "../../services/fetchData";
import PostSummary from "../../CommonComponents/PostSummary";
import LoadingIndicator from "../../CommonComponents/LoadingIndicator";

class Post extends Component {
  state = {
    id: "",
    author: "",
    content: "",
    title: "",
    datetime: ""
  };

  componentDidMount() {
    console.log(this.props);
    const { match = {} } = this.props;
    const { params = {} } = match;
    const { id: postId = "" } = params;

    fetchData(GET_POSTS_BY_ID_API.replace(":id", postId))
      .then(data => {
        this.setState({
          id: data.id,
          author: data.author,
          content: data.content,
          title: data.title,
          datetime: data.datetime
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    const {
      id = "",
      author = "",
      content = "",
      title = "",
      datetime = ""
    } = this.state;
    return (
      <Fragment>
        {id ? (
          <PostSummary
            id={id}
            author={author}
            content={content}
            title={title}
            datetime={datetime}
          />
        ) : (
          <LoadingIndicator />
        )}
      </Fragment>
    );
  }
}

export default Post;
