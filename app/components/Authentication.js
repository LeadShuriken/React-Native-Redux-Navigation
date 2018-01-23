import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { SocialIcon } from "react-native-elements";
import { View, StyleSheet } from "react-native";
import { NavigationActions } from "react-navigation";
import { normalizeSize } from "./../utils";

class Authentication extends Component {
  render() {
    let { isLoggedIn, logout, loginScreen } = this.props;
    return (
      <SocialIcon
        raised
        button
        light
        fontStyle={styles.buttonFont}
        onPress={isLoggedIn ? logout : loginScreen}
        title={isLoggedIn ? "Log Out" : "Open Login Screen"}
      />
    );
  }
}

Authentication.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
  loginScreen: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isLoggedIn: state.authentication.isLoggedIn
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch({ type: "LOGOUT" }),
  loginScreen: () =>
    dispatch(NavigationActions.navigate({ routeName: "Login" }))
});

export default connect(mapStateToProps, mapDispatchToProps)(Authentication);

const styles = StyleSheet.create({
  buttonFont: {
    left: normalizeSize(-6),
    fontSize: normalizeSize(15)
  }
});
