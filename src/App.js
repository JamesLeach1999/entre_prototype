import React, { useState, useReducer } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Products } from "./components/Products";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import ProductPage from "./components/ProductPage";
import Register from "./components/Register";
import userData from "./data/user_data.json";
import userReducer from "./reducers/userReducer";
import useGlobalState from "./hooks/useGlobalState";
import { UserContext } from "./context/UserContext";
import ProductContext from "./context/productContext";
var defaultState = {
  id: "",
  name: "",
  email: "",
  password: "",
  cart: [],
  entered: [
    
  ],
  auth: false,
};

function App() {
  var [state, dispatch] = useReducer(userReducer, defaultState);

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

  console.log(localStorage);
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path={"/"}>
            <Navbar />
            <Header />
          </Route>
            <Route path={"/store/:cat"}>
              <Navbar />
              <Products />
            </Route>
            <Route path={"/store"}>
              <Navbar />
              <Products />
            </Route>
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
          <UserContext.Provider value={{ login, register }}>
            <Route path={"/login"}>
              <Navbar />
              <Login />
            </Route>
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
