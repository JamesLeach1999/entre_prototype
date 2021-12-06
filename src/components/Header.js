import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button, Row, Col, Container } from "react-bootstrap";
const Header = (props) => {
  // const {getIte} = useContext(ProductContext)
  // const [state, dispatch] = useReducer(productReducer, defaultState);
  //  var [state, dispatch] = useGlobalState();
  var [load, setLoad] = useState([]);
  var [loading, setloading] = useState(true);
  //  console.log(state)
  // var [pros, setPros] = useState(data)
  // console.log(data)

  const y = () => {
    // dispatch({ type: "GET_CAT", payload: { cat, data } });

    // dispatch({ type: "GET_ALL", payload: data });
    setLoad(props.i);
    setloading(false);

  };

  useEffect(() => {
    y();
  }, [loading]);
  return (
    <div className="container">
      <h1>Raffle up prototype</h1>

      <div style={{ border: "1px solid black", textAlign: "left" }}>
        <h3 data-testid="header1">Website explained:</h3>
        <h5>
          This is a basic website showing some of the functionality of how
          RaffleUp will work.
        </h5>
        <h3>Functionality:</h3>
        <h5>
          You can register an account and then you have 2 options. You can
          either buy the item outright (as well as remove it from cart) or you
          can enter into a raffle for the product. As this is a test website,
          when you buy more than 5 tickets you will win. The winning numbers are
          generated at random from the following web service:
          https://www.random.org/integer-sets/
          <br />
          <br />
          Moreover when you register an account you can also begin to list
          products. When registered you will see the option to list a product,
          where you can enter the buy now price, number of tickets, ticket price
          and even photos of the product.
        </h5>
        <h3>Considerations</h3>
        <h5>
          Whilst this is an example site meant to show case the technical
          complexity of our product and provide some surprise, it is not a full
          product so there are several considerations. In terms of basic
          functionality, the ability to set when the raffle will end as well as
          uploading multiple images still needs to be implemented. The checkout
          pages and tracking of your own products are the more signifigant
          examples of missing functionality, however this is on purpose as the
          implementation of those features will need to be planned and built
          over a long period of time.
          <br />
          <br />
          When it comes to fundamental functionality when relating to our
          business processes, there are some limitations such as setting a
          certain amount of tickets based on the price, in order to strike a
          balance of fairness between buyer and seller. The further legal
          requirements for such a site such as the implementation of an escrow
          wallet to make sure sellers dont abuse or pull out of a raffle, also
          need to be considered. The addition of these features in order for the
          website to be fair, legal and profitable are part of the medium term
          plan, concerned with the technical implementation and release of
          RaffleUp.
          <br />
          <br />
          Finally this website is not linked to a database. When you make an
          account, it is accessible from the device you created it on and
          nowhere else. The reasoning is to limit the cost of databse hosting as
          this is still a prototype. This also applies to any products listed,
          raffles entered and products in your cart. Despite the lack of a
          database, the basic functionality is still demonstrated and paints a
          picture of what RaffleUp will look like in the future.
        </h5>
      </div>
    </div>
  );
};

export default Header;
