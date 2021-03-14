import React, { useState, useContext, useRef } from "react";
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
  var [clicked, setClicked] = useState(false);

  // var {log} = useContext(UserContext)

  return (
    <Nav variant="pills">
      <Nav.Item style={{ flex: "1" }}>
        <Nav.Link href="/">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item style={{ flex: "1" }}>
        <Cart />

      </Nav.Item>
      <Nav.Item>

        <Raffle />
      </Nav.Item>
      <NavDropdown title="Dropdown" id="nav-dropdown" style={{ flex: "1" }}>
        <NavDropdown.Item href="/store" eventKey="4.1">
          All
        </NavDropdown.Item>
        <NavDropdown.Item href="/store/electronics" eventKey="4.1">
          Action
        </NavDropdown.Item>
        <NavDropdown.Item href="/store/autos" eventKey="4.2">
          Another action
        </NavDropdown.Item>
        <NavDropdown.Item href="/store/clothing" eventKey="4.3">
          Something else here
        </NavDropdown.Item>
      </NavDropdown>
      <Nav.Item style={{ flex: "10" }}></Nav.Item>
      {/* {props.log ? (
        <h1>e</h1>
      ) : (
      )} */}
      <Nav.Item
        style={{ flex: "1", alignItems: "right", justifyContent: "right" }}
      >
        <Nav.Link href="/login">Login</Nav.Link>
      </Nav.Item>
      <Nav.Item></Nav.Item>
    </Nav>
  );
};

export default Navbar;
