import React from "react";
import { creativeCourses, makerCourses } from "./constant";
import CourseCreator from "./CourseCreator";
import "./styles.scss";

const CoursesComponent = () => {
  const creativeCourse = {
    subContent: {
      subHeading: "Creative Courses",
      subCourse: "View All Courses",
      subtitle: "Learn creative skills with the creative community.",
    },
    courses: creativeCourses,
  };
  const courseMaker = {
    subContent: {
      subHeading: "Makers Courses",
      subCourse: "View All Courses",
      subtitle: "Build things that matters to you!",
    },
    courses: makerCourses,
  };
  return (
    <div className="courses-section _section-main-heading">
      <h1 className="main-header">Our Popular Courses</h1>
      <CourseCreator {...creativeCourse} />
      <div style={{ margin: "60px 0" }}></div>
      <CourseCreator {...courseMaker} />
      <div style={{ marginBottom: "120px" }}></div>
    </div>
  );
};

export default CoursesComponent;
