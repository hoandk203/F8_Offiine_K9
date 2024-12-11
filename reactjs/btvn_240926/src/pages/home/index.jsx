import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

export default function () {
    const navigate = useNavigate();
    return <>
        <Button onClick={()=>{navigate("/products")}}>Products</Button>
        <Button onClick={()=>{navigate("/categories")}}>Categories</Button>
    </>
}
