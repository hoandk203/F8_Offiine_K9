import { useState, useReducer } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { v4 as uuidv4 } from "uuid";
import reducer from "./reducer";

import "./App.css";

// tất cả những gì useState làm được thì useReducer cũng làm được
// vấn đề là khi component có quá nhiều state => useReducer có thể quản lý các state, và có thể tách ra file khác
// code trong 1 file ngắn hơn (thực tế thì số lượng dòng code cộng lại không hề ít hơn)

//reducer la mot ham

function App() {
    // const [count, setCount] = useState(0);
    const [state, dispatch] = useReducer(reducer, {
        products: [],
        product: {
            id: uuidv4(),
            name: "",
            price: "",
            description: "",
        },
    });
    const [products, setProducts] = useState([]);

    const onInput = (event) => {
        const { name, value } = event.target;
        // console.log(name, payload);
        dispatch({ action: "product/onInput", payload: { name, value } });
    };
    const onSave = () => {
        dispatch({ action: "products/onSaveProduct", payload: state.product });
    };
    return (
        <>
            <h1>Product form</h1>
            <div style={{ display: "flex", flexDirection: "column", maxWidth: "400px" }}>
                <input name="name" placeholder="name" onChange={onInput} value={state.product.name} />
                <input name="price" placeholder="price" onChange={onInput} value={state.product.price} />
                <input name="description" placeholder="description" onChange={onInput} value={state.product.description} />
                <button onClick={() => onSave()}>Add</button>
            </div>
            <div>
                <ul>
                    {state.products.map((product) => (
                        <li key={product.id}>
                            {product.name} {product.price} {product.description}
                        </li>
                    ))}
                </ul>
            </div>
            {/* <h1>Count: {count}</h1> */}
            {/* <button onClick={() => setCount((count) => count + 1)}>increase</button>
            <button onClick={() => setCount((count) => count - 1)}>decrease</button> */}
            {/* <button onClick={() => dispatch({ action: "increase", payload: 90 })}>increase</button> */}
        </>
    );
}

export default App;
