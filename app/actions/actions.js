import { loadValue, saveValue } from "./actionHelpers";

export function login() {
  return { type: "LOGIN" };
}

export function logout() {
  return { type: "LOGOUT" };
}

export function selectTour(tour) {
  return { type: "SELECT_ITEM", tour };
}

export function fetchItems() {
  return dispatch => {
    loadValue("ITEMS")
      .then(data => {
        if (data) {
          dispatch(getItems(data));
        } else {
          // perform a fetch here for the items
          const scheme = {};
          saveValue("ITEMS", Object.assign([], scheme)).then(() => {
            dispatch(getItems(Object.assign([], scheme)));
          });
        }
      })
      .catch(err => console.log("err:", err));
  };
}

export function getItems(items) {
  return {
    type: "GET_ITEMS",
    items
  };
}
