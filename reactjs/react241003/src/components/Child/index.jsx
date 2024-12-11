import React from "react";
import { useContext } from "react";
import { provider } from "../../utils";

export default function () {
    const context = useContext(provider);
    console.log(context);

    return (
        <>
            <p>Child: {context.name}</p>
            <p>Count: {context.count}</p>
        </>
    );
}
