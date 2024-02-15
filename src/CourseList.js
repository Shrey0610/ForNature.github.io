// components/CourseList.js

import React from 'react';
import AssignmentList from './AssignmentList';

const CourseList = ({ courses }) => {
  return (
    <div>
      <h2>Your Courses</h2>
      <ul>
        {courses.map((course, index) => (
          <li key={index}>
            <strong>{course.name}</strong>
            <AssignmentList assignments={course.assignments} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseList;
