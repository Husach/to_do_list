import React from "react";
import PropTypes from "prop-types";

const Btn = ({ title, isDisabled, handlerClick }) => {
  return isDisabled ? (
    <button className="btn btn--disabled">{title}</button>
  ) : (
    <button className="btn" onClick={() => handlerClick()}>
      {title}
    </button>
  );
};

Btn.propTypes = {
  title: PropTypes.string,
  isDisabled: PropTypes.bool,
  handlerClick: PropTypes.func
};

export default Btn;
