import React, { Component } from "react";
import PropTypes from "prop-types";

class InputField extends Component {
  static propTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    type: PropTypes.string,
    title: PropTypes.string,
    emptyField: PropTypes.bool,
    handlerChange: PropTypes.func
  };

  render() {
    const { value, type, title, emptyInput, handlerChange } = this.props;
    const titleLower = title.toLowerCase();

    const className =
      emptyInput && !value ? "input-field input-error" : "input-field";

    return (
      <div className="input">
        <div className="input-title">{title}:</div>
        <input
          value={value || ""}
          type={type}
          className={className}
          placeholder={`Введите ${titleLower}`}
          onChange={e => handlerChange(e)}
        />
      </div>
    );
  }
}

export default InputField;
