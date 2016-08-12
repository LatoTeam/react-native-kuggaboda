import * as types from "../actions/actionTypes";

const initialTestState = {
  title: ''
};

export default function(state = initialTestState, action) {
  switch (action.type) {
    case types.SET_TITLE:
      return Object.assign({}, state, {
        title: action.title
      });
    default:
      return state;
  }
}
