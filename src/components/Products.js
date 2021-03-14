import React, { useState, useContext, useEffect, useReducer } from "react";
import { Button, Row, Col, Container, CardDeck } from "react-bootstrap";
import { useParams } from "react-router";
import data from "../data/product_data.json";
import ProductCard from "./ProductCard";
import productReducer from "../reducers/productReducers";
import ProductContext from "../context/productContext";
import useGlobalState from "../hooks/useGlobalState";
const defaultState = {
  products: data,
  cat: "",
};

export const Products = ({ setCount }) => {
  var { cat } = useParams();
  const [state, dispatch] = useReducer(productReducer, defaultState);
  //  var [state, dispatch] = useGlobalState();

  //  console.log(state)

  useEffect(() => {
    if (cat) {
      dispatch({ type: "GET_CAT", payload: cat });
    } else {
      dispatch({ type: "GET_ALL", payload: cat });
    }
  }, [cat]);
  return (
    <Container>
      <Row lg={4} sm={2} xs={1} style={{ marginTop: "20px" }}>
        {state.products.map((product) => {
          return (
            <ProductContext.Provider value={{ product }}>
              <CardDeck style={{ marginTop: "20px", marginLeft: "10px" }}>
                <ProductCard style={{ marginTop: "20px" }} />
              </CardDeck>
            </ProductContext.Provider>
          );
        })}
      </Row>
    </Container>
  );
};
