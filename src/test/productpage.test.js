import React from "react";
import ReactDOM from "react-dom";
import ProductPage from "../components/ProductPage";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import {
  Router,
  Route,
  Link,
  MemoryRouter,
  UserWithRouter,
} from "react-router-dom";

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

const renPage = async (id) => {
  return Promise.resolve(
    render(
      <MemoryRouter initialEntries={[`/product/${id}`]}>
        <Route path="/product/:id">
          <ProductPage />
        </Route>
      </MemoryRouter>
    )
  );
};

describe("TESTING PRODUCT PAGE", () => {
  test("should render correct image", async () => {
    const id = 1;
    await act(async () => {
      const { getByTestId } = await renPage(id);

      expect(getByTestId("imaggge")).toHaveAttribute("src", product.image);
    });
  });
  test("should render correct name", async () => {
    const id = 1;
    await act(async () => {
      const { getByTestId } = await renPage(id);
      expect(getByTestId("name")).toHaveTextContent("PS5");
    });
  });

  //   now we rolling
  test("input 3 tickets", async () => {
    const id = 1;
    await act(async () => {
      const { getByTestId } = await renPage(id);
      const brought = getByTestId("brought");
      fireEvent.change(brought, { target: { value: 3 } });
      expect(brought.value).toBe("3");
    });
  });
  test("confirm entry by adding to DOM", async () => {
    const id = 1;
    await act(async () => {
      const { getByTestId } = await renPage(id);
      const brought = getByTestId("brought");
      fireEvent.change(brought, { target: { value: 3 } });
      const confirmBuy = getByTestId("submit");

      userEvent.click(confirmBuy);
      const confirmation = getByTestId("confirm");

      expect(confirmation).toHaveTextContent("Raffle entered");
    });
  });
  test("confirm the back button in DOM and not break", async () => {
    const id = 1;
    await act(async () => {
      const { getByTestId } = await renPage(id);
      const brought = getByTestId("brought");
      fireEvent.change(brought, { target: { value: 3 } });
      const confirmBuy = getByTestId("submit");

      userEvent.click(confirmBuy);
      const confirmation = getByTestId("backBtn");
      fireEvent.click(confirmation);
      expect(confirmation).toBeTruthy();
    });
  });

  test("edit DOM same as raffle entry", async () => {
    const id = 1;
    await act(async () => {
      const { getByTestId } = await renPage(id);
      const brought = getByTestId("buy-now");
      fireEvent.click(brought);
      const confirmation = getByTestId("confirm");

      expect(confirmation).toHaveTextContent("Raffle entered");
    });
  });
});
