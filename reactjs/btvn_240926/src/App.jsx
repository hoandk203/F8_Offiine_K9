import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { v4 } from "uuid";
// import './App.css'

// component
import { FCommonTable, InputForm } from "./components";

function App() {
    const columns = ["id", "name", "age", "address", "gender", "action"];
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState({
        id: v4(),
        name: "",
        age: "",
        address: "",
        gender: "",
    });
    const onInput = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(user.id);
        if (
            users.find((u) => {
                return user.id === u.id;
            })
        ) {
            setUsers(users.map((u) => (u.id === user.id ? user : u)));
            setUser({
                id: v4(),
                name: "",
                age: "",
                address: "",
                gender: "",
            });
            return;
        } else {
            if (
                user.name === "" ||
                user.age === "" ||
                user.address === "" ||
                user.gender === ""
            ) {
                alert("Vui lòng điền đầy đủ thông tin");
                return;
            }
            if (user.age <= 0 || user.age > 200) {
                alert("Tuổi lớn hơn 0");
            }
            setUsers([
                ...users,
                {
                    ...user,
                    name: user.name.replace("<", "&lt;").replace(">", "&gt;"),
                    address: user.address
                        .replace("<", "&lt;")
                        .replace(">", "&gt;"),
                },
            ]);
            setUser({
                id: v4(),
                name: "",
                age: "",
                address: "",
                gender: "",
            });
        }
    };

    const onUpdate = (e, user) => {
        e.preventDefault();
        setUser(user);
    };

    const onDelete = (e, userId) => {
        e.preventDefault();
        setUsers(users.filter((u) => u.id !== userId));
    };

    return (
        <>
            <InputForm
                onInput={onInput}
                onSubmit={onSubmit}
                user={user}
                users={users}
            />
            <FCommonTable
                columns={columns}
                rows={users}
                onUpdate={onUpdate}
                onDelete={onDelete}
            />
        </>
    );
}

export default App;
