import { Checkbox } from "./checkbox";
import React from "react";
import { render } from "@testing-library/react";
import { fireEvent } from "@testing-library/react";

test("Checkbox value",()=>{
    const {getByLabelText} = render(<Checkbox/>);
    const checkbox = getByLabelText(/not checked/);
    fireEvent.click(checkbox);
    expect(checkbox.checked).toEqual(true);
})