import {render, screen} from "@testing-library/react";
import App from "./App";

it("should say something", ()=>{
    render(<App />)
    const message = screen.queryByText(/Hello world/i);
    expect(message).toBeDefined();
    expect(message).toBeVisible();
})