import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div id="main" style={{backgroundColor:color}}>
      <div className='button'>
      <button 
      onClick= {()=> setColor("olive")}
      >Default</button>
      <button 
      style={{backgroundColor:"red"}}
      onClick= {()=> setColor("red")}
      >Red</button>
      <button 
      style={{backgroundColor:"green"}}
      onClick= {()=> setColor("green")}
      >Green</button>
      <button 
      onClick= {()=> setColor("Blue")}
      style={{backgroundColor:"blue"}}
      >Blue</button>
    </div>
    </div>
    
  )
}

export default App
