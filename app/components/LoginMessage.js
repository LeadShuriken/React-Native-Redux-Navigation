import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SocialIcon } from "react-native-elements";
import { NavigationActions } from "react-navigation";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { normalizeSize } from "./../utils";

class LoginMessage extends Component {
  render() {
    const { isLoggedIn, dispatch } = this.props;
    return (
      <View>
        {isLoggedIn && (
          <View>
            <Text style={styles.welcome}>{"Welcome to The App"}</Text>
            <SocialIcon
              raised
              button
              light
              fontStyle={styles.buttonFont}
              onPress={() =>
                dispatch(NavigationActions.navigate({ routeName: "Login" }))
              }
              title="Profile"
            />
          </View>
        )}
        {isLoggedIn || (
          <Text style={styles.welcome}>
            You have to be logged in to use City Breaks
          </Text>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  welcome: {
    color: "black",
    fontSize: normalizeSize(30),
    textAlign: "center"
  },
  buttonFont: {
    left: normalizeSize(-8),
    fontSize: normalizeSize(15)
  }
});

const mapStateToProps = state => ({
  isLoggedIn: state.authentication.isLoggedIn
});

export default connect(mapStateToProps)(LoginMessage);

LoginMessage.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired
};
