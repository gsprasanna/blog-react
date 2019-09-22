import React, { Component } from "react";
import fetchData from "../../services/fetchData";
import { GET_AUTHORS_API } from "../../constants/serverUrls";
import AuthorSummary from "../../CommonComponents/AuthorSummary";
import LoadingIndicator from "../../CommonComponents/LoadingIndicator";
import getData from "../../services/getData";

class Authors extends Component {
  state = {
    authors: []
  };

  componentDidMount() {
    this.loadPostData();
  }

  loadPostData = async () => {
    try {
      const authors = await getData(GET_AUTHORS_API, "GET");
      console.log(authors);
      this.setState({ authors });
    } catch (e) {
      console.error(e);
    }
  };
  render() {
    const { authors } = this.state;
    return (
      <div>
        {authors.length ? (
          authors.map((author, authorIndex) => {
            return <AuthorSummary title={author} key={authorIndex} />;
          })
        ) : (
          <LoadingIndicator />
        )}
      </div>
    );
  }
}

export default Authors;
