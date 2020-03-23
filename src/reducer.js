import { Map } from "immutable";

export const initialState = Map({
  count: 1
});

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
