import Body from "../Body";
import { render, screen, act, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/resListData.json"
import { BrowserRouter } from "react-router-dom";

// we have testing search feature and top rated restaurant feature
global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA)
        }
    })
})

it("Should Search res list for tossin input text", async ()=> {
    await act(async () => {
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        );
    });
    const cardsBeforeSearch = screen.getAllByTestId("resCard");
    expect(cardsBeforeSearch.length).toBe(7);
    const searchInput = screen.getByPlaceholderText("Search");
    // const searchInput = screen.getByTestId("searchInput");
    const searchButton = screen.getByRole("button", {name: "search"})
    fireEvent.change(searchInput, { target: {value: "tossin"} });
    fireEvent.click(searchButton);
    const cardsAfterSearch = screen.getAllByTestId("resCard");
    expect(cardsAfterSearch.length).toBe(1);
    // expect(searchButton).toBeInTheDocument();
});

it("Should Filter Top Rated Restaurant", async ()=> {
    await act(async () => {
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        );
    });
    const cardsBeforeSearch = screen.getAllByTestId("resCard");
    expect(cardsBeforeSearch.length).toBe(7);
    const topRatedBtn = screen.getByRole("button", {name: "Top Rated Restaurants"});
    fireEvent.click(topRatedBtn);
    const cardsAfterFilter = screen.getAllByTestId("resCard");
    expect(cardsAfterFilter.length).toBe(4);
});