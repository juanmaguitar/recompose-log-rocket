import React from "react";

const withDisplayTrack = WrappedComponent => props => {
  const { children, handleClick, times, ..._props } = props;
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
  

export default withDisplayTrack;
