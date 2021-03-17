import React, {
  useState,
  useContext,
  useEffect,
  useReducer,
  useCallback,
} from "react";
import { Button, Row, Col, Container, CardDeck } from "react-bootstrap";
import { useParams } from "react-router";
import data from "../data/product_data.json";
import ProductCard from "./ProductCard";
// import productReducer from "../reducers/productReducers";
import ProductContext from "../context/productContext";
import useGlobalState from "../hooks/useGlobalState";

export const Products = (props) => {
  var { cat } = useParams();
  console.log(props.i);
  // const {getIte} = useContext(ProductContext)
  // const [state, dispatch] = useReducer(productReducer, defaultState);
  //  var [state, dispatch] = useGlobalState();
  var [load, setLoad] = useState([]);
  var [loading, setloading] = useState(true);
  //  console.log(state)
  // var [pros, setPros] = useState(data)
  // console.log(data)

  const y = () => {
    if (cat) {
      // dispatch({ type: "GET_CAT", payload: { cat, data } });
      console.log("cat load");
      var catItems = props.i.filter((item) => {
        console.log(cat);
        return item.cat === cat;
      });
      console.log(catItems);
      setLoad(catItems);
      setloading(false);
    } else {
      // dispatch({ type: "GET_ALL", payload: data });
      setLoad(props.i);
      console.log("all load");
      setloading(false);
    }
    console.log(load);
  };

  useEffect(() => {
    y();
    console.log("use effect");
  }, [loading]);
  return (
    <Container>
      <Row lg={4} sm={2} xs={1} style={{ marginTop: "20px" }}>
        {load.map((product) => {
          return (
            // <ProductContext.Provider value={{ product }}>
            <CardDeck style={{ marginTop: "20px", marginLeft: "10px" }}>
              <ProductCard
                style={{ marginTop: "20px" }}
                products={product}
                data={data}
              />
            </CardDeck>
            // </ProductContext.Provider>
          );
        })}
      </Row>
    </Container>
  );
};
