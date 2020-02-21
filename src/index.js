import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import store from "./reducers/index";
import Layout from "./container/layout";

import "./styles/index.scss";

ReactDOM.render(
  <Provider store={store}>
    <Layout />
  </Provider>,
  document.getElementById("root")
);
