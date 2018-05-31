import React from "react";
import withClickTimesTrack from "./hoc/withClickTimesTrack";

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

const LinkWithTrack = withClickTimesTrack(Link);

export { Link, LinkWithTrack };
