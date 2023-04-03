import React, { useState } from "react";
import styled from "styled-components";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { BsFillTrash3Fill, BsPencilFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import Button from "../../../components/Button/Button";


const Container = styled.div`
  position: relative;
  background: ${({ theme }) => theme.course};
  height: 300px;
  width: 250px;
  padding: 15px;
  margin: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px ${({ theme }) => theme.shadow};
  .icon {
    cursor: pointer;
    font-size: 20px;
    color: ${({ theme }) => theme.letter};
  }
  button {
    margin: 0;
  }
  .btns {
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 15px;
  }
  .presentation {
    button {
      border: none;
      background: none;
    }
  }
  .presentation,
  .btns {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1,
    button,
    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
    }
    a {
      height: 100%;
    }
  }
  img {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    margin: auto;
    margin-top: 10px;
    width: 160px;
    height: 160px;
  }
`;


const Course = ({ id, title, img, status }: any) => {
  const [favorite, setFavorite] = useState(false);
  const handleChangeFavorite = () => {
    setFavorite(favorite ? false : true);
  };
  return (
    <Container key={id}>
      <div className="presentation">
        <h1>{title}</h1>
        <button onClick={handleChangeFavorite}>
          {favorite ? (
            <MdFavorite className="icon" />
          ) : (
            <MdFavoriteBorder className="icon" />
          )}
        </button>
      </div>
      <img
        src={img}
        alt={title}
      />
      <div className="btns">
        <Link to="/">
          <BsPencilFill className="icon" />
        </Link>
        <Link to={`/courses/:${id}`}>
          <Button text="Ver Curso" />
        </Link>
        <Link to="/">
          <BsFillTrash3Fill className="icon" />
        </Link>
      </div>
    </Container>
  );
};

export default Course;
