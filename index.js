import React, { Component } from "react";
import { AppRegistry } from "react-native";
import { Provider } from "react-redux";

import store from "./app/store";
import App from "./app/App.js";

export default class ReactNativeReduxNavigation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store()}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent("ReactNativeReduxNavigation", () => ReactNativeReduxNavigation);
