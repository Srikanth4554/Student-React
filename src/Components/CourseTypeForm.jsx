


import React, { useState } from 'react';

const CourseTypeForm = ({ setCourseTypes }) => {
  const [courseType, setCourseType] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setCourseTypes((prev) => prev.concat(courseType));
    setCourseType('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={courseType} onChange={(e) => setCourseType(e.target.value)}placeholder="Course Type (e.g., Individual, Group)"
        required
      />
      <button type="submit">Add Course Type</button>
    </form>
  );
};

export default CourseTypeForm;