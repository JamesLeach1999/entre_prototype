import React, { useState, useContext, useEffect, useReducer } from "react";
// import { Button, Row, Col, Container, CardDeck, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const LoginPage = () => {
  const { login } = useContext(UserContext);
  var [log, setLog] = useState("");
  var [pass, setPass] = useState("");

  return (
    <React.Fragment>
      <React.Fragment style={{ width: "300px" }}>
        <h3>Login!</h3>
        <input
          label="Username"
          name="username"
          type="text"
          value={log}
          onChange={(e) => setLog(e.target.value)}
          placeholder="Enter username..."
          // error={errors.username}
          required
          className="input"
        />

        <input
          label="Password"
          name="password"
          type="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          placeholder="Enter password..."
          // error={errors.password}
          className="input"
          required
        />

        <Button
          type="submit"
          label="Submit"
          className="button"
          handleClick={() => login(login, pass)}
        />
      </React.Fragment>
      <Link to="/register">
        <h4>No Account? Register now</h4>
      </Link>
    </React.Fragment>
  );
};

const Button = (props) => (
  <button
    // type={props.type}
    className={props.className}
    onClick={props.handleClick}
  >
    {props.label}
  </button>
);

export default LoginPage;
