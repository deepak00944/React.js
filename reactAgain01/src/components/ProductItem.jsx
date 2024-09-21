import React from "react";
import ProductDate from './ProductDate'

function ProductItem(props){
    return(
        <div>
        <ProductDate date = {props.date}/>
        <div>
            <h2>{props.name}</h2>
        </div>
        </div>
    )
}

export default ProductItem