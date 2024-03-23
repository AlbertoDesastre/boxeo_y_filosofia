import {render, screen} from "@testing-library/react";
import App from "./App";

it("should say something", ()=>{
    render(<App />)
    const message = screen.queryAllByText(/boxeo/i);
    expect(message[1]).toBeDefined();
    expect(message[1]).toBeVisible();
})