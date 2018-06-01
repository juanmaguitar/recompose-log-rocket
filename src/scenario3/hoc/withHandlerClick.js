import React from "react";

const withHandlerClick = WrappedComponent => props => {

  let { times, setTimes, children, onClick, ..._props } = props;
    
  const handleClick = e => {
    e.preventDefault();
    setTimes( ++times );
    onClick && onClick();
  };

  return (
    <WrappedComponent times={times} handleClick={handleClick} { ..._props }>
      {children}
    </WrappedComponent>
  );

}

export default withHandlerClick;
