import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)
  let addValue = ()=>{
    console.log(counter);
    counter = counter + 1
    setCounter(counter)
  }

  let removeVal = ()=>{
    console.log(counter);
    setCounter(counter-1)
  }

  return (
   <>
   <h2>{counter}</h2>
   <button
   onClick={addValue}
   >
    Add</button>

   <button
   onClick={removeVal}
   >
    Remove</button>
   </>
  )
}

export default App
