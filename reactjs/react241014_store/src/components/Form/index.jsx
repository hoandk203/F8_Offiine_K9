import { Button, Stack, TextField } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import { useContext } from "react";
import AppContext from "../../store";

const options = [{ label: "High" }, { label: "Medium" }, { label: "Low" }];

export default function () {
    const { state, dispatch } = useContext(AppContext);

    const onSave = () => {
        //save login here
        dispatch({ type: "jobs/save", payload: state.inputJob });
    };
    return (
        <div>
            <Stack spacing={2}>
                <TextField value={state.inputJob.name} label={"Name"} onChange={(e) => dispatch({ type: "inputJob/name/update", payload: e.target.value })} />
                <Autocomplete
                    value={state.inputJob.priority}
                    className="w-full"
                    disablePortal
                    options={options}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Priority" />}
                    onChange={(event, value) => dispatch({ type: "inputJob/priority/update", payload: value.label })}
                />
                <Button onClick={onSave} variant="contained">
                    Save
                </Button>
            </Stack>
        </div>
    );
}
