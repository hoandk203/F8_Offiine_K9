import React from "react";
import { FCommonTable, DialogProducts } from "../../components/";
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
        { name: "categoryId", text: "CategoryID" },
        { name: "orderNum", text: "OrderNum" },
        { name: "action", text: "Action" },
    ];
    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        // const response= await fetch("https://tqvg58-8080.csb.app/products",{
        const response = await fetch("http://localhost:3000/products", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (response.ok) {
            setProducts(await response.json());
        }
    };
    useEffect(() => {
        getProducts();
    }, []);

    const [open, setOpen] = useState(false);
    const [product, setProduct] = useState({
        id: v4(),
        name: "",
        orderNum: "",
    });
    const [isUpdate, setIsUpdate] = useState(false);
    const onUpdate = (productUpdate) => {
        if (productUpdate) {
            setProduct(productUpdate);
            if (products.find((product) => product.id === productUpdate.id)) {
                setIsUpdate(true);
            }
        }
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    const onInputChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
        console.log(product);
    };
    const onSave = async () => {
        const productToSend = {
            id: product.id,
            name: product.name,
            orderNum: product.orderNum,
            categoryId: product.categoryId,
        };

        const response = await fetch("http://localhost:3000/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(productToSend),
        });

        if (response.ok) {
            onClose();
            getProducts();
        }
    };

    return (
        <>
            <h1 className="text-center">Products</h1>
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
                    onClick={onUpdate}
                >
                    New Product
                </Button>
                <FCommonTable
                    columns={columns}
                    rows={products}
                    maxWidth={960}
                    onUpdate={onUpdate}
                />
            </div>
            <DialogProducts
                open={open}
                onClose={onClose}
                reload={getProducts}
                productUpdate={product}
                isUpdate={isUpdate}
                onInputChange={onInputChange}
                onSave={onSave}
            />
        </>
    );
}
