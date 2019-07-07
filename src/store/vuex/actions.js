import state from "../vuex/state";
import jsonData from "../../assets/products.json";

export const actions = {
  LOAD_DATA() {
    if (jsonData) {
      state.rawData = jsonData;
      state.data_status = "Complete";
      state.data_ready = true;
    }
  }
};
