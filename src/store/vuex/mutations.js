import { Model } from "../Model.js";

export const mutations = {
    SET_DATA_READY: (state) => {
        // Initial data parsing
        // at this point forms are stored in the model
        var data = Model.getData();

        state.data_status = "Complete.";
        state.data_ready = true;
        debugger;
    }
};
