import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

// constants
import { DATE_OPTIONS } from "../../constants";

const mapStateToProps = state => ({ ...state.mainState });

class ItemBody extends Component {
  static propTypes = {
    item: PropTypes.object,
    color: PropTypes.string
  };

  render() {
    const { item, color } = this.props;
    const { text, title, type, date } = item;

    return (
      <Fragment>
        <h1 className="list-title">{title}</h1>
        <div className="list-text">{text}</div>
        <div className="list-date">
          {date.toLocaleString("ru", DATE_OPTIONS)}
        </div>
        <div className="list-type" style={{ backgroundColor: color }}>
          {type.label}
        </div>
      </Fragment>
    );
  }
}

export default connect(
  mapStateToProps,
  null
)(ItemBody);
