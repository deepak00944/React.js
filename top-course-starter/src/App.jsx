import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import Card from './components/Card'
import Cards from './components/Cards'
import Filter from './components/Fliter'
import {apiUrl, filterData} from "./data";
import {toast} from "react-toastify"
import Spinner from './components/Spinner'

function App() {

  const [loading, setLoading] = useState(true)

  const [courses, setCourses] = useState(null)
  const [category,setCategory] = useState(filterData[0].title)
  useEffect(()=>{
    const fetchData = async()=>{
      try{
        const res = await fetch(apiUrl);
        const output = await res.json();
        setCourses(output.data)
        console.log("courses value updated");
        console.log(output);
        
      }
      catch(error){
        toast.error("Something went wrong")
      }
      setLoading(false)
    }
    fetchData()
  },[])
  return (
    <div>
    <NavBar/>

    <div>

    <Filter
      filterData = {filterData}
      category={category}
      setCategory={setCategory}
    />


    <div className='w-11/12 max-w-[1200px] min-[50vh] mx-auto flex flex-wrap justify-center:'>
      {
        loading ? (<Spinner/>) : (<Cards
        courses={courses} category={category}
        />)
      }

    </div>

    </div>
    </div>
  )
}

export default App
