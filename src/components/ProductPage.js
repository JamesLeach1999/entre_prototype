import React, { useState, useContext, useEffect, useReducer } from "react";
import { Button, Row, Col, Container, CardDeck, Image } from "react-bootstrap";
import { useParams, useLocation } from "react-router-dom";
import data from "../data/product_data.json";
import cartreducer from "../reducers/cartReducer";
import ProductCard from "./ProductCard";
import reducer from "../reducers/productReducers";
import productContext from "../context/productContext";
import useGlobalState from "../hooks/useGlobalState";
import { useHistory } from "react-router";
const d = data;

const ProductPage = (props) => {
  const history = useHistory();
  // console.log(props)
  var { id } = useParams();
  const location = useLocation();
  const [added, setAdded] = useState(false);
  const [brought, setBrought] = useState(0);
  const [dta, setDta] = useState([]);
  var [state, dispatch] = useReducer(cartreducer);
  const [display, setDisplay] = useState(false);

  // k so we cant access use param in testing
  // looks like we got the state var working though

  const goBack = () => {
    history.goBack();
  };

  return (
    <Container style={{ border: "1px solid black", width: "120%" }}>
      <Row>
        <h1>{`${id}`}</h1>
        {added && <h1>added to cart</h1>}
        <Col style={{ border: "1px solid black", flex: "4" }}>
          <Image
            data-testid="imaggge"
            src={`${data[id - 1].image}`}
            style={{ maxWidth: "70%" }}
          />
        </Col>
        <Col style={{ border: "1px solid black", flex: "6" }}>
          <p data-testid="name">{data[id - 1].name}</p>
          {data[id - 1].price}
          <Button
            onClick={(e) => {
              // dispatch({ type: "ADD_BUY", payload: id });
              setDisplay(true);
              setAdded(true);
              e.preventDefault();
            }}
            data-testid="buy-now"
          >
            Buy now
          </Button>

          <form>
            <input
              type="number"
              data-testid="brought"
              value={brought}
              onChange={(e) => setBrought(e.target.value)}
            />
            <button
              type="submit"
              data-testid="submit"
              onClick={(e) => {
                e.preventDefault();
                setDisplay(true);
                // dispatch({
                //   type: "ADD_RAFFLE",
                //   payload: {
                //     id: id,
                //     total: data[id - 1].numTicks,
                //     win: data[id - 1].winningNums,
                //     ticketsBrought: brought,
                //   },
                // });
              }}
            >
              buy tickets
            </button>
          </form>
          {display && (
            <div>
              <h3 data-testid="confirm">Raffle entered</h3>
              <button
                type="button"
                data-testid="backBtn"
                onClick={() => goBack()}
              >
                Back to store
              </button>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default ProductPage;
