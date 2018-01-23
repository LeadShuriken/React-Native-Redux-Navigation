import { SELECT_ITEM, GET_ITEMS } from "./../actions/types";

const initialState = {
  tours: [],
  selected: undefined
};

export default function itemsReducer(state = initialState, action) {
  switch (action.type) {
    case SELECT_ITEM:
      return {
        ...state,
        selected: state.items.filter(p => p.id === action.item.id)[0]
      };
    case GET_ITEMS:
      return {
        ...state,
        items: action.items
      };
    default:
      return state;
  }
}
