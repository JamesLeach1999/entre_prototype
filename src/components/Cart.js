import React, { useRef, useState, useEffect, useReducer } from "react";
import cartReducers from "../reducers/cartReducer";
import data from "../data/product_data.json";
const Cart = () => {
  const [state, dispatch] = useReducer(cartReducers);
  var [clicked, setClicked] = useState(false);
  var [cart, setCart] = useState([]);
  var clickContainer = useRef();

  var getCart = () => {
    const userCart = JSON.parse(localStorage.getItem("user"));
    var u = [];
    console.log(userCart);
    if (userCart) {
      data.map((pro) => {
        userCart.cart.map((product) => {
          console.log(product);
          if (pro.id === parseInt(product.product)) {
            u.push(pro);
            setCart(u);
          }
        });
      });
    }
  };

  useEffect(() => {
    getCart();
  }, []);

  return (
    <div>
      {cart.map((p) => {
        return (
          <div style={{ maxWidth: "300px" }}>
            <h4>{p.name}</h4>
            <h4>{p.id}</h4>
            <h4>{p.buy}</h4>
            <img style={{ maxWidth: "100px" }} src={p.image} alt="" />
            <form>
              <button
                onClick={() => dispatch({ type: "REMOVE_BUY", payload: p.id })}
              >
                remove from cart
              </button>
            </form>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
