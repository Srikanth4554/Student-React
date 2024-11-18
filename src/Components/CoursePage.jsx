
import { useState } from "react";
import "../App.css";
import CourseForm from "./CourseForm";
import CourseList from "./CourseList";
import CourseTypeForm from "./CourseTypeForm"
import RegistrationForm from "./RegistrationForm";


const CoursePage=() =>{
  const [courseTypes, setCourseTypes] = useState([]);
  const [courses, setCourses] = useState([]);
  const [registrations, setRegistrations] = useState([]);
  return (
    <div>
      <h1>Course registration</h1>
      <CourseTypeForm setCourseTypes={setCourseTypes}/>
      <CourseForm setCourses={setCourses} courseTypes={courseTypes}/>
      <RegistrationForm courses={courses} setRegistrations={setRegistrations}/> 
      <CourseList courses={courses} registrations={registrations}/>
    </div>
  )
}

export default CoursePage