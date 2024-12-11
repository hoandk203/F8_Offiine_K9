import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import './App.css'

function App() {
    const [count, setCount] = useState(0);
    const onChangeCount = () => {
        setCount((prevCount) => prevCount + 1);
    };

    useEffect(() => {
        console.log(count);
    }, [count]);

    return (
        <>
            <span>count: {count}</span>
            <button onClick={onChangeCount}>Increment</button>
            <button>Decrement</button>
        </>
    );
}

export default App;
