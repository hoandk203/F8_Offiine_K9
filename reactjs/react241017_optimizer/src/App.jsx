import { useState } from 'react'
import './App.css'
import { Child } from './components'


let count = 0;
function App() {
  const [count2, setCount2] = useState(0);
  
  const count1 = () => {
    count= count + 1;
    console.log(count);
    
  }

  return (
    <>
      <p>count 1: {count}</p><p>count 2: {count2}</p>
      <button onClick={count1}>+ count 1</button>
      <button onClick={() => setCount2(count2 + 1)}>+ count 2</button>
    </>
  )
}

export default App
