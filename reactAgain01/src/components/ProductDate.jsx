import React from "react";

function ProductDate(){
    const month = props.date.toLocalString('en-Us', {month: 'long'});
    const day = props.date.toLocalString('en-Us', {day: '2-digit'});
    const year = props.date.getFullYear();

    return(
        <div>
            <div>{month}</div>
            <div>{year}</div>
            <div>{day}</div>
        </div>
    )
}

export default ProductDate;