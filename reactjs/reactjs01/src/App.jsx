import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { v4 } from "uuid";
// import './App.css'

// component
import { FButton, FInput, FCommonTable } from "./components";

function App() {
    const columns = ["id", "name", "age", "gender", " address", "action"];
    const [users, setUsers] = useState([
        { id: v4(), name: "John", age: 20, gender: "male", address: "HN" },
    ]);
    const [user, setUser] = useState({
        id: v4(),
        name: "",
        age: "",
        gender: "",
        address: "",
    });

    const onInput = (e, key) => {
        const updateUser = user;
        updateUser[key] = e.target.value;
        setUser({ ...updateUser });
    };

    const onSave = () => {
        setUsers([...users, user]);
        setUser({
            id: v4(),
            name: "",
            age: "",
            gender: "",
            address: "",
        });
    };

    return (
        <>
            <div>
                <input
                    type="text"
                    placeholder="name"
                    onChange={(e) => onInput(e, "name")}
                />
                <input
                    type="text"
                    placeholder="age"
                    onChange={(e) => onInput(e, "age")}
                />
                <select
                    name="gender"
                    id=""
                    onChange={(e) => onInput(e, "gender")}
                >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
                <input
                    type="text"
                    placeholder="address"
                    onChange={(e) => onInput(e, "address")}
                />
                <button onClick={onSave}>Save</button>
            </div>
            <FCommonTable columns={columns} rows={users} />
        </>
    );
}

export default App;
