import { useState } from 'react'
import Card from './Card'
import {FaChevronRight,FaChevronLeft} from 'react-icons/fa'


export default function Testimonial({reviews}){
    const [index, setIndex] = useState(0)

    function leftShiftHandler(){
        if(index-1 <0){
            setIndex(reviews.length -1)
        }else{
            setIndex(index-1)
        }
    }

    function rightShiftHandler(){
        if(index+1 >= reviews.length){
            setIndex(0)
        }else{
            setIndex(index+1)
        }

    }

    function surpriseHandler(){
        let randomIndex = Math.floor(Math.random() * reviews.length);
        setIndex(randomIndex);
    }

    return(
        <div className='bg-white w-[55vw] md:w-[700px] p-6 py-8 rounded hover:shadow-2xl'>
            
        <Card review = {reviews[index]}/>
        <div className='text-violet-500 text-lg m-5 '>
                <button 
                onClick={leftShiftHandler}
                className='cursor-pointer hover:text-violet-800'>
                    <FaChevronLeft/>
                </button>

                <button 
                onClick={rightShiftHandler}
                className='hover:text-violet-800'>
                    <FaChevronRight/>
                </button>
            </div>
            <div>
            <button 
            onClick={surpriseHandler}
            className='bg-violet-500 text-white rounded p-2 px-4 transition-all duration-100 hover:bg-violet-800'>
                Surprise Me
            </button>

            </div>
        </div>
    )
}