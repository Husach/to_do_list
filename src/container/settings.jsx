import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

// actions
import { generalParamsAction, switchThemeAction } from "../actions";

// constants
import { ACTIONS, SORT_OPTIONS, LOCAL_OPTIONS } from "../constants";

// components
import Switch from "../components/ownSwitch";
import Input from "../components/inputField";
import Select from "../components/selectField";

const mapStateToProps = state => ({ ...state.mainState });

const mapDispatchToProps = {
  switchThemeAction,
  changeSortAction: generalParamsAction(ACTIONS.CHANGE_SORT),
  changeLocalAction: generalParamsAction(ACTIONS.CHANGE_LOCAL),
  changeItemWidthAction: generalParamsAction(ACTIONS.CHANGE_ITEM_WIDTH)
};

class Settings extends Component {
  static propTypes = {
    sort: PropTypes.object,
    local: PropTypes.object,
    elementWidth: PropTypes.number,
    changeSortAction: PropTypes.func,
    switchThemeAction: PropTypes.func,
    changeLocalAction: PropTypes.func,
    changeItemWidthAction: PropTypes.func
  };

  _handleChangeSort = sort => {
    const { changeSortAction } = this.props;

    changeSortAction(sort);
  };

  _handleChangeLocal = local => {
    const { changeLocalAction } = this.props;

    changeLocalAction(local);
  };

  _handleChangeWidth = newWidth => {
    const { changeItemWidthAction } = this.props;

    changeItemWidthAction(newWidth);
  };

  _handleChangeTheme = () => {
    const { switchThemeAction, theme } = this.props;

    switchThemeAction(ACTIONS.SWITCH_THEME, theme);
  };

  render() {
    const { elementWidth, sort, local } = this.props;

    return (
      <div className="settings">
        <Input
          title={"Ширина блока"}
          value={elementWidth}
          type={"number"}
          handlerChange={e => this._handleChangeWidth(+e.target.value)}
        />

        <Select
          title={"Сортировка"}
          name="sort"
          value={sort}
          options={SORT_OPTIONS}
          handlerChange={e => this._handleChangeSort(e)}
        />

        <Switch
          title="Изменить тему"
          checkedIcon={true}
          uncheckedIcon={true}
          handleChange={() => this._handleChangeTheme()}
        />

        <Select
          title={"Язык"}
          name="local"
          value={local}
          options={LOCAL_OPTIONS}
          handlerChange={e => this._handleChangeLocal(e)}
        />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings);
