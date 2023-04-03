import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "../../components/Button/Button";
import Course from "./Course/Course";
import getCourses from "../../assets/ts/controllers/getCourses";
import { ICoruse } from "../../interfaces/interfaces";

const Container = styled.section`
  input {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 410px;
    padding: 10px;
    border-radius: 10px;
    margin: auto;
  }
  .filters {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 20px;
    margin-bottom: 25px;
  }
  .courses {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    min-height: 100%;
    padding: 40px;
  }
`;
const Courses = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    async function get() {
      getCourses().then((res) => setCourses(res.data.courses));
    }
    get();
  }, []);
  return (
    <Container>
      <input type="text" name="search" id="search" />
      <div className="filters">
        <Button text="Front-end" />
        <Button text="Back-end" />
        <Button text="Data Science" />
      </div>
      <div className="courses">
        {courses.map((course: ICoruse) => (
          <div key={course.id}>
            <Course
              id={course.id}
              title={course.title}
              img={course.img}
              status={course.status}
            />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Courses;
