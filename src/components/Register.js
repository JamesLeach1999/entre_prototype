import React, { useState, useContext, useEffect, useReducer } from "react";
import { Button, Row, Col, Container, CardDeck, Form } from "react-bootstrap";
import { UserContext } from "../context/UserContext";
import data from "../data/user_data.json";
import useGlobalState from "../hooks/useGlobalState";
import { TestContext } from "../context/TestContext";
import userReducer from "../reducers/userReducer";

const initialState = {
  auth: false,
  email: "",
  name: "",
  password: "",
};
const Register = () => {
  // const { register } = useContext(UserContext);
  // const {registerTest} = useContext(UserContext)
  const { test, setTest } = useContext(TestContext);
  var [name, setName] = useState("");
  var [log, setLog] = useState("");
  var [pass, setPass] = useState("");
  const [display, setDisplay] = useState(false);
  const [state, dispatch] = useReducer(userReducer, initialState);
  useEffect(() => {
    if (state.email !== "") {
      setDisplay(true);
    }
  }, [state]);
  return (
    <Form style={{ flex: "3" }}>
      <Form.Group controlId="formGroupEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control
          data-testid="name"
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
          placeholder="Enter name"
        />
      </Form.Group>
      <Form.Group controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          data-testid="email"
          value={log}
          type="email"
          onChange={(e) => setLog(e.target.value)}
          placeholder="Enter email"
        />
      </Form.Group>
      <Form.Group controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          data-testid="password"
          type="password"
          value={pass}
          placeholder="Password"
          onChange={(e) => setPass(e.target.value)}
          style={{ flex: "1" }}
        />
      </Form.Group>
      <Button
        data-testid="submitMain"
        variant="primary"
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          dispatch({
            type: "REGISTER_USER",
            payload: { name: name, email: log, password: pass },
          });
          // register(name, log, pass);
        }}
      >
        Submit
      </Button>
      {state.email && <h1 data-testid="modal">{state.email}</h1>}
      {/* <h1 data-testid="testbtn">fucking work</h1> */}
      <button
        data-testid="testbtn"
        onClick={(e) => {
          e.preventDefault();
          setTest("thats numberwang");
        }}
      >
        Click for change
      </button>
      {test === "numberwang" ? (
        <h1 data-testid="testwang">Thats numberwang {test}</h1>
      ) : (
        <h1 data-testid="notwang">Thats not numberwang</h1>
      )}
    </Form>
  );
};

export default Register;
