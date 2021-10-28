import {render} from "@testing-library/react";
import App from "./App";
import React from 'react';


test("Testing react render",()=>{
    const { getByText} = render(<App />);
    const h1 = getByText(/Hello React Testing Library/);
    expect(h1).toHaveTextContent("Hello React Testing Library")
})

