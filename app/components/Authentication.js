import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { SocialIcon } from "react-native-elements";
import { View, StyleSheet } from "react-native";
import { NavigationActions } from "react-navigation";
import { normalizeSize } from "./../utils";

class Authentication extends Component {
  render() {
    let { isLoggedIn, dispatchLogout, dispatchGoToLoginScreen } = this.props;
    return (
      <SocialIcon
        raised
        button
        light
        fontStyle={styles.buttonFont}
        onPress={isLoggedIn ? dispatchLogout : dispatchGoToLoginScreen}
        title={isLoggedIn ? "Log Out" : "Open Login Screen"}
      />
    );
  }
}

Authentication.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  dispatchLogout: PropTypes.func.isRequired,
  dispatchGoToLoginScreen: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isLoggedIn: state.authentication.isLoggedIn
});

const mapDispatchToProps = dispatch => ({
  dispatchLogout: () => dispatch({ type: "LOGOUT" }),
  dispatchGoToLoginScreen: () =>
    dispatch(NavigationActions.navigate({ routeName: "Login" }))
});

export default connect(mapStateToProps, mapDispatchToProps)(Authentication);

const styles = StyleSheet.create({
  buttonFont: {
    left: normalizeSize(-6),
    fontSize: normalizeSize(15)
  }
});
