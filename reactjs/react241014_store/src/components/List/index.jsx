import React, { useContext } from "react";
import AppContext from "../../store";

export default function () {
    const { state } = useContext(AppContext);
    const { jobs } = state;

    return (
        <div>
            <ul>
                {jobs.map((job, index) => {
                    return (
                        <li key={index}>
                            {job.name} - {job.priority}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
