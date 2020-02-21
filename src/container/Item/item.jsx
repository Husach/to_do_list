import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

// components
import ItemBody from "./itemBody";
import ItemControls from "./itemControls";

const mapStateToProps = state => ({ ...state.mainState });

class Item extends Component {
  static propTypes = {
    item: PropTypes.object,
    elementWidth: PropTypes.number
  };

  _getStyle = type => {
    switch (type) {
      case "1":
        return "red";

      case "2":
        return "orange";

      case "3":
        return "brown";

      case "4":
        return "blue";

      default:
        break;
    }
  };

  render() {
    const { item, elementWidth } = this.props;
    const { id, type } = item;
    const color = this._getStyle(type.value);

    return (
      <div
        className="list-item"
        style={{ width: elementWidth, borderColor: color }}
      >
        <ItemBody item={item} color={color} />
        <ItemControls id={id} />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  null
)(Item);
