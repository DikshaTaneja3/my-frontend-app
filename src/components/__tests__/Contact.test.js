import Contact from "../Contact";
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom";

// this is the describe block which wrapping all test cases
describe("Contact Us Page Test Cases", () => {
    // it() and test() fn are the same thing
    it("should load contact us component", () => {
        render(<Contact />)
    
        const head = screen.getByRole("heading");
        //Assertion
        expect(head).toBeInTheDocument();
    });
    
    test("should load button inside contact component", () => {
        render(<Contact />)
    
        // const button = screen.getByRole("button");
        const button = screen.getByText("Submit");
        //Assertion
        expect(button).toBeInTheDocument();
    });
    
    it("should load input name inside contact component", () => {
        render(<Contact />)
    
        const inputName = screen.getByPlaceholderText("name");
        //Assertion
        expect(inputName).toBeInTheDocument();
    });
    
    test("should load 2 input boxes on the contact component", () => {
        render(<Contact />)
    
        //Querying (for mulitple role we use getAllByRole)
        const inputBoxes = screen.getAllByRole("textbox");
        //Assertion
        // expect(inputBoxes.length).toBe(2);
        expect(inputBoxes.length).toBeTruthy();
    });
});
