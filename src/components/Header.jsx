import React from "react";
import PropTypes from "prop-types";

const Header = ({ text, bgColor, textColor }) => {
  const headerStyle = {
    backgroundColor: bgColor,
    color: textColor
  };
  return (
    <div style={headerStyle}>
      <h1 style={{textAlign: "center"}}>{text}</h1>
    </div>
  );
};

Header.defaultProps = {
  text: "Feedback UI",
  bgColor: "rgba(0,0,0,0.4)",
  textColor: "#ff6a95",
};
Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
};

export default Header;
