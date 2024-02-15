// components/AddCourseForm.js

import React, { useState } from 'react';

const AddCourseForm = ({ addCourse }) => {
  const [courseName, setCourseName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (courseName.trim() !== '') {
      addCourse({ name: courseName, assignments: [] });
      setCourseName('');
    }
  };

  return (
    <>
    <br/>
    <form onSubmit={handleSubmit} >
      <label style={{textAlign: 'left', fontSize: '25px'}}>
        Course Name:
        <input
          type="text"
          value={courseName}
          onChange={(e) => setCourseName(e.target.value)}
        />
      </label>
      <button type="submit">Add Course</button>
    </form></>
  );
};

export default AddCourseForm;
