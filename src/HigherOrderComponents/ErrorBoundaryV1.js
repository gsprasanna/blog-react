import React, { Component } from "react";
import ErrorScreen from "../Pages/ErrorScreen/ErrorScreen";

class ErrorBoundaryV1 extends Component {
  state = {
    hasError: false
  };

  componentDidCatch(error) {
    if (error) {
      this.setState({
        hasError: true
      });
    }
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) return <ErrorScreen />;

    return children;
  }
}

export default ErrorBoundaryV1;
