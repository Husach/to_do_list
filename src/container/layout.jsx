import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

// actions
import { generalParamsAction } from "../actions";

// constants
import { ACTIONS } from "../constants";

// components
import List from "./list";
import Controls from "../components/controls";

import data from "../data/data.js";

const mapStateToProps = state => ({ ...state.mainState });

const mapDispatchToProps = {
  initialDataAction: generalParamsAction(ACTIONS.INITIAL_DATA)
};

class Layout extends Component {
  static propTypes = {
    theme: PropTypes.string,
    initialDataAction: PropTypes.func
  };

  componentDidMount() {
    const { initialDataAction } = this.props;

    initialDataAction(data);
  }

  render() {
    const { theme } = this.props;

    return (
      <div className={`App ${theme}`}>
        <Controls />
        <List />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout);
