import mutations from "../../src/store/vuex/mutations";

const selectedTypes = ["Cider"];
const typeOptions = ["Beer", "Cider", "Wine"];
const nestedData = {
  Beer: [
    {
      index: 0,
      isSale: false,
      price: "$49.99",
      productImage: "Product_1.jpeg",
      productName: "Pure Blonde Crate",
      type: "Beer"
    },
    {
      index: 1,
      isSale: true,
      price: "$39.99",
      productImage: "Product_2.jpeg",
      productName: "Pure Silver Crate",
      type: "Beer"
    }
  ],
  Cider: [
    {
      index: 2,
      isSale: false,
      price: "$49.99",
      productImage: "Product_3.jpeg",
      productName: "Pure Blonde Cider",
      type: "Cider"
    }
  ]
};

const state = { selectedTypes, typeOptions, nestedData };

describe("SET_SELECTED_TYPES", () => {
  it("update selected types", () => {
    mutations.SET_SELECTED_TYPES(state, ["Beer"]);

    expect(state.selectedTypes).toEqual(["Beer"]);
  });
});
