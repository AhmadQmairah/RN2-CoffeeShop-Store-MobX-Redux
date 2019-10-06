import * as actionTypes from "../actions/types";

const initialState = {
  coffeeShops: [],
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_COFFEESHOPS: {
      return { loading: false, coffeeShops: action.payload };
    }
    case actionTypes.COFFEESHOPS_LOADING: {
      return { ...state, loading: true };
    }

    default:
      return state;
  }
};
