import React, { Component } from "react";
import Switch from "react-switch";
import PropTypes from "prop-types";

class OwnSwitch extends Component {
  static propTypes = {
    title: PropTypes.string,
    checkedIcon: PropTypes.bool,
    uncheckedIcon: PropTypes.bool,
    handleChange: PropTypes.func
  };

  state = { checked: false };

  _handleChange = () => {
    const { handleChange } = this.props;
    this.setState(state => ({ checked: !state.checked }));

    handleChange();
  };

  render() {
    const { checked } = this.state;

    const {
      title = null,
      checkedIcon = null,
      uncheckedIcon = null
    } = this.props;

    return (
      <label className="switch">
        <span className="switch-title">{title}</span>
        <Switch
          onChange={() => this._handleChange()}
          checked={checked}
          checkedIcon={checkedIcon}
          uncheckedIcon={uncheckedIcon}
        />
      </label>
    );
  }
}

export default OwnSwitch;
