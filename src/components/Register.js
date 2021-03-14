import React, { useState, useContext, useEffect, useReducer } from "react";
import { Button, Row, Col, Container, CardDeck, Form } from "react-bootstrap";
import { UserContext } from "../context/UserContext";
import data from "../data/user_data.json";
import useGlobalState from "../hooks/useGlobalState";


const Register = () => {

    const {register} = useContext(UserContext)

    var [name, setName] = useState("");
    var [log, setLog] = useState("");
    var [pass, setPass] = useState("");

    return (
      <Form style={{ flex: "3" }}>
        <Form.Group controlId="formGroupEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name"
          />
        </Form.Group>
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
          onMouseOver={() => register(name, log, pass)}
        >
          Submit
        </Button>
      </Form>
    );
}

export default Register
