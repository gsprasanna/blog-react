import React, { Component, Fragment } from "react";
import { GET_AUTHORS_BY_ID_API } from "../../constants/serverUrls";
import fetchData from "../../services/fetchData";
import AuthorPost from "../../CommonComponents/AuthorPost";
import LoadingIndicator from "../../CommonComponents/LoadingIndicator";
import getData from "../../services/getData";

class Author extends Component {
  state = {
    authorsPost: []
  };

  componentDidMount() {
    const { match = {} } = this.props;
    const { params = {} } = match;
    const { authorname: authorName = "" } = params;
    debugger;
    console.log(authorName);
    getData(GET_AUTHORS_BY_ID_API.replace(":name", authorName))
      .then(data => {
        //console.log(data);
        debugger;
        this.setState({
          authorsPost: data
        });
        debugger;
        console.log(this.state);
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    const { authorsPost } = this.state;
    return (
      <Fragment>
        {authorsPost.length ? (
          authorsPost.map((post, postIndex) => {
            return (
              <AuthorPost
                id={post.id}
                key={postIndex}
                title={post.title}
                content={post.content}
                author={post.author}
              />
            );
          })
        ) : (
          <LoadingIndicator />
        )}
      </Fragment>
    );
  }
}

export default Author;
