import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import nextId from "react-id-generator";

import { ACTIONS } from "../../constants";

// actions
import { generalAction, generalParamsAction } from "../../actions";

// components
import Btn from "../../components/btn";

const mapStateToProps = state => ({ ...state.mainState });

const mapDispatchToProps = {
  addItemAction: generalParamsAction(ACTIONS.ADD_ITEM_DATA),
  updateDataAction: generalParamsAction(ACTIONS.UPDATE_DATA),
  clearEditableObjAction: generalAction(ACTIONS.CLEAR_EDITABLE_OBJ),
  updateEditableObjAction: generalParamsAction(ACTIONS.UPDATE_EDITABLE_OBJ)
};

class EditorControls extends Component {
  static propTypes = {
    editableObj: PropTypes.object,
    data: PropTypes.array,
    addItemAction: PropTypes.func,
    updateDataAction: PropTypes.func,
    clearEditableObjAction: PropTypes.func
  };

  _checkDisabledBtn = () => {
    const { title, text, type, date } = this.props.editableObj;

    return !(
      Boolean(title) &&
      Boolean(text) &&
      Boolean(type.label) &&
      Boolean(date)
    );
  };

  _addItem = newObj => {
    const { addItemAction } = this.props;

    addItemAction(newObj);
  };

  _editItem = editableObj => {
    const { data, updateDataAction } = this.props;

    const newData = [
      ...data.filter(item => item.id !== editableObj.id),
      editableObj
    ];

    updateDataAction([...newData]);
  };

  _handlerBtnSave = () => {
    const { editableObj } = this.props;

    if (editableObj.id) {
      this._editItem(editableObj);
    } else {
      const id = nextId();

      editableObj.id = id;

      this._addItem(editableObj);
    }

    this._handlerClear();
  };

  _handlerClear = () => {
    const { clearEditableObjAction } = this.props;

    clearEditableObjAction();
  };

  render() {
    return (
      <div className="editor-controls">
        <Btn
          title={"Сохранить"}
          isDisabled={this._checkDisabledBtn()}
          handlerClick={() => this._handlerBtnSave()}
        />

        <Btn title={"Очистить"} handlerClick={() => this._handlerClear()} />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditorControls);
