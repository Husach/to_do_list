import React from "react";
import Modal from "react-modal";
import Btn from "./btn";
import PropTypes from "prop-types";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

const OwnModal = ({ btnList, status, title, text }) => {
  return (
    <Modal isOpen={status} style={customStyles}>
      <h2 className="modal_title">{title}</h2>
      <div className="modal_text">{text}</div>
      <div className="modal_controls">
        {btnList.map(item => {
          return <Btn title={item.name} handlerClick={item.method} />;
        })}
      </div>
    </Modal>
  );
};

OwnModal.propTypes = {
  btnList: PropTypes.array,
  status: PropTypes.bool,
  title: PropTypes.string,
  text: PropTypes.string
};

export default OwnModal;
