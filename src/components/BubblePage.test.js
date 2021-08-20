import React from 'react';
import MutationObserver from 'mutationobserver-shim';

import { render, screen, waitFor, act, fireEvent} from "@testing-library/react";
import BubblePage from './BubblePage';
import fetchColorService from './../services/fetchColorService';
jest.mock("./../services/fetchColorService");

const testColors = [{
    code: {hex: "#810040"},
    color: "Maroon",
    id: 1,
}]

test("Renders without errors", ()=> {
    fetchColorService.mockResolvedValueOnce(testColors);
    render(<BubblePage />);
});

test("Renders appropriate number of colors passed in through mock", async ()=> {
    await fetchColorService.mockResolvedValueOnce( 
        [
            { 
                code: {hex: "#810040"},
                color: "Maroon",
                id: 1,
            },
            {
                code: {hex: "#810050"},
                color: "Maroon2",
                id: 2, 
            },
        ]); 

    // render(<BubblePage />);  
    await act( async () => render(<BubblePage/>));

    const colors = await screen.findAllByTestId("color");   

    await waitFor(() => { 
        expect(colors).toHaveLength(2);
    }) 
}); 