import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const myObj= {
    username:"lavanaya",
    age:21
  } // we can pass this obj in fragmnets by using curly braces({}, obj = {myObj})

  return (
   <>
   <h1 className='bg-green-400 text-white p-5 rounded-xl' >Tailwind</h1>
    <Card username="Lisha" btnText = "Visit Me" />
    <Card username="Navisha" />
   </>
  )
}

export default App
