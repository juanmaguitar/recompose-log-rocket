import React, { Component } from "react";
import cleanProps from "react-clean-props";

const withClickTimesTrack = WrappedComponent =>
  class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        times: 0
      };
    }
    handleClick = e => {
      e.preventDefault();
      let { times } = this.state;
      const { onClick } = this.props;
      this.setState({ times: ++times });
      onClick && onClick();
    };
    render() {
      const { children, onClick } = this.props;
      const { times } = this.state;
      const cleanedProps = cleanProps(this.props, { children, onClick });
      return (
        <span onClick={this.handleClick}>
          <WrappedComponent
            type={times > 5 ? "danger" : "primary"}
            {...cleanedProps}
          >
            {children} <small>({times} times clicked)</small>
          </WrappedComponent>
        </span>
      );
    }
  };

export default withClickTimesTrack;
