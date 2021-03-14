import React, { useState, useContext, useEffect, useReducer } from "react";
import { Button, Row, Col, Container, CardDeck, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import {UserContext} from "../context/UserContext";
import data from "../data/user_data.json";
import useGlobalState from "../hooks/useGlobalState"
const Login = () => {
   const {login} = useContext(UserContext)
var [log, setLog] = useState("")
var [pass, setPass] = useState("")


    // console.log(dispatch);

  return (
    <Form style={{ flex: "3" }}>
      <Form.Group controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          onChange={(e) => setLog(e.target.value)}
          placeholder="Enter email"
        />
      </Form.Group>
      <Form.Group controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          onChange={(e) => setPass(e.target.value)}
          style={{ flex: "1" }}
        />
      </Form.Group>
      <Button
        variant="primary"
        type="submit"
        onMouseOver={() => login(log, pass)}
      >
        Submit
      </Button>

      <Link to="/register">
        <h4>No Account? Register now</h4>
      </Link>
    </Form>
  );
};

export default Login;
