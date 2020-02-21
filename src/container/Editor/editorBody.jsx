import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import DatePicker from "react-datepicker";

// actions
import { generalParamsAction } from "../../actions";

// components
import InputField from "../../components/inputField";
import SelectField from "../../components/selectField";

// constants
import { ACTIONS, TYPE_ITEM } from "../../constants";

// styles
import "react-datepicker/dist/react-datepicker.css";

const mapStateToProps = state => ({ ...state.mainState });

const mapDispatchToProps = {
  updateEditableObjAction: generalParamsAction(ACTIONS.UPDATE_EDITABLE_OBJ)
};

class EditorBody extends Component {
  static propTypes = {
    editableObj: PropTypes.object,
    updateEditableObjAction: PropTypes.func
  };

  _handlerField = (field, value) => {
    const { updateEditableObjAction } = this.props;

    updateEditableObjAction({ field, value });
  };

  _handlerDate = newDate => {
    this._handlerField("date", newDate);
  };

  render() {
    const { editableObj } = this.props;
    const { title, text, type, date } = editableObj;

    return (
      <div className="editor-body">
        <InputField
          title={"Заголовок"}
          value={title}
          handlerChange={e => this._handlerField("title", e.target.value)}
        />

        <InputField
          title={"Текст"}
          value={text}
          handlerChange={e => this._handlerField("text", e.target.value)}
        />

        <div className="editor-two-column">
          <SelectField
            name="type"
            value={type}
            isClearable
            options={TYPE_ITEM}
            handlerChange={e => this._handlerField("type", e)}
          />

          <DatePicker
            className="datepicker"
            dateFormat="yyyy/MM/dd"
            onChange={this._handlerDate}
            selected={date}
            placeholderText="Выберите дату"
          />
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditorBody);
