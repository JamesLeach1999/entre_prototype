import React from "react";

const cartReducer = (state, action) => {
  if (action.type === "ADD_BUY") {
    var userCart = JSON.parse(localStorage.getItem("user"));

    userCart.cart.push({ brought: false, product: action.payload });
    localStorage.setItem("user", JSON.stringify(userCart));

    return { ...state };
  }
  if (action.type === "ADD_RAFFLE") {
    var userEntered = JSON.parse(localStorage.getItem("user"));

    var totalTicks = action.payload.total;
    var totalBrought = parseInt(action.payload.ticketsBrought);
    var winningNums = action.payload.win;
    var i = 0;
    var u = [];
    var randomWin = Math.floor(Math.random() * 10 + 1);

    while (i < totalBrought) {
      console.log(i%6)
      if (i % 5 === 0) {
        u.push({
          ticket: winningNums[randomWin],

          product: action.payload.id,
        });
      } else {
        u.push({
          ticket: Math.floor(Math.random() * totalTicks + 1),

          product: action.payload.id,
        });
      }
      i++;
    }

    u = u.filter(function(item){
      return item.ticket !== null
    })
    console.log(u)

    userEntered.entered.push(u);
    localStorage.setItem("user", JSON.stringify(userEntered));

    return { ...state };
  }

  if (action.type === "REMOVE_BUY") {
    var art = JSON.parse(localStorage.getItem("user"));

    var filtCart = art.cart.filter((fil) => {
      console.log(fil)
      return parseInt(fil.product) !== action.payload
    })

    art.cart = filtCart
    console.log(art)
    localStorage.setItem("user", JSON.stringify(art));

    return { ...state };
  }
};

export default cartReducer;
