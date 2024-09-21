import React from "react";

const Filter = ({filterData, category, setCategory})=>{

    function fliterHandler(title){
        setCategory(title)
    }
    return(
        <div className="flex justify-center items-center gap-4 p-5">
            {filterData.map((data)=>{
                return(
                <button 
                className={`bg-blue-700 px-4 p-2 rounded text-white text hover:bg-opacity-50 font-semibold 
                ${category === data.title ?
                "bg-opacity-30 border-white"
                :"bg-opacity-90 border-transparent"}` }
                key={data.id}
                onClick={()=>fliterHandler(data.title)}
                >
                     {data.title}
                </button>)
            })}
        </div>
    )
}

export default Filter;