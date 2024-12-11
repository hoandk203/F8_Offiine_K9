import { configureStore } from "@reduxjs/toolkit";
import dogReducer from './slices/dogSlices'
const store = configureStore({
    reducer: {
        dogs: dogReducer,
        // thêm tiếp các  slise ở đây
    },
});

export default store;