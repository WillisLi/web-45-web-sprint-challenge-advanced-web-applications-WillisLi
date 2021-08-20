import axiosWithAuth from '../helpers/axiosWithAuth';
import React, { useState } from 'react';

const fetchColorService = () => {
    axiosWithAuth.get("/colors")
        .then(response => {
            console.log(response)
            return response;
        })
        .catch(error => {
            console.log(error);
        })
}

export default fetchColorService;