import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

// actions
import { generalAction, generalParamsAction } from "../../actions";

// constants
import { ACTIONS } from "../../constants";

// components
import OwnModal from "../../components/ownModal";
import BtnIconEdit from "../../components/btn/btnIconEdit";
import BtnIconDelete from "../../components/btn/btnIconDelete";

const mapStateToProps = state => ({ ...state.mainState });

const mapDispatchToProps = {
  changeModalStatusAction: generalAction(ACTIONS.CHANGE_MODAL_STATE),
  clearIdForDeletingAction: generalAction(ACTIONS.CLEAR_OBJ_FOR_DELETING),
  setIdForDeletingAction: generalParamsAction(ACTIONS.SET_OBJ_FOR_DELETING),
  setEditableObjAction: generalParamsAction(ACTIONS.SET_EDITABLE_OBJ),
  updateDataAction: generalParamsAction(ACTIONS.UPDATE_DATA)
};

class ItemControls extends Component {
  static propTypes = {
    id: PropTypes.string,
    modalIsOpen: PropTypes.bool,
    data: PropTypes.array,
    objForDeleting: PropTypes.object,

    handlerEdit: PropTypes.func,
    handlerDelete: PropTypes.func,
    updateDataAction: PropTypes.func,
    setEditableObjAction: PropTypes.func,
    setIdForDeletingAction: PropTypes.func,
    changeModalStatusAction: PropTypes.func,
    clearIdForDeletingAction: PropTypes.func
  };

  _handlerBtnEdit = id => {
    const { data, setEditableObjAction } = this.props;

    const editableObj = data.find(item => item.id === id);

    setEditableObjAction(editableObj);
  };

  _handlerBtnDelete = idForDeleting => {
    const {
      data,
      setIdForDeletingAction,
      changeModalStatusAction
    } = this.props;

    const dataForDeleting = data.filter(item => item.id === idForDeleting);

    setIdForDeletingAction(dataForDeleting[0]);
    changeModalStatusAction();
  };

  _handlerDeleteItem = () => {
    const {
      data,
      objForDeleting,
      updateDataAction,
      clearIdForDeletingAction
    } = this.props;

    const updatedData = data.filter(item => item.id !== objForDeleting.id);

    updateDataAction([...updatedData]);
    clearIdForDeletingAction();

    this._closeModal();
  };

  _closeModal = () => {
    const { changeModalStatusAction } = this.props;

    changeModalStatusAction();
  };

  _modalBtns = () => [
    {
      className: "btn-modal btn-modal-delete",
      name: "Удалить",
      method: this._handlerDeleteItem
    },
    {
      className: "btn-modal btn-modal-close",
      name: "Отменить",
      method: this._closeModal
    }
  ];

  render() {
    const { id, modalIsOpen, objForDeleting = null } = this.props;

    const modalText = `Вы подтверждаете удаление записи ${
      objForDeleting.title
    } ?`;

    return (
      <div className="item-controls">
        <BtnIconDelete handlerClick={() => this._handlerBtnDelete(id)} />
        <BtnIconEdit handlerClick={() => this._handlerBtnEdit(id)} />

        <OwnModal
          status={modalIsOpen}
          title={"Удалить запись"}
          text={modalText}
          btnList={this._modalBtns()}
        />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemControls);
