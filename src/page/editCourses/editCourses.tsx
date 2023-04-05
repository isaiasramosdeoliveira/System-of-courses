import React from "react";
import styled from "styled-components";
import { ICoruse } from "../../interfaces/interfaces";
import addCourses from "../../assets/ts/controllers/addCourses";
import { useNavigate } from "react-router-dom";

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
const AddCourses = () => {
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
    addCourses(dice);
    navigate("/courses");
    e.preventDefault();
    return;
  };
  return (
    <Container>
      <h1 className="title">Adicionar curso</h1>
      <form className="form" action="">
        <div>
          <input
            data-dice
            placeholder="Title of course"
            type="text"
            name="title"
            id="title"
          />
        </div>
        <div>
          <input
            data-dice
            placeholder="UR of photo"
            type="text"
            name="img"
            id="img"
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

export default AddCourses;
