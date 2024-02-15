// import React, { useState, useEffect } from 'react';

// const PersonalizedLearningPlatform = () => {
//   const [userProfile, setUserProfile] = useState({
//     learningStyle: 'Visual',
//     strengths: ['Mathematics', 'Science'],
//     weaknesses: ['History', 'Literature'],
//   });

//   const [learningPathways, setLearningPathways] = useState([]);

//   useEffect(() => {
//     // Simulate API call to fetch learning pathways based on user profile
//     const fetchLearningPathways = async () => {
//       try {
//         // In a real application, replace this with an actual API endpoint
//         const response = await fetch('https://api.example.com/learning-pathways', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ userProfile }),
//         });

//         const data = await response.json();
//         setLearningPathways(data.pathways);
//       } catch (error) {
//         console.error('Error fetching learning pathways:', error);
//       }
//     };

//     // Call the fetchLearningPathways function
//     fetchLearningPathways();
//   }, [userProfile]);

//   const generateLearningPathways = () => {
//     // For simplicity, this function only logs pathways to the console
//     console.log('Generated Learning Pathways:', learningPathways);
//   };

//   return (
//     <div>
//       <h1>Personalized Learning Platform</h1>
//       <p>Learning Style: {userProfile.learningStyle}</p>
//       <p>Strengths: {userProfile.strengths.join(', ')}</p>
//       <p>Weaknesses: {userProfile.weaknesses.join(', ')}</p>
//       <button onClick={generateLearningPathways}>Generate Pathways</button>
//     </div>
//   );
// };

// export default PersonalizedLearningPlatform;


// App.js

import React, { useState } from 'react';
import CourseList from './CourseList';
import AddCourseForm from './AddCourseForm';
import './PathForge1.css'

const PersonalizedLearningPlatform = () => {
  const [courses, setCourses] = useState([]);

  const addCourse = (course) => {
    setCourses([...courses, course]);
  };
  const imagePath = '/woman-alone-nature-listening-music-with-headphones-dig_53876-146116.jpg';

  return (
    <>
    <div className="container my-5" >
    <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
      <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
        <h1 className="display-4 fw-bold lh-1 text-body-emphasis">

    <div id= 'PathForge' className="box-container Pcontainer" style= {{textAlign: 'center', fontSize: '30px'}}>
        <br/>
      <h1 style={{fontSize: '30px'}}>Academic Tracker & Planner</h1>
      <AddCourseForm addCourse={addCourse}  />
      <CourseList courses={courses} />
    </div>
        </h1>
       
        <br />
      </div>
      <div className="col-lg-3" style={{fontSize: '20px'}}>
        This is an example of how you can plan for your courses. It is like a to-do list but once you know what you've to do, you'll be able to do your courses faster.
      </div>
    </div>
  </div>
    </>
  );
};

export default PersonalizedLearningPlatform;
