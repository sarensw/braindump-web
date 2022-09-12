import React from "./_snowpack/pkg/react.js";
import ReactDOM from "./_snowpack/pkg/react-dom.js";
import {Provider} from "./_snowpack/pkg/react-redux.js";
import {Home} from "./home/Home.js";
import {store} from "./store.js";
ReactDOM.render(/* @__PURE__ */ React.createElement(Provider, {
  store
}, /* @__PURE__ */ React.createElement(Home, null)), document.getElementById("container"));
