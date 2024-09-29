import React from "react";
import { v4 } from "uuid";

export default function InputForm({ onInput, onSubmit, user, users }) {
    return (
        <div className="input-form">
            <form action="" onSubmit={onSubmit}>
                <input
                    name="name"
                    type="text"
                    placeholder="name"
                    onChange={(e) => onInput(e)}
                    value={user.name}
                    required
                />
                <input
                    name="age"
                    type="number"
                    placeholder="age"
                    onChange={(e) => onInput(e)}
                    value={user.age}
                    required
                />
                <input
                    name="address"
                    type="text"
                    placeholder="address"
                    onChange={(e) => onInput(e)}
                    value={user.address}
                    required
                />

                <div className="input-gender">
                    <div>
                        <input
                            type="radio"
                            name="gender"
                            id="male"
                            value={"male"}
                            onChange={(e) => onInput(e)}
                            checked={user.gender === "male"}
                            required
                        />
                        <label htmlFor="male">Male</label>
                    </div>
                    <div>
                        <input
                            type="radio"
                            name="gender"
                            id="female"
                            value={"female"}
                            onChange={(e) => onInput(e)}
                            checked={user.gender === "female"}
                            required
                        />
                        <label htmlFor="female">Female</label>
                    </div>
                </div>
                <button>
                    {users.find((u) => {
                        return u.id === user.id;
                    })
                        ? "Update"
                        : "Create"}
                </button>
            </form>
        </div>
    );
}
