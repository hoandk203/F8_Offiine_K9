import React from "react";

export default function (state, action) {
    switch (action.type) {
        case "jobs/save":
            return [...state, action.payload];

        default:
            return state;
    }
}
