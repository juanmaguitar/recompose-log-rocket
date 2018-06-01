import React from "react";
import { compose, setDisplayName } from "recompose";

const withDisplayTrack = WrappedComponent => props => {
  const { children, onClick, handleClick, times, ..._props } = props;
  return (
    <span onClick={handleClick}>
      <WrappedComponent
        type={times > 5 ? "danger" : "primary"}
        {..._props}
      >
        {children} <small>({times} times clicked)</small>
      </WrappedComponent>
    </span>
  )
}
  

export default compose(
  setDisplayName('ComponentWithDisplayTrack'),
  withDisplayTrack
);
