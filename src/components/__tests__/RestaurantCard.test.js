import RestaurantCard from "../RestaurantCard";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/resCardMock.json"

it("Should render RestaurantCard component with props data", () => {
    render(<RestaurantCard resData={MOCK_DATA} />);
    const name = screen.getByText("Pizza Hut");
    expect(name).toBeInTheDocument();
})

it("Should render RestaurantCard component with Promoted label", () => {
    //
})