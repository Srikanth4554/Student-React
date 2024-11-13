

import React, { useState } from 'react';

const RegistrationForm = ({ courses, setRegistrations }) => {
  const [selectedCourse, setSelectedCourse] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedCourse) {
      setRegistrations((prev) => [...prev, selectedCourse]);
      setSelectedCourse('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <select value={selectedCourse} onChange={(e) => setSelectedCourse(e.target.value)} required>
        <option value="">Select Course</option>
        {courses.map((course, index) => (<option key={index} value={course.name}> {course.type}, {course.name}</option> ))}
      </select>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;