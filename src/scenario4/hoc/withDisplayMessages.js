import React from "react";
import { compose, setDisplayName } from "recompose";

const withDisplayMessages = WrappedComponent => props => {
  const { children, messages, ..._props } = props;
  return (
    <WrappedComponent {..._props} >
      { children } <span className="badge badge-light">{ messages }</span>
    </WrappedComponent>
  )
}
  

export default compose(
  setDisplayName('withDisplayMessages'),
  withDisplayMessages
);
