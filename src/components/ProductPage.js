import React, { useState, useContext, useEffect, useReducer } from "react";
import { Button, Row, Col, Container, CardDeck, Image } from "react-bootstrap";
import { useParams } from "react-router-dom";
import data from "../data/product_data.json";
import cartreducer from "../reducers/cartReducer";
import ProductCard from "./ProductCard";
import reducer from "../reducers/productReducers";
import productContext from "../context/productContext";
import useGlobalState from "../hooks/useGlobalState";

const d = data

const ProductPage = (props) => {
  // console.log(props)
  var { id } = useParams();
  const [added, setAdded] = useState(false);
  const [brought, setBrought] = useState(0);
  const [dta, setDta] = useState(false);
  var [state, dispatch] = useReducer(cartreducer);

  useEffect(() => {

    
    var filtProd = d.filter((product) => {
      return product.id === parseInt(id);
    });

    setDta(filtProd[0]);
  }, []);

  console.log();
  return (
    <Container style={{ border: "1px solid black", width: "120%" }}>
      <Row>
        {added && <h1>added to cart</h1>}
        <Col style={{ border: "1px solid black", flex: "4" }}>
          <Image src={`${dta.image}`} style={{ maxWidth: "70%" }} />
        </Col>
        <Col style={{ border: "1px solid black", flex: "6" }}>
          {dta.name}
          {dta.price}
          <Button
            onClick={(e) => {
              dispatch({ type: "ADD_BUY", payload: id });
              setAdded(true);
              e.preventDefault();
            }}
          >
            Buy now
          </Button>

          <form>
            <input
              type="number"
              value={brought}
              onChange={(e) => setBrought(e.target.value)}
            />
            <button
              type="submit"
              onClick={(e) => {
                e.preventDefault()
                dispatch({
                  type: "ADD_RAFFLE",
                  payload: {
                    id: dta.id,
                    total: dta.numTicks,
                    win: dta.winningNums,
                    ticketsBrought: brought,
                  },
                });
              }}
            >
              buy tickets
            </button>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductPage;
