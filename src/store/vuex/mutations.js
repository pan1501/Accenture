import d3 from "d3";

export const mutations = {
  SET_NESTED_DATA(state, nestedBy) {
    state.nestedData = d3
      .nest()
      .key(d => d[nestedBy])
      .map(state.rawData);
  },
  SET_FILTER_OPTIONS(state) {
    state.typeOptions = Object.keys(state.nestedData);
  },
  SET_SELECTED_TYPES(state, newSelectedTypes) {
    state.selectedTypes = newSelectedTypes;
  },
  FILTER_DATA(state) {
    // Select nothing is select everything
    let typePassed = state.typeOptions;
    let filteredData = [];

    if (state.selectedTypes && state.selectedTypes.length > 0) {
      typePassed = state.selectedTypes;
    }

    typePassed.forEach(eachType => {
      filteredData = filteredData.concat(state.nestedData[eachType]);
    });

    state.filteredData = filteredData;
  }
};

export default mutations;
