import React from "react";
import ReactDOM from "react-dom";
import ProductCard from "../components/ProductCard";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import { BrowserRouter as Router, Route,Link } from "react-router-dom";
import { createMemoryHistory } from "history";

import data from "../data/product_data.json";

let container;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

const product = {
  id: 1,
  name: "PS5",
  buy: 599,
  ticket: 5,
  image:
    "https://res.cloudinary.com/dhey8vvcx/image/upload/v1614963468/Gear-PS5-src-Sony_um5lqf.jpg",
  numTicks: 1198,
  winningNums: [98, 136, 275, 281, 475, 510, 558, 624, 864, 1010],
  cat: "electronics",
  desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis nisi sit amet auctor fermentum. Sed aliquet elit vehicula sem tempor aliquam. Quisque fringilla, quam eu accumsan ultrices, elit ex vulputate nisi, mollis luctus turpis diam at orci. Integer tortor sem, tincidunt ac mauris a, mollis tempus purus.",
};

describe("TESTING PRODUCT CARD", () => {
  test("should render correct image", () => {
    const history = createMemoryHistory();
    history.push("/product/1");
     render(
      <Router history={history}>
        <ProductCard id={1} products={product}  />
      </Router>
    );

    const image = screen.getByRole("img")

    expect(image).toHaveAttribute("src", product.image)
  });
  test("Get the correct description", () => {
    const history = createMemoryHistory();
    history.push("/product/1");
     render(
      <Router history={history}>
        <ProductCard id={1} products={product}  />
      </Router>
    );

    const description = screen.getByTestId("description")

    expect(description).toHaveAttribute("class", "card-text")
    expect(description).toHaveTextContent(product.desc.split(" ").slice(0,12).join(" "))
  });
});
