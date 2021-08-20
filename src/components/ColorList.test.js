import React, { useReducer } from 'react';
import MutationObserver from 'mutationobserver-shim';

import { render, screen} from "@testing-library/react";
import ColorList from './ColorList';
import userEvent from '@testing-library/user-event';

const emptyList = [];

const testList = [{
    code: {hex: "FFFFFF"},
    color: "white",
    id: 1,
}]

test("Renders an empty list of colors without errors", () => {
    render(<ColorList colors = {emptyList}/>) 
});

test("Renders a list of colors without errors", () => {
    render(<ColorList colors = {testList}/>) 
});

test("Renders the EditForm when editing = true and does not render EditForm when editing = false", () => {
    const {rerender} = render(<ColorList colors = {testList} editing = {false} />)

    let editMenu = screen.queryByTestId("edit_menu")
    expect(editMenu).not.toBeInTheDocument();

    rerender(<ColorList colors = {testList} editing = {true} />)

    editMenu = screen.queryByTestId("edit_menu")  
    expect(editMenu).toBeInTheDocument(); 
});
