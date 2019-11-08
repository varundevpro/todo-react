import { SET_VISIBILITY_FILTER } from "./filterTypes";
const initialState = "SHOW_ALL";

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
};
