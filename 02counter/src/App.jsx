import { useState } from 'react' // hook yha se import hua h isme hum react import nhi karte kyuki vo babbel automatic kar deta h
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter] = useState(0)

  //is tarike se value update toh ho rhi h lekin UI mai nhi hogi kyuki uska control React ke pass h toh hum yha use karenge hooks ka 
  // let counter = 5;
  const addValue = ()=>{
    console.log("clicked", counter);
    if (counter < 20) {
      counter = counter + 1
      setCounter(counter)
    }else{
      alert('You have exceeded the limit')
    }
    
  };

  const removeValue = ()=>{
    if (counter > 0) {
      setCounter(counter-1)
    }else{
      alert('Value cannot be negative')
    }
  }

  return (
   <>
   <h1>chai aur code</h1>
   <h2>Counter value:{counter}</h2>

   <button
   onClick={addValue}>Add value</button>
   <br />
   <button
   onClick={removeValue}>remove value</button>
   </>
  )
}

export default App
