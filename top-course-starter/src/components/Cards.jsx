import React, { useState } from "react";
import Card from "./Card";

const Cards = ({ courses,category }) => {
  let allCourses = [];

  const [likedCourses, setLikedCourse] = useState([])
  // Returns a list of all courses received from the API
  const getCourses = () => {
    
    if(category ===  "All"){
      if (courses) {
        Object.values(courses).forEach((courseCategory) => {
          courseCategory.forEach((course) => {
            allCourses.push(course);
          });
        });
      }
      return allCourses;
    }else{
      return courses[category]
    }
    }

  return (
    <div className="flex flex-wrap gap-9 justify-center">
      {/* Check if courses are available */}
      {!courses || Object.keys(courses).length === 0 ? (
        <div>
          <p>No data found</p>
        </div>
      ) : (
        getCourses().map((course) => {
          return <Card key={course.id} 
          course={course} 
          likedCourses= {likedCourses} 
          setLikedCourses = {setLikedCourse} />;
        })
      )}
    </div>
  );
};

export default Cards;
