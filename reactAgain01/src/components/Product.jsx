import React from "react";
import Card from './Card'
import ProductItem from './ProductItem'
const Products = (props) =>{
    return(
        <>
        <ProductItem
            name = {props.items[0].name}
            amount = {props.items[0].amount}
            date = {props.items[0].date}
        />
        <ProductItem
            name = {props.items[1].name}
            amount = {props.items[1].amount}
            date = {props.items[1].date}
        />
        <ProductItem
            name = {props.items[2].name}
            amount = {props.items[2].amount}
            date = {props.items[2].date}
        />

        </>
    )
}