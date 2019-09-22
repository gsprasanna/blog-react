import React, { Component } from "react";
import ErrorScreen from "../Pages/ErrorScreen/ErrorScreen";

const ErrorBoundaryV2 = ChildComponent => {
  return class extends Component {
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
      if (hasError) return <ErrorScreen />;
      return <ChildComponent />;
    }
  };
};

export default ErrorBoundaryV2;
