import { SET_VISIBILITY_FILTER } from "./filterTypes";

export const setVisibilityFilter = (filter = "SHOW_ALL") => {
  return {
    type: SET_VISIBILITY_FILTER,
    filter
  };
};
