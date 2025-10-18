import { render, screen, act, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import RestaurantMenu from "../Restaurantmenu";
import Header from "../Header";
import Cart from "../Cart";
import MOCK_DATA from "../mocks/resMenuMock.json"
import appStore from "../../utils/appStore";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(()=> {
    return Promise.resolve({
        json: Promise.resolve(MOCK_DATA)
    })
})

it("Should Load restaurant Menu Component", async ()=> {
    await act(async ()=> render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
                <RestaurantMenu />
                <Cart />
            </Provider>
        </BrowserRouter>
    ))
    const accHeading = screen.getByText("Beverages.");
    fireEvent.click(accHeading);

    expect(screen.getAllByTestId("foodItems").toBe(6));

    expect(screen.getByText("Cart - (0)")).toBeInTheDocument();

    const addBtns = screen.getAllByRole("button", { name: "ADD" })
    fireEvent.click(addBtns[0]);

    expect(screen.getByText("Cart - (1)")).toBeInTheDocument();
    fireEvent.click(addBtns[1]);

    expect(screen.getByText("Cart - (2)")).toBeInTheDocument();

    const items = screen.getAllByTestId("foodItems");
    expect(items.length).toBe(8);

    fireEvent.click(screen.getByRole("button", {name: "Clear Cart"}));

    expect(screen.getAllByTestId("foodItems").length).toBe(6);

    expect(screen.getByText("Your cart is empty. Add items to the cart")).toBeInTheDocument();

})