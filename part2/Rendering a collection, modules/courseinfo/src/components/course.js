import React from "react";

const Course = ({ course }) => {
  const Header = () => {
    return (
      <div>
        <h2>{course.name}</h2>
      </div>
    );
  };

  const Part = (props) => {
    return (
      <p>
        {props.part} {props.exercises}
      </p>
    );
  };

  const Content = () => {
    return (
      <div>
        {course.parts.map((part) => {
          return <Part key={part.id} part={part.name} exercises={part.exercises} />;
        })}
      </div>
    );
  };

  const Total = () => {
    let sum = course.parts.reduce((sum, exercise) => (sum += exercise.exercises), 0);
    return (
      <div>
        <p>
          <strong>Total of {sum} exercises</strong>
        </p>
      </div>
    );
  };

  return (
    <>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total total={course.parts} />
    </>
  );
};

export default Course;
