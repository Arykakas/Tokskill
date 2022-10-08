import React from "react";
import Card from "./Card";

const CourseCreator = ({
  subContent: { subHeading, subCourse, subtitle },
  courses,
}) => {
  return (
    <div className="courses-container">
      <div className="course-content ">
        <div className="sub-content _section-main-heading">
          <h1 className="left-heading">{subHeading}</h1>
          <h1 className="vw">
            <a href="https://learn.tokskill.com/s/store">{subCourse}</a>
          </h1>
          <div className="sub-title">
            <p>{subtitle}</p>
          </div>
        </div>
        <div className="courses">
          {courses.map((item, i) => (
            <Card key={i} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseCreator;
