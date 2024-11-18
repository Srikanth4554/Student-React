

import React from 'react';


const CourseList = ({ courses, registrations }) => {
  
  return (
    <div>
      <h2>Registered Courses</h2>
      <ul>
        {registrations.map((registration, index) => (<li key={index}>{registration}</li>))}
      </ul>
      <h2>Available Courses</h2>
      <ul>
        {courses.map((course, index) => ( <li key={index}> {course.type}, {course.name} </li>))}
      </ul>
      
    </div>
  );
};

export default CourseList;