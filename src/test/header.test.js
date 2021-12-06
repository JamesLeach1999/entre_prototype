import Header from "../components/Header";

import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("HEADER PAGE", () => {
    test('should correctly render page title', () => {
        const {getByTestId} = render(<Header/>)
        expect(getByTestId("header1")).toHaveTextContent("Website explained")
        
    })
    
    test('should correctly render 1st header', () => {
        const {container} = render(<Header/>)

        const text = container.querySelector("h1")
        expect(text).toHaveTextContent("Raffle up prototype")
    })
    
})