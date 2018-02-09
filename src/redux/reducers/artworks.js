// import * as actions from "../actions/artworks"

export const initialState = {
  items: [], // Fetch Data
  search: '', // Search Input
  favorites: [], // ID's of Products
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
