import React, {useState, useEffect} from 'react';
import Course from "../Course/Course";
import { Button } from 'reactstrap';
import baseUrl from '../../API/BootAPI';
import axios from 'axios';

function AllCourse() {
  // costome function
  const getAllCoursesFromServer = ()=>{
    axios.get(`${baseUrl}/courses`).then(
      (response)=>{
        // for success
        console.log(response.data);
        setCourses(response.data);
      },
      (error)=>{
        // for error
        console.log(error);
      }
    )
  }

  // remove course from UI
  function updateCourseById(id){
    setCourses(courses.filter((item)=>item.id !== id));
  }


// useEffect
  useEffect(()=>{
    document.title="All Courses";
    getAllCoursesFromServer();
  }, [])

  // userState
    const [courses, setCourses] = useState([]);


  return (
    <div>
    { courses.length>0 ?
    courses.map((item)=> <Course key={item.id} value={item} update={updateCourseById}></Course>)
    :"No Courses" }
    </div>
  )


}

export default AllCourse