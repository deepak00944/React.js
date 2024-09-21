import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Testimonial from './components/Testimonial'
import {reviews} from './data.js'

function App() {

  return (
    <div className='w-[100vw] h-[100vh] flex flex-wrap flex-col justify-center items-center '>
      <div className='text-center flex flex-wrap flex-col justify-center items-center gap-3'>

        <h1 className='text-white font-bold text-2xl'>Our Testimonial</h1>

        <div className='h-1 w-[100px] bg-violet-900'></div>

        <Testimonial reviews = {reviews}/>
      </div>
  

    </div>
  )
}

export default App
