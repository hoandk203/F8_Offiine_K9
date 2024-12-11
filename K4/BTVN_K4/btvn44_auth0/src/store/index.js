import isLoadingReducer from "./reducer/isLoadingReducer";

const initialState = {
    isLoading: false,
};

const reducer = (state, action) => {
    return {
        ...state,
        isLoading: isLoadingReducer(state.isLoading, action),
    };
};

export default reducer;
export { initialState };
