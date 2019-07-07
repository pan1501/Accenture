import mutations from "../../src/store/vuex/mutations";

describe("mutations", () => {
  // NestedData testing
  it("Test nested data output", () => {
    const rawData = [
      {
        index: 0,
        isSale: false,
        price: "$49.99",
        productImage: "Product_1.jpeg",
        productName: "Pure Red Crate",
        type: "Wine"
      },
      {
        index: 0,
        isSale: false,
        price: "$39.99",
        productImage: "Product_2.jpeg",
        productName: "Pure Green Crate",
        type: "Cider"
      },
      {
        index: 0,
        isSale: false,
        price: "$29.99",
        productImage: "Product_3.jpeg",
        productName: "Pure Blue Crate",
        type: "Beer"
      }
    ];
    const expectedNestedData = {
      Beer: [
        {
          index: 0,
          isSale: false,
          price: "$29.99",
          productImage: "Product_3.jpeg",
          productName: "Pure Blue Crate",
          type: "Beer"
        }
      ],
      Cider: [
        {
          index: 0,
          isSale: false,
          price: "$39.99",
          productImage: "Product_2.jpeg",
          productName: "Pure Green Crate",
          type: "Cider"
        }
      ],
      Wine: [
        {
          index: 0,
          isSale: false,
          price: "$49.99",
          productImage: "Product_1.jpeg",
          productName: "Pure Red Crate",
          type: "Wine"
        }
      ]
    };
    const state = { rawData };
    mutations.SET_NESTED_DATA(state, "type");

    expect(state.nestedData).toEqual(expectedNestedData);
  });
  // Select types testing
  it("Test select empty types", () => {
    const state = {};
    const expectedSelectedTypes = [];
    mutations.SET_SELECTED_TYPES(state, expectedSelectedTypes);

    expect(state.selectedTypes).toEqual([]);
  });
  it("test select single types", () => {
    const state = {};
    const expectedSelectedTypes = ["Beer"];
    mutations.SET_SELECTED_TYPES(state, expectedSelectedTypes);

    expect(state.selectedTypes).toEqual(["Beer"]);
  });
  it("Test select multiple types", () => {
    const state = {};
    const expectedSelectedTypes = ["Beer", "Cider"];
    mutations.SET_SELECTED_TYPES(state, ["Beer", "Cider"]);

    expect(state.selectedTypes).toEqual(expectedSelectedTypes);
  });
  // Filter testing
  it("Test to get filter options", () => {
    const nestedData = {
      Beer: [
        {
          index: 0,
          isSale: false,
          price: "$29.99",
          productImage: "Product_3.jpeg",
          productName: "Pure Blue Crate",
          type: "Beer"
        }
      ],
      Cider: [
        {
          index: 0,
          isSale: false,
          price: "$39.99",
          productImage: "Product_2.jpeg",
          productName: "Pure Green Crate",
          type: "Cider"
        }
      ],
      Wine: [
        {
          index: 0,
          isSale: false,
          price: "$49.99",
          productImage: "Product_1.jpeg",
          productName: "Pure Red Crate",
          type: "Wine"
        }
      ]
    };
    const expectedTypeOptions = ["Beer", "Cider", "Wine"];
    const state = { nestedData };
    mutations.SET_FILTER_OPTIONS(state);

    expect(state.typeOptions).toEqual(expectedTypeOptions);
  });

  it("Test to select empty filter", () => {
    const selectedTypes = [];
    const typeOptions = ["Beer", "Cider", "Wine"];
    const nestedData = {
      Beer: [
        {
          index: 0,
          isSale: false,
          price: "$29.99",
          productImage: "Product_3.jpeg",
          productName: "Pure Blue Crate",
          type: "Beer"
        }
      ],
      Cider: [
        {
          index: 1,
          isSale: false,
          price: "$39.99",
          productImage: "Product_2.jpeg",
          productName: "Pure Green Crate",
          type: "Cider"
        }
      ],
      Wine: [
        {
          index: 2,
          isSale: false,
          price: "$49.99",
          productImage: "Product_1.jpeg",
          productName: "Pure Red Crate",
          type: "Wine"
        }
      ]
    };
    const state = { selectedTypes, typeOptions, nestedData };
    const expectedFilteredData = [
      {
        index: 0,
        isSale: false,
        price: "$29.99",
        productImage: "Product_3.jpeg",
        productName: "Pure Blue Crate",
        type: "Beer"
      },
      {
        index: 1,
        isSale: false,
        price: "$39.99",
        productImage: "Product_2.jpeg",
        productName: "Pure Green Crate",
        type: "Cider"
      },
      {
        index: 2,
        isSale: false,
        price: "$49.99",
        productImage: "Product_1.jpeg",
        productName: "Pure Red Crate",
        type: "Wine"
      }
    ];
    mutations.FILTER_DATA(state);

    expect(state.filteredData).toEqual(expectedFilteredData);
  });
  it("Test to select one filter", () => {
    const selectedTypes = ["Cider"];
    const typeOptions = ["Beer", "Cider", "Wine"];
    const nestedData = {
      Beer: [
        {
          index: 0,
          isSale: false,
          price: "$29.99",
          productImage: "Product_3.jpeg",
          productName: "Pure Blue Crate",
          type: "Beer"
        }
      ],
      Cider: [
        {
          index: 0,
          isSale: false,
          price: "$39.99",
          productImage: "Product_2.jpeg",
          productName: "Pure Green Crate",
          type: "Cider"
        }
      ],
      Wine: [
        {
          index: 0,
          isSale: false,
          price: "$49.99",
          productImage: "Product_1.jpeg",
          productName: "Pure Red Crate",
          type: "Wine"
        }
      ]
    };
    const state = { selectedTypes, typeOptions, nestedData };
    const expectedFilteredData = [
      {
        index: 0,
        isSale: false,
        price: "$39.99",
        productImage: "Product_2.jpeg",
        productName: "Pure Green Crate",
        type: "Cider"
      }
    ];
    mutations.FILTER_DATA(state);

    expect(state.filteredData).toEqual(expectedFilteredData);
  });
  it("Test to select multiple filter", () => {
    const selectedTypes = ["Cider", "Beer"];
    const typeOptions = ["Beer", "Cider", "Wine"];
    const nestedData = {
      Beer: [
        {
          index: 0,
          isSale: false,
          price: "$29.99",
          productImage: "Product_3.jpeg",
          productName: "Pure Blue Crate",
          type: "Beer"
        }
      ],
      Cider: [
        {
          index: 0,
          isSale: false,
          price: "$39.99",
          productImage: "Product_2.jpeg",
          productName: "Pure Green Crate",
          type: "Cider"
        }
      ],
      Wine: [
        {
          index: 0,
          isSale: false,
          price: "$49.99",
          productImage: "Product_1.jpeg",
          productName: "Pure Red Crate",
          type: "Wine"
        }
      ]
    };
    const state = { selectedTypes, typeOptions, nestedData };
    const expectedFilteredData = [
      {
        index: 0,
        isSale: false,
        price: "$39.99",
        productImage: "Product_2.jpeg",
        productName: "Pure Green Crate",
        type: "Cider"
      },
      {
        index: 0,
        isSale: false,
        price: "$29.99",
        productImage: "Product_3.jpeg",
        productName: "Pure Blue Crate",
        type: "Beer"
      }
    ];
    mutations.FILTER_DATA(state);

    expect(state.filteredData).toEqual(expectedFilteredData);
  });
});

// describe("SET_SELECTED_TYPES", () => {
// });

// describe("FILTER_DATA", () => {
//   it("Filter out data base on selected type", () => {
//     mutations.FILTER_DATA(state, ["Cider"]);

//     expect(state.filteredData).toEqual({
//       index: 2,
//       isSale: false,
//       price: "$49.99",
//       productImage: "Product_3.jpeg",
//       productName: "Pure Blonde Cider",
//       type: "Cider"
//     });
//   });
// });