import React from "react";
import Select from "react-select";
import PropTypes from "prop-types";

const SelectField = ({ options, value, title, handlerChange }) => {
  const titleSelect = title ? `${title}:` : null;
  return (
    <div className="select">
      <div className="select-title">{titleSelect}</div>
      <Select
        className="select-field"
        value={value}
        options={options}
        onChange={e => handlerChange(e)}
      />
    </div>
  );
};

SelectField.propTypes = {
  options: PropTypes.array,
  value: PropTypes.object,
  title: PropTypes.string,
  handlerChange: PropTypes.func
};

export default SelectField;
