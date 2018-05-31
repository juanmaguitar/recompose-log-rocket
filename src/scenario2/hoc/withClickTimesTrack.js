import React, { Component } from "react";

const withClickTimesTrack = Component =>
  class ComponentWithClickTimesTrack extends Component {
    constructor(props) {
      super(props);
      this.state = {
        times: 0
      };
    }
    handleClick = e => {
      let { times } = this.state;
      const { onClick } = this.props;
      this.setState({ times: ++times });
      onClick && onClick();
    };
    render() {
      const { children } = this.props;
      const { times } = this.state;
      return (
        <span onClick={this.handleClick}>
          <Component type={times > 5 ? "danger" : "primary"}>
            {children} <small>{times} times clicked</small>
          </Component>
        </span>
      );
    }
  };

export default withClickTimesTrack;
