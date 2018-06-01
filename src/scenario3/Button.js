import React from "react";
import { withStateTimes, withHandlerClick, withDisplayTrack } from "./hoc";

const Button = ({ type = "primary", children, onClick }) => (
  <button className={`btn btn-${type}`} onClick={onClick}>
    {children}
  </button>
);

const ButtonWithTrack = withStateTimes(withHandlerClick(withDisplayTrack(Button)));

export { Button, ButtonWithTrack };
