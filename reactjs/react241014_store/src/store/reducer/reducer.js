import inputReducer from "./inputReducer";
import jobsReducer from "./jobsReducer";
import searchReducer from "./searchReducer";
const reducer = (state, action) => {
    return {
        inputJob: inputReducer(state.inputJob, action),
        jobs: jobsReducer(state.jobs, action),
        searchString: searchReducer(state.searchString, action),
    };
};

export default reducer;