import React from "react";
import { compose, setDisplayName } from "recompose";

const withDisplayMessages = WrappedComponent => props => {
  const { children, messages, loading, ..._props } = props;
  return (
    <WrappedComponent {..._props}>
      {children}
      {loading ? (
        <span className="fas fa-spinner fa-pulse"> </span>
      ) : (
        <span className="badge badge-light">{messages}</span>
      )}
    </WrappedComponent>
  );
};

export default compose(
  setDisplayName("withDisplayMessages"),
  withDisplayMessages
);
