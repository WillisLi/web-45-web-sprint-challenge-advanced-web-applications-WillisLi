import React from 'react';
import MutationObserver from 'mutationobserver-shim';

import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Color from './Color';

const testColor = {
    color: "",
    code: {hex: ""},
    id: 0,
}

test("Renders without errors with blank color passed into component", () => {
    render(<Color color = {testColor}/>);
});
  
test("Renders the color passed into component", () => {
    render(<Color color = {testColor}/>);
    const color = screen.getByTestId("color");
    expect(color).toBeInTheDocument();
}); 

test("Executes handleDelete and toggleEdit property when the 'x' icon is clicked", () => {
    const mockHandleDelete = jest.fn();
    const mockToggleEdit = jest.fn();

    render (<Color color={testColor} deleteColor = {mockHandleDelete} toggleEdit = {mockToggleEdit}/>)

    const deleteX = screen.getByTestId("delete")

    userEvent.click(deleteX)

    expect(mockHandleDelete).toHaveBeenCalled();
    expect(mockToggleEdit).toHaveBeenCalled(); 
});

test("Executes setEditColor and toggleEdit property when color div is clicked", () => {
    const mockSetEditColor = jest.fn();
    const mockToggleEdit = jest.fn();

    render (<Color color={testColor} setEditColor = {mockSetEditColor} toggleEdit = {mockToggleEdit} />)

    const colorDiv = screen.getByTestId("color")

    userEvent.click(colorDiv)

    expect(mockSetEditColor).toBeCalled() 
    expect(mockToggleEdit).toBeCalled();
});