import React from "react";
import {
  withStateTimes,
  withHandlerClick,
  withDisplayTrack,
  withDidMountStateMessages,
  withDisplayMessages
} from "./hoc";
import { compose, defaultProps } from "recompose";

const styles = {
  color: "white",
  padding: "5px",
  cursor: "pointer"
};

const Link = ({ type = "primary", children, href, onClick }) => (
  <a
    style={styles}
    className={`badge badge-${type}`}
    href={href}
    onClick={onClick}
  >
    {children}
  </a>
);

const LinkWithTrack = compose(
  withStateTimes,
  withHandlerClick,
  withDisplayTrack
)(Link);

const LinkWithMessages = compose(
  defaultProps({ type: "info" }),
  withDidMountStateMessages,
  withDisplayMessages
)(Link);

export { Link, LinkWithTrack, LinkWithMessages };
