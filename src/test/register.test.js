import React, { useReducer } from "react";
import ReactDOM from "react-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { createMemoryHistory } from "history";
import { UserContext } from "../context/UserContext";
import data from "../data/product_data.json";
import Register from "../components/Register";
import { Navbar } from "react-bootstrap";
import userReducer from "../reducers/userReducer";
import { TestContext } from "../context/TestContext";
import App from "../App";
let container;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

const setup = () => {
  const utils = render(<Register />);
  const name = utils.getByTestId("name");
  const email = utils.getByTestId("email");
  const password = utils.getByTestId("password");
  const submit = utils.getByTestId("submitMain");
  return {
    name,
    email,
    password,
    submit,
    ...utils,
  };
};



// i could cry im so happy
// it looks like all of them take bare time, but will eventually work

describe("TESTING REGISTER", () => {
  var setTest;
  var name;
  var email;
  var password;
  var submit;
  beforeEach(() => {
    var test = "numberwang";
    setTest = jest.fn();
    render(
      <TestContext.Provider value={{ test, setTest }}>
        <Register />
      </TestContext.Provider>
    );
    name = screen.getByTestId("name");
    email = screen.getByTestId("email");
    password = screen.getByTestId("password");
    submit = screen.getByTestId("submitMain");
  });
  test("should input WITHOUT firing register", () => {
    const history = createMemoryHistory();
    history.push("/register");

    fireEvent.change(name, { target: { value: "jim" } });
    fireEvent.change(email, { target: { value: "jad" } });
    fireEvent.change(password, { target: { value: "aaa" } });

    expect(name).toHaveValue("jim");
    expect(email).toHaveValue("jad");
    expect(password).toHaveValue("aaa");
  });

  test("should render using reducer", async () => {
    fireEvent.change(name, { target: { value: "jim" } });
    fireEvent.change(email, { target: { value: "jad" } });
    fireEvent.change(password, { target: { value: "aaa" } });

    expect(name).toHaveValue("jim");
    expect(email).toHaveValue("jad");
    expect(password).toHaveValue("aaa");

    fireEvent.click(submit);

    const modal = screen.getByTestId("modal");

    expect(modal).toHaveTextContent("jad");
  });

  test("still on test context", () => {
    expect(screen.getByTestId("testbtn")).toHaveTextContent("Click for change");
  });
  test("trying a click", () => {
    const btn = screen.getByTestId("testbtn");
    fireEvent.click(btn);

    const newBtn = screen.getByTestId("testwang");

    expect(newBtn).toHaveTextContent("Thats numberwang numberwang");
    expect(setTest).toHaveBeenCalled();
  });
});
