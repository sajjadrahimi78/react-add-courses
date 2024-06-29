import { useState } from "react";
import "./App.css";
import Course from "./components/Course";

function App() {
  const [courseList, setCourseList] = useState([]);
  const [newCourse, setNewCourse] = useState("");

  console.log(courseList);

  const handleChange = (e) => {
    setNewCourse(e.target.value);
  };
  const handleAddCourse = () => {
    const course = {
      id:
        courseList.length === 0 ? 1 : courseList[courseList.length - 1].id + 1,
      courseName: newCourse,
      isCompleted: false,
    };

    setCourseList([...courseList, course]);
  };
  const handleDeleteCourse = (courseId) => {
    setCourseList(courseList.filter((course) => course.id !== courseId));
  };
  const handleCompletCourse = (courseId) => {
    setCourseList(
      courseList.map((course) =>
        course.id === courseId ? { ...course, isCompleted: !course.isCompleted } : course
      )
    );
  };

  return (
    <div className="">
      <div className="add-course">
        <input
          type="text"
          onChange={handleChange}
          placeholder="add courses..."
        />
        <button onClick={handleAddCourse}>Add Course</button>
      </div>
      <div className="list">
        <Course
          courseList={courseList}
          handleDeleteCourse={handleDeleteCourse}
          handleCompletCourse={handleCompletCourse}
        />
      </div>
    </div>
  );
}

export default App;
