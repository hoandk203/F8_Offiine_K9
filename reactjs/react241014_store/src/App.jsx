import { useState, useReducer } from "react";
import "./App.css";
import AppContext from "./store";
import { reducer } from "./store";
import { Search, Form, List } from "./components";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";

const initState = {
    jobs: [
        {
            name: "test 1",
            priority: "High",
        },
    ],
    inputJob: {
        name: "",
        priority: "Low",
    },
    searchString: "",
};

function App() {
    const [state, dispatch] = useReducer(reducer, initState);
    return (
        <AppContext.Provider value={{ state, dispatch }}>
            <Container maxWidth="sm" className="mt-5">
                <Stack spacing={1}>
                    <Search />
                    <Form />
                    <List />
                </Stack>
            </Container>
        </AppContext.Provider>
    );
}

export default App;
