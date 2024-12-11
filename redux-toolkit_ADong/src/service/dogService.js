import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchDog = createAsyncThunk(
    'dogs/get',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/todos")
            return response.data;
        } catch (err) {
            console.log(err.response?.data);
            
            return rejectWithValue(err.response?.data || err.message || "Something went wrong");
        }
    },
)