import React from "react";
import { withStateTimes, withHandlerClick, withDisplayTrack } from "./hoc";
import { compose, withState, withHandlers } from "recompose";

const Button = ({ type = "primary", children, onClick }) => (
  <button className={`btn btn-${type}`} onClick={onClick}>
    {children}
  </button>
);

const ButtonWithTrack = compose(
  withStateTimes,
  withHandlerClick,
  withDisplayTrack
)(Button)

const ButtonWithTrackCountdown = compose(
  withState('times', 'setTimes', 3),
  withState('type', 'setType', 'primary'),
  withHandlers({
    handleClick: props => e => {
      let { times, onClick, setTimes, setType } = props;
      e.preventDefault()
      if ( times <= 0 ) {  setType('secondary') }
      else { setTimes( --times ) }
      onClick && onClick();
    }
  }),
  withDisplayTrack
)(Button)


export { Button, ButtonWithTrack, ButtonWithTrackCountdown };
