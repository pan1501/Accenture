import { Model } from "../Model.js";
import jsonData from "../../assets/products.json";

export const actions = {
  LOAD_DATA({ commit }) {
    if (jsonData) {
      Model.data = jsonData;
      commit("SET_DATA_READY");
    }
  }
};
