import React from "react";
import{FcLike, FcLikePlaceholder} from 'react-icons/fc'
import { toast } from "react-toastify";
const Card = ({course, likedCourses, setLikedCourses})=>{

    function clickHandler(){
        if(likedCourses.includes(course.id)){
            setLikedCourses( (prev) => prev.filter( (cid)=> (cid !== course.id) ) );
            toast.warning("like removed")
        } else{
            if(likedCourses.length === 0){
                setLikedCourses([course.id]);
            }
            else{
                setLikedCourses((prev) => [...prev, course.id])
            }
            toast.success("Liked Successfully")
        }
    }

    return(
        <div className="w-[300px] bg-indigo-950 rounded">
            <div className="relative">
                <img className="rounded " src={course.image.url} />
                <div className="w-[30px] h-[30px] flex justify-center items-center absolute rounded-full bg-white p-3 bottom-1 right-2">
                    <button 
                    onClick={clickHandler}
                    >
                        {
                            likedCourses.includes(course.id)? (<FcLike fontSize={"1.5rem"}/>):(<FcLikePlaceholder fontSize={"1.5rem"}/>)
                        }
                    
                    </button>
                    
                </div>

            </div>
            <div className="p-2 ">
                <p className="font-bold text-white">{course.title}</p>
                
                <p className="text-white">
                    {
                        course.description.length > 100? (course.description.substr(0,100))+"..."
                        :(course.description)
                    }
                </p>
            </div>
        </div>
    )
}

export default Card;