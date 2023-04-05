import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ICoruse } from "../../interfaces/interfaces";
import addCourses from "../../assets/ts/controllers/addCourses";
import { useNavigate, useParams } from "react-router-dom";
import getCourses from "../../assets/ts/controllers/getCourses";
import editCourses from "../../assets/ts/controllers/editCourses";

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  .title {
    display: block;
  }
  .form {
    label {
      display: block;
    }
    input {
      width: 300px;
      padding: 10px 20px;
      font-size: 16px;
      border-radius: 10px;
      border: none;
      margin-top: 15px;
    }
    input[type="submit"] {
      cursor: pointer;
      display: flex;
      margin: auto;
      margin-top: 15px;

      background: ${({ theme }) => theme.course};
      color: ${({ theme }) => theme.letter};
      box-shadow: 0px 0px 10px ${({ theme }) => theme.shadow};
      padding: 10px 20px;
      font-size: 16px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 10px;
    }
  }
`;
const EditCourses = () => {
  const {id} = useParams()
  const [courses, setCourses] = useState([]);
  const [title, setTitle] = useState("");
  const [img, setImg] = useState("");
  useEffect(() => {
    async function get() {
      getCourses().then((res) =>
      setCourses(res.data.filter((course: any) => course.id == id))
      );
    }
    get();
  }, []);
  useEffect(() => {
    courses.map((course: ICoruse) => {
      setTitle(course.title);
      setImg(course.img);
    });
  }, [courses])
  const navigate = useNavigate();
  const handleShippingOfDices = (e: any) => {
    const inputs = document.querySelectorAll(
      "[data-dice]"
    ) as NodeListOf<HTMLInputElement>;
    const dice: ICoruse = {
      title: inputs[0].value,
      img: inputs[1].value,
      status: false,
    };
    editCourses(id, dice);
    navigate("/courses");
    e.preventDefault();
    return;
  };
  return (
    <Container>
      <h1 className="title">Editar curso</h1>
      <form className="form" action="">
        <div>
          <input
            onChange={(e) => setTitle(e.target.value)}
            data-dice
            placeholder="Title of course"
            type="text"
            name="title"
            id="title"
            value={title}
          />
        </div>
        <div>
          <input
            onChange={(e) => setImg(e.target.value)}
            data-dice
            placeholder="UR of photo"
            type="text"
            name="img"
            id="img"
            value={img}
          />
        </div>
        <input
          onClick={(e: any) => handleShippingOfDices(e)}
          type="submit"
          value="Criar"
        />
      </form>
    </Container>
  );
};

export default EditCourses;
