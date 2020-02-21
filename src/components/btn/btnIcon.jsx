import React from "react";
import PropTypes from "prop-types";

const BtnIcon = ({ title, svg, handlerClick }) => {
  return (
    <button onClick={() => handlerClick()} className="btn-icon" title={title}>
      {svg}
    </button>
  );
};

BtnIcon.propTypes = {
  title: PropTypes.string,
  svg: PropTypes.any,
  handlerClick: PropTypes.func
};

export default BtnIcon;
