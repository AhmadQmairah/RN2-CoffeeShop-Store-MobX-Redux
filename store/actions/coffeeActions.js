import * as actionTypes from "../actions/types";
import axios from "axios";

export const getCoffeeShops = () => {
  return async dispatch => {
    //This function gets called by Redux Thunk
    try {
      const res = await axios.get("http://178.128.114.232/api/?format=json");
      const shops = res.data;

      dispatch({
        type: actionTypes.GET_COFFEESHOPS,
        payload: shops
      });
    } catch (err) {}
  };
};

export const setCoffeeShopsLoading = () => {
  return {
    type: actionTypes.COFFEESHOPS_LOADING
  };
};
