import React, {useState} from 'react'
import'./App.css';

export default function App() {
  const [count, setcount] = useState(0)
  return (
    <div>
      <h1>The Counter App</h1>
      {count}
      <br/>
      <button onClick={() => setcount(count + 1)}>+</button>
      <button onClick={() => setcount(count - 1)}>-</button>
    </div>
  )
}

