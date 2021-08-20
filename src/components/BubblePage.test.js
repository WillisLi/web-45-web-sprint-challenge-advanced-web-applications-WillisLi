import React from 'react';
import MutationObserver from 'mutationobserver-shim';

import { render, screen, waitFor} from "@testing-library/react";
import BubblePage from './BubblePage';
import fetchColorService from '../services/fetchColorService';
jest.mock("../services/fetchColorService");

const testColor = {
    code: {hex: "#810040"},
    color: "Maroon",
    id: 1,
}

test("Renders without errors", ()=> {
    render(<BubblePage />);
});

test("Renders appropriate number of colors passed in through mock", async ()=> {
    render(<BubblePage />)

    fetchColorService.mockResolvedValueOnce(testColor);

    const colors = screen.getAllByTestId("color");

    await waitFor(() => {
        expect(colors).toHaveLength(1); 
    })
});