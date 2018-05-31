import React from "react";
import withClickTimesTrack from "./hoc/withClickTimesTrack";

const Button = ({ type = "primary", children, onClick }) => (
  <button className={`btn btn-${type}`} onClick={onClick}>
    {children}
  </button>
);

const ButtonWithTrack = withClickTimesTrack(Button);

export { Button, ButtonWithTrack };
