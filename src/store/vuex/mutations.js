import { Model } from "../Model.js";

export const mutations = {
    SET_DATA_READY: (state) => {
        // Initial data parsing
        state.typeOptions = Model.getTypeOptions();
        state.filteredData = Model.filterByTypes(state.selectedTypes);

        state.data_status = "Complete";
        state.data_ready = true;
    },
    SET_SELECTED_TYPES (state, newSelectedTypes) {
        state.selectedTypes = newSelectedTypes;
    },
    FILTER_DATA (state) {
        state.filteredData = Model.filterByTypes(state.selectedTypes);
    }
};
