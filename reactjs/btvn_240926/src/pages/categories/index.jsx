import React from "react";
import { FCommonTable, DialogCategories } from "../../components/";
import { useState, useEffect } from "react";
import { v4 } from "uuid";
import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from "react-router-dom";

export default function () {
    const navigate = useNavigate();
    const columns = [
        { name: "id", text: "ID" },
        { name: "name", text: "Name" },
        { name: "orderNum", text: "OrderNum" },
        { name: "action", text: "Action" },
    ];
    const [categories, setCategories] = useState([]);

    const getCategories = async () => {
        const response = await fetch("http://localhost:3000/categories", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (response.ok) {
            setCategories(await response.json());
        }
    };
    useEffect(() => {
        getCategories();
    }, []);

    const [open, setOpen] = useState(false);
    const [category, setCategory] = useState({
        id: v4(),
        name: "",
        orderNum: "",
    });
    const onUpdate = (category) => {
        if (category) {
            setCategory(category);
        }
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    return (
        <>
            <h1 className="text-center">Categories</h1>
            <div style={{ maxWidth: "960px", margin: "auto" }}>
                <Button
                    variant="outlined"
                    startIcon={<HomeIcon />}
                    onClick={() => {
                        navigate("/");
                    }}
                >
                    Home
                </Button>
                <Button
                    variant="contained"
                    color="success"
                    className="float-right"
                >
                    New Category
                </Button>
                <FCommonTable
                    columns={columns}
                    rows={categories}
                    maxWidth={960}
                    onUpdate={onUpdate}
                />
            </div>
            <DialogCategories
                open={open}
                onClose={onClose}
                reload={getCategories}
                categoryUpdate={category}
            />
        </>
    );
}
