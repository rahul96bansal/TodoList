export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";

export const SHOW_ALL = "SHOW_ALL";
export const SHOW_COMPLETED = "SHOW_COMPLETED";
export const SHOW_ACTIVE = "SHOW_ACTIVE";
export const SHOW_SELECTED = "SHOW_SELECTED";

export const setVisibilityFilter = (filter) => ({
  type: SET_VISIBILITY_FILTER,
  filter,
});

export const VisibilityFilters = {
  SHOW_ALL: SHOW_ALL,
  SHOW_COMPLETED: SHOW_COMPLETED,
  SHOW_ACTIVE: SHOW_ACTIVE,
  SHOW_SELECTED: SHOW_SELECTED,
};
