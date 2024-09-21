import React from "react";
import './Spinner.css'
function Spinner(){
    return (
        <div>
            <div className='spinner'></div>
            <div id="load">loading...</div>
        </div>
    )
}

export default Spinner;