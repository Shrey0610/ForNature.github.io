// components/AssignmentList.js

import React from 'react';

const AssignmentList = ({ assignments }) => {
  return (
    <ul>
      {assignments.map((assignment, index) => (
        <li key={index}>{assignment.name}</li>
      ))}
    </ul>
  );
};

export default AssignmentList;
