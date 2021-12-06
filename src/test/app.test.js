import React from "react";
import ReactDOM from "react-dom";
import App from "../App";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createMemoryHistory } from "history";

let container;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

describe("TESTING APP ROUTES", () => {
  test("should correctly render first dropdown options", () => {
    const { getAllByText, getByText } = render(<App />);
    act(() => {
      ReactDOM.render(<App />, container);
    });
    const dropdownArr = getAllByText("Dropdown");
    expect(dropdownArr[0]).toHaveTextContent("Dropdown");
    act(() => {
      userEvent.click(dropdownArr[0]);
    });

    const all = getByText("All");
    expect(all).toHaveTextContent("All");
  });
  test("should correctly render second, third etc options", () => {
    const { getAllByText, getByTestId, getAllByTestId } = render(<App />);
    act(() => {
      ReactDOM.render(<App />, container);
    });
    const dropdownArr = getAllByText("Dropdown");
    expect(dropdownArr[0]).toHaveTextContent("Dropdown");
    act(() => {
      userEvent.click(dropdownArr[0]);
    });
    const elec = getAllByTestId("dropdown-item")[1];
    expect(elec).toHaveTextContent("Electronics");
  });

  test("verify the route is correct", () => {
    const history = createMemoryHistory();
    history.push("/store/electronics");
    const { getAllByText, getByTestId, getAllByTestId, getByText } = render(
      <Router history={history}>
        <App />
      </Router>
    );

    const dropdown = getAllByText("Dropdown");
    act(() => {
      userEvent.click(dropdown[0]);
    });
    // userEvent.click(screen.getByText("Store front")).toBeInTheDocument()
    const elec = getAllByTestId("dropdown-item")[1];
    expect(elec).toHaveTextContent("Electronics");
    const elecButton = getByText("Electronics");

    act(() => {
      userEvent.click(elecButton);
    });
    expect(screen.getByText("Electronics").closest("a")).toHaveAttribute(
      "href",
      "/store/electronics"
    );
  });
});
