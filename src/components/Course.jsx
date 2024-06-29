import React from "react";

function Course({courseList , handleDeleteCourse ,handleCompletCourse}) {
  return courseList.map((course) => {
    return (
      <div key={course.id} className="list-content">
        <h2 className={`${course.isCompleted ? "green" : ""}`} >{course.courseName}</h2>
        <button onClick={() => handleDeleteCourse(course.id)}>❌</button>
        <button onClick={() => handleCompletCourse(course.id)}>✔️</button>
      </div>
    );
  });
}

export default Course;
