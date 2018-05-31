import React, { Component } from "react";
import Button from "./Button";

class ButtonWithTrack extends Component {
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
        <Button type={times > 5 ? "danger" : "primary"}>
          {children} <small>{times} times clicked</small>
        </Button>
      </span>
    );
  }
}

export default ButtonWithTrack;
