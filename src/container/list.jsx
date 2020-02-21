import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

// components
import Item from "./Item";

const mapStateToProps = state => ({ ...state.mainState });

class List extends Component {
  static propTypes = {
    data: PropTypes.array,
    sort: PropTypes.object
  };

  _sortData = () => {
    const { data, sort } = this.props;

    switch (sort.value) {
      case "sort_new":
        return data.sort((a, b) => (a.date > b.date ? 1 : -1));

      case "sort_old":
        return data.sort((a, b) => (a.date > b.date ? -1 : 1));

      case "sort_type":
        return data.sort((a, b) => (a.type.value > b.type.value ? 1 : -1));

      case "sort_abc":
        return data.sort((a, b) => (a.title > b.title ? 1 : -1));

      default:
        break;
    }
  };

  render() {
    const dataList = this._sortData();

    return dataList && dataList.length ? (
      <div className="list">
        {dataList.map(item => (
          <Item key={item.id} item={item} />
        ))}
      </div>
    ) : (
      <div className="list-item-placeholder">Записи отсутствуют</div>
    );
  }
}

export default connect(
  mapStateToProps,
  null
)(List);
