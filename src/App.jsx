
import { useState } from "react";
import "./App.css";
import CourseForm from "./Components/CourseForm";
import CourseList from "./Components/CourseList";
import CourseTypeForm from "./Components/CourseTypeForm"
import RegistrationForm from "./Components/RegistrationForm";

const App=() =>{
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

export default App