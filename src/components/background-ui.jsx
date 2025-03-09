import React from "react";
import PropTypes from "prop-types";
export const BackgroundUi = ({ children }) => {
  return (
    <div style={styles.container}>
      <div style={styles.greenStyles} />
      <div style={styles.whiteStyles} />
      <div style={styles.elevationChildren}>{children}</div>
    </div>
  );
};

BackgroundUi.prototype = {
  children: PropTypes.element.isRequired,
};

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    padding: "20px",
    position: "relative",
    overflow: "hidden",
  },

  greenStyles: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "#80b1b7",
    clipPath: "polygon(0 0, 55% 0, 45% 100%, 0 100%)",
    display: "flex",
  },
  whiteStyles: {
    position: "absolute",
    top: 0,
    right: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    clipPath: "polygon(45% 0, 100% 0, 100% 100%, 55% 100%)",
  },
  elevationChildren: {
    position: "relative",
    zIndex: 2,
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },
};
