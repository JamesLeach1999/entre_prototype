import React, { useState, useContext, useRef, useEffect } from "react";
import {
  Button,
  Row,
  Col,
  Container,
  CardDeck,
  Nav,
  NavDropdown,
} from "react-bootstrap";
import UserContext from "../context/UserContext";
import Cart from "./Cart";
import Raffle from "./Raffle";

const Navbar = (props) => {
  var [cartClicked, setCartClicked] = useState(false);
  var [raffleClicked, setRaffleClicked] = useState(false);
  var [login, setLogin] = useState(false);
  const refContainer = useRef();
  const cartContainer = useRef();

  // var {log} = useContext(UserContext)

  var handleRaffleClick = () => {
    if (!raffleClicked) {
      // attach/remove event handler
      document.addEventListener("click", handleRaffleOutsideClick, false);
    } else {
      document.removeEventListener("click", handleRaffleOutsideClick, false);
    }
  };

  var handleRaffleOutsideClick = (e) => {
    // ignore clicks on the component itself
    if (!refContainer.current.contains(e.target)) {
      console.log("owo");
      // setRaffleClicked(!raffleClicked);
      // console.log(this.node1);
      // e.target.style.left = "200px"
      return;
    }
    // console.log("numbero")
    // e.target.style.left = "-20px";

    handleRaffleClick();
  };
  var handleCartClick = () => {
    if (!cartClicked) {
      // attach/remove event handler
      document.addEventListener("click", handleCartOutsideClick, false);
    } else {
      document.removeEventListener("click", handleCartOutsideClick, false);
    }
  };

  var handleCartOutsideClick = (e) => {
    // ignore clicks on the component itself
    if (!cartContainer.current.contains(e.target)) {
      console.log("eee");
      // setCartClicked(true);
      // console.log(this.node1);
      // e.target.style.left = "200px"
      return;
    }
    console.log("ooo");
    // console.log("numbero")
    // e.target.style.left = "-20px";

    handleCartClick();
  };

  useEffect(() => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      // console.log(user);
      if (user.auth) {
        setLogin(true);
      }
      return () => {
        setLogin(true);
      };
    } catch (error) {
      console.log(error);
    }
  }, [login]);

  return (
    <Nav variant="pills">
      {/* <Nav.Item style={{ flex: "1" }}>
        <Cart />
      </Nav.Item> */}
      {/* Raffle: */}

      <Nav.Item style={{ flex: "1" }} data-testid="dropdown-item">
        <Nav.Link href="/">Home</Nav.Link>
      </Nav.Item>
      <NavDropdown
        title="Dropdown"
        id="nav-dropdown"
        style={{ flex: "1" }}
        data-testid="dropdown-item"
      >
        <NavDropdown.Item
          href="/store"
          eventKey="4.1"
          data-testid="dropdown-item"
        >
          All
        </NavDropdown.Item>
        <NavDropdown.Item
          href="/store/electronics"
          eventKey="4.1"
          data-testid="dropdown-item"
        >
          Electronics
        </NavDropdown.Item>
        <NavDropdown.Item
          href="/store/autos"
          eventKey="4.2"
          data-testid="dropdown-item"
        >
          Automobiles
        </NavDropdown.Item>
        <NavDropdown.Item
          href="/store/clothing"
          eventKey="4.3"
          data-testid="dropdown-item"
        >
          Clothing
        </NavDropdown.Item>
      </NavDropdown>
      {login ? (
        <>
          <h4
            class="fas fa-adjust"
            style={{
              // display: cartClicked ? "block" : "none",
              // position: "relative",
              // left: !raffleClicked ? "0px" : "250px",
              display: "block",
              // top: "250px"
            }}
            onClick={() => {
              handleRaffleClick();
              setRaffleClicked((prevState) => {
                return !prevState;
              });
            }}
            ref={refContainer}
          >
            {raffleClicked ? "X" : "Raffles entered"}
          </h4>
          <Nav.Item
            ref={refContainer}
            onClick={() => {
              handleRaffleClick();
              setRaffleClicked((prevState) => {
                return !prevState;
              });
            }}
            // style={{  }}
            style={{
              position: "relative",
              // left: raffleClicked ? "-250px" : "0",
              display: raffleClicked ? "block" : "none",

              flex: "1",
            }}
          >
            {/* <br/> */}

            <Raffle />
          </Nav.Item>
        </>
      ) : (
        ""
      )}
      <Nav.Item style={{ flex: "10" }}></Nav.Item>
      {/* {props.log ? (
        <h1>e</h1>
      ) : (
      )} */}
      {login ? (
        <>
          <Nav.Item
            style={{ flex: "1", alignItems: "right", justifyContent: "right" }}
          >
            <Nav.Link href="/add">List product</Nav.Link>
          </Nav.Item>
        <h1>Thats numberwang</h1>
          <h4
            class="fas fa-adjust"
            style={{
              // display: cartClicked ? "block" : "none",
              // position: "relative",
              // left: !raffleClicked ? "0px" : "250px",
              display: "block",
              // paddingRight: "20px"
              // top: "250px"
            }}
            onClick={() => {
              handleCartClick();
              setCartClicked((prevState) => {
                return !prevState;
              });
            }}
            ref={cartContainer}
          >
            {cartClicked ? "X" : "Cart"}
          </h4>
          <Nav.Item
            ref={cartContainer}
            onClick={() => {
              handleCartClick();
              setCartClicked((prevState) => {
                return !prevState;
              });
            }}
            // style={{  }}
            style={{
              position: "relative",
              // left: raffleClicked ? "-250px" : "0",
              display: cartClicked ? "block" : "none",

              flex: "1",
            }}
          >
            {/* <br/> */}

            <Cart />
          </Nav.Item>
        </>
      ) : (
        <Nav.Item
          style={{ flex: "1", alignItems: "right", justifyContent: "right" }}
        >
          <Nav.Link href="/register">Register</Nav.Link>
        </Nav.Item>
      )}
    </Nav>
  );
};

export default Navbar;
