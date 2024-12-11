import { createSlice } from "@reduxjs/toolkit";
import { fetchDog } from "../../service/dogService";

const initialState = {
    Dog: [],
    status: "idle",
    error: null,
};

const dogSlice = createSlice({
    name: "dog",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchDog.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchDog.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.Dog = action.payload;
            })
            .addCase(fetchDog.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message ?? "Something went wrong";
            });
    },
});

export default dogSlice.reducer;
