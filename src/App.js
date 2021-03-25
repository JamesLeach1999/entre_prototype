import React, { useState, useReducer, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Products } from "./components/Products";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import LoginPage from "./components/Login";
// import LoginPage from "./components/login/login"
// import {Register} from "./components/login/register"
import ProductPage from "./components/ProductPage";
import Add from "./components/Add";
import Register from "./components/Register";
import userData from "./data/user_data.json";
import userReducer from "./reducers/userReducer";
import productReducer from "./reducers/productReducers";
import useGlobalState from "./hooks/useGlobalState";
import { UserContext } from "./context/UserContext";
import ProductContext from "./context/productContext";
import data from "./data/product_data.json";
var defaultState = {
  id: "",
  name: "",
  email: "",
  password: "",
  cart: [],
  entered: [],
  auth: false,
};

function App() {
  var [state, dispatch] = useReducer(userReducer, defaultState);
  var [pros, setPros] = useState();
  var login = (email, password) => {
    if (email && password) {
      var loginObj = {
        email,
        password,
      };
      console.log(loginObj);
      dispatch({ type: "LOGIN_USER", payload: loginObj });
    } else {
      alert("Please provide login details");
    }
  };
  var register = (name, email, password) => {
    var regObj = {
      name,
      email,
      password,
    };
    dispatch({ type: "REGISTER_USER", payload: regObj });
  };

  var t = () => {
    var allItems = data;
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
      setPros(allItems);
    }
  };

  useEffect(() => {
    t();
    // console.log(pros);
  }, []);

  // console.log(localStorage);
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path={"/"}>
            <Navbar />
            <Header i={data}/>
          </Route>
          <Route path={"/store/:cat"}>
            <Navbar />
            <Products i={data} />
          </Route>
          {/* <ProductContext.Provider value={{ getIte }}> */}
          <Route path={"/store"}>
            <Navbar />
            <Products i={data} />
          </Route>
          {/* </ProductContext.Provider> */}
          <Route path={"/product/:id"}>
            <Navbar />
            <ProductPage />
          </Route>
          <Route path={"/checkout/:id"}>
            <Navbar />
            <ProductPage />
          </Route>
          <Route path={"/raffleWin/:id"}>
            <Navbar />
            <ProductPage />
          </Route>
          <Route path={"/add"}>
            <Navbar />
            <Add />
          </Route>
          <UserContext.Provider value={{ login, register }}>
            {/* <Route path={"/login"}>
              <Navbar />
              <LoginPage />
            </Route> */}
            <Route path={"/register"}>
              <Navbar />
              <Register />
            </Route>
          </UserContext.Provider>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
