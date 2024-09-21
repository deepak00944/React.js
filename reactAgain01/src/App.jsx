import { useState } from 'react'
import './App.css'
import Product from './components/Product'

function App() {
  const product = [
    {
      name :"Tide",
      amount:210,
      date : new Date(2021, 5, 5),
    },
    {
      name :"Surfexcel",
      amount:310,
      date : new Date(2022, 4, 2),
    },
    {
      name :"Airel",
      amount:410,
      date : new Date(2023, 3, 1),
    },
  ]
  return (
   <div>
    <Product>items = {product}</Product>
   </div>
  )
}

export default App
