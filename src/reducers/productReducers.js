function productReducers(state, action) {
  var { type, payload } = action;

  if (type === "GET_CAT") {
    var catItems = [...state.products, payload];

    var filtItems = catItems.filter((a) => {
      return a.cat === payload;
    });

    return {
      ...state,
      products: filtItems,
    };
  }
  if (type === "GET_ALL") {
    return {
      ...state,
    };
  }

  if(type=== "GET_PRODUCT"){
    var productItems = [...state.products, payload];

    var filtProduct = productItems.filter((a) => {
      return a.id === payload;
    });

    return {
      ...state,
      products: filtProduct,
    };
  }
}

export default productReducers;
