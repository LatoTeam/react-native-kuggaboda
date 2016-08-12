import * as types from "./actionTypes";

export function setTitle(title) {
  return {
    type: types.SET_TITLE,
    title
  };
}
