import { useState, createContext, useContext, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Mom, Dad, Child, Grand } from "./components";
import { provider } from "./utils";
import axios from "axios";

function App() {
    const [products, setProducts] = useState([]);
    const getProducts = async () => {
        try {
            const response = await axios.get(
                "https://api-exercise-sopi.vercel.app/api/v1/products"
            );
            setProducts(response.data.data.listProduct);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getProducts();
    }, []);
    return (
        <>
            <h1>Products list</h1>
            <ul>
                {products.map((product) => (
                    <li key={product._id}>{product.name}</li>
                ))}
            </ul>
            {/* <provider.Provider value={{ name: name, count: count }}>
                <Grand />
            </provider.Provider> */}
        </>
    );
}

export default App;
