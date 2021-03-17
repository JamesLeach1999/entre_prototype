
  // import data from "../data/product_data.json";
function productReducers(state, action) {
  var { type, payload } = action;

  if (type === "GET_CAT") {
    var catItems = [...state.products]
    var filtItems = catItems.filter((a) => {
      return a.cat === payload.cat;
    });

    return {
      // ...state,
      products: filtItems,
      loaded: true,
    };
  }
  if (type === "GET_ALL") {
    var allItems = payload;
    console.log(allItems);
    var obj = [];
    if (localStorage.getItem("localProducts")) {
      var pushAll = JSON.parse(localStorage.getItem("localProducts"));
      if (pushAll) {
        for (var j = 0; j < pushAll.length; j++) {
          if (pushAll[j].name !== "") {
            allItems.push(pushAll[j]);
          }
        }
      }
    }
    console.log(obj);
    return {
      // ...state,
      products: allItems,
      loaded: true,
    };
  }

  if (type === "GET_PRODUCT") {
    var productItems = [...state.products];

    if (localStorage.getItem("localProducts")) {
      var pushProd = JSON.parse(localStorage.getItem("localProducts"));
      console.log(pushProd);
      if (pushProd) {
        for (var k = 0; k < pushProd.length; k++) {
          if (pushProd[k].name !== "") {
            productItems.push(pushProd[k]);
          }
        }
      }
    }

    console.log(productItems);

    var filtProduct = productItems.filter((a) => {
      return a.id === payload;
    });

    return {
      // ...state,
      products: filtProduct,
    };
  }
}

export default productReducers;
