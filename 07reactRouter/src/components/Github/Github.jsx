import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

export default function Github(){
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/deepak00944')
    //     .then((response) => response.json())
    //     .then((data) => {
    //         console.log(data);
    //         setData(data)
    //     })
    // },[])
    return(
        <>
        <h1 className="text-center m-4 bg-gray-600 text-white p-4 text-3xl ">Github Username: {data.login} </h1>
        <img className="" src={data.avatar_url} alt="" width={300}  />
        </>
    )
}

export const githubInfoLoader = async () =>{
    const  response = await fetch('https://api.github.com/users/deepak00944')
    return response.json()
}
