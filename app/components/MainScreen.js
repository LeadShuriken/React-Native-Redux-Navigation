import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { SocialIcon } from "react-native-elements";
import { NavigationActions } from "react-navigation";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { normalizeSize } from "./../utils";

import { Authentication, LoginMessage } from "./index";

class MainScreen extends Component {
  static navigationOptions = {
    title: "Main"
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { isLoggedIn, dispatchGoToItems } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.margin} />
        <View style={[styles.holder, { flexDirection: "row" }]}>
          <View style={styles.margin} />
          <View style={styles.holder}>
            <View style={styles.topFlex}>
              <LoginMessage />
            </View>
            <View style={styles.bottomFlex}>
              <View style={styles.button}>
                <Authentication />
              </View>
              {isLoggedIn && (
                <View style={styles.button}>
                  <SocialIcon
                    raised
                    button
                    light
                    fontStyle={styles.buttonFont}
                    onPress={dispatchGoToItems}
                    title={"Go to items"}
                  />
                </View>
              )}
            </View>
          </View>
          <View style={styles.margin} />
        </View>
        <View style={styles.margin} />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.authentication.isLoggedIn
});

const mapDispatchToProps = dispatch => ({
  dispatchGoToItems: () => {}
  // dispatch(NavigationActions.navigate({ routeName: "Items" }))
});

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  margin: {
    flex: 0.5
  },
  topFlex: {
    flex: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },
  bottomFlex: {
    flex: 1.2,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  button: {
    flex: 2,
    margin: 0
  },
  buttonFont: {
    left: normalizeSize(-8),
    fontSize: normalizeSize(15)
  },
  holder: { flex: 10 }
});

MainScreen.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
};
