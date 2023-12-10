import React, { useState } from "react"

export default function Count(){
    const [counter, setCounter] = useState(0)

    function addValue(){
        if (counter < 20) {
            setCounter(counter+1)
            // setCounter((counter)=> counter+1)
            // setCounter((counter)=> counter+1)
            // setCounter((counter)=> counter+1)
            // setCounter((counter)=> counter+1)
        }else{
            alert("You hav excede the limit")
        }
        
    }

    const removeVal = () =>{
        if (counter > 0 ) {
            setCounter(counter - 1)
        }else{
            alert("mana tera jeewan negative m chl rha h ye naa ho paayega lekin")
        }
        
    }
    return(
        <>
        <h2>Counter Value: {counter}</h2>
        <button onClick={addValue}>Add</button>
        <button onClick={removeVal}>Remove</button>
        </>
    )
}