import * as types from "../actions/testActions";

function testReducer(state = {}, action) {
  switch (action.type) {
    case types.SET_TITLE:
      return Object.assign({}, state, {
        title: action.title
      });
    default:
      return state;
  }
}

export default testReducer;
