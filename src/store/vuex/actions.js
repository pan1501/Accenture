import { Model } from "../Model.js";
import jsonData from "../../assets/products.json";

export const actions = {
    LOAD_DATA: function ({ commit }) {
        if (jsonData) {
            Model.data = jsonData;
            commit("SET_DATA_READY");
        }
    }
};
