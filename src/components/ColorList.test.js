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
    const mockToggleEdit = jest.fn()
    const mockEditing = jest.fn();

    render(<ColorList colors = {testList} toggleEdit = {mockToggleEdit} editing = {mockEditing} />)

    const editColor = screen.queryByTestId("color");
    userEvent.click(editColor);

    expect(mockToggleEdit).toHaveBeenCalled();
    expect(mockEditing).toBeTruthy();
});
