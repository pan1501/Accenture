import getters from "../../src/store/vuex/getters";

const selectedTypes = ["Beer", "Cider"];
const typeOptions = ["Beer", "Cider", "Wine"];

const state = { selectedTypes, typeOptions };

describe("getters", () => {
  it("Test out the selected type", () => {
    const selectedTypes = getters.getSelectedTypes(state);

    expect(selectedTypes).toEqual(selectedTypes);
  });
  it("Test type the type options", () => {
    const TypeOptions = getters.getTypeOptions(state);

    expect(TypeOptions).toEqual(typeOptions);
  });
});
