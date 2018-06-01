import React, { Component } from "react";

const withStateTimes = WrappedComponent =>
  class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        times: 0
      };
    }
    setTimes = (times) => {
      this.setState({ times })
    }
    render() {
      const { times } = this.state
      const { setTimes } = this
      return (
        <WrappedComponent times={times} setTimes={setTimes} { ...this.props } />
      );
    }
  };

export default withStateTimes;
