import { NavigationActions } from "react-navigation";
import { AppNavigator } from "./../App";
import { LOGIN, LOGOUT } from "./../actions/types";

// Start with two routes: The Main screen, with the Login screen on top.
const firstAction = AppNavigator.router.getActionForPathAndParams("Main");
const tempNavState = AppNavigator.router.getStateForAction(firstAction);
const secondAction = AppNavigator.router.getActionForPathAndParams("Login");
const initialState = AppNavigator.router.getStateForAction(
  secondAction,
  tempNavState
);

export default function navigation(state = initialState, action) {
  let nextState;
  switch (action.type) {
    case LOGIN:
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.back(),
        state
      );
      break;
    case LOGOUT:
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: "Login" }),
        state
      );
      break;
    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
      break;
  }
  return nextState || state;
}
