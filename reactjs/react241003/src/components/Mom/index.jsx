import React from "react";
import Grand from "../Grand";
import Child from "../Child";

export default function ({ children }) {
    return (
        <>
            <p>Mom</p>
            <Child />
        </>
    );
}
