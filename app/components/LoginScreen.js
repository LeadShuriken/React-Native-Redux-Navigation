import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { SocialIcon, Avatar } from "react-native-elements";
import PropTypes from "prop-types";
import { normalizeSize } from "./../utils";

export default class LoginScreen extends Component {
  static navigationOptions = {
    title: "Login"
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.margin} />
        <View style={[styles.holder, { flexDirection: "row" }]}>
          <View style={styles.margin} />
          <View style={styles.holder}>
            <View style={styles.topFlex}>
              <Avatar
                width={normalizeSize(250)}
                rounded
                activeOpacity={0.7}
              />
            </View>
            <View style={styles.bottomFlex}>
              <SocialIcon
                fontStyle={styles.buttonFont}
                style={styles.button}
                title="Sign In With Google"
                button
                light={true}
                type="google-plus-official"
                onPress={() => navigation.dispatch({ type: "LOGIN" })}
              />
              <View style={styles.margin} />
              <SocialIcon
                fontStyle={styles.buttonFont}
                style={styles.button}
                title="Sign In With Facebook"
                button
                light={true}
                type="facebook"
                onPress={() => navigation.dispatch({ type: "LOGIN" })}
              />
            </View>
          </View>
          <View style={styles.margin} />
        </View>
        <View style={styles.margin} />
      </View>
    );
  }
}

LoginScreen.propTypes = {
  navigation: PropTypes.object.isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  margin: {
    flex: 0.5
  },
  holder: { flex: 10 },
  topFlex: {
    flex: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  bottomFlex: {
    flex: 1.2,
    flexDirection: "row"
  },
  button: {
    flex: 3,
    width: "100%",
    margin: 0
  },
  buttonFont: {
    fontSize: normalizeSize(14)
  },
  avatar: {
    width: "100%"
  }
});
