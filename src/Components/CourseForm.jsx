



import React, { useState } from 'react';

const CourseForm = ({ courseTypes, setCourses }) => {
  const [courseName, setCourseName] = useState('');
  const [selectedType, setSelectedType] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setCourses((prev) => [...prev, { name: courseName, type: selectedType }]);
    setCourseName('');
    setSelectedType('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={courseName} onChange={(e) => setCourseName(e.target.value)}placeholder="Course Name (e.g., Hindi, English)"
        required
      />
      <select value={selectedType} onChange={(e) => setSelectedType(e.target.value)} required>
        <option value="">Select Course Type</option>
        {courseTypes.map((type, index) => (<option key={index} value={type}>{type}</option>))}
      </select>
      <button type="submit">Add Course</button>
    </form>
  );
};

export default CourseForm;