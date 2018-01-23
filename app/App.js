import { connect } from "react-redux";
import React, { Component } from "react";
import { Icon } from "react-native-elements";

import {
  StackNavigator,
  NavigationActions,
  addNavigationHelpers
} from "react-navigation";

import { LoginScreen, MainScreen } from "./components";
import { normalizeSize } from "./utils";

let dispatchGotoProfile;
let dispatchGotoMain;

class App extends Component {
  constructor(props) {
    super(props);
    const { dispatch } = props;
    dispatchGotoLogin = function() {
      dispatch(NavigationActions.navigate({ routeName: "Login" }));
    };
    dispatchGotoMain = function() {
      dispatch(NavigationActions.navigate({ routeName: "Main" }));
    };
  }

  render() {
    const { dispatch, navigation } = this.props;
    return (
      <AppNavigator
        navigation={addNavigationHelpers({ dispatch, state: navigation })}
      />
    );
  }
}

export const AppNavigator = StackNavigator(
  {
    Main: { screen: MainScreen },
    Login: { screen: LoginScreen }
  },
  {
    headerMode: "float",
    mode: "card",
    navigationOptions: {
      headerStyle: {
        height: normalizeSize(40)
      },
      headerTitleStyle: {
        fontWeight: "300",
        fontSize: normalizeSize(18),
        left: normalizeSize(-15)
      },
      headerTintColor: "gray",
      gesturesEnabled: true,
      headerLeft: (
        <Icon
          name="home"
          size={normalizeSize(28)}
          iconStyle={{ left: normalizeSize(5) }}
          color="#3b5998"
          onPress={() => dispatchGotoMain()}
        />
      ),
      headerRight: (
        <Icon
          name="menu"
          size={normalizeSize(30)}
          iconStyle={{ right: normalizeSize(10) }}
          color="#3b5998"
          onPress={() => dispatchGotoLogin()}
        />
      )
    }
  }
);

const mapStateToProps = state => ({
  navigation: state.navigation
});

export default connect(mapStateToProps)(App);
