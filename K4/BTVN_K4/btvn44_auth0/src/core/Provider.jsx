import { createContext, useReducer } from "react";
import reducer, { initialState } from "../store";

const AppContext= createContext();

const Provider= ({children})=>{
    const [state, dispatch]= useReducer(reducer, initialState);
    return (
        <AppContext.Provider value={{state, dispatch}}>
            {children}
        </AppContext.Provider>
    );
};

export default Provider;
export { AppContext };
