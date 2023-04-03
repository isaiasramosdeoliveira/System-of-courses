import React from 'react'
import styled from 'styled-components'

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background: red;
  width: 100%;
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
  const handleShippingOfDices = (e: any) => {
    e.preventDefault()
    return
  };
  return (
    <Container>
      <form className="form" action="">
        <div>
          <input
            placeholder="Title of course"
            type="text"
            name="title"
            id="title"
          />
        </div>
        <div>
          <input placeholder="UR of photo" type="text" name="img" id="img" />
        </div>
        <input
          onClick={(e: any) => handleShippingOfDices(e)}
          type="submit"
          value="Criar"
        />
      </form>
    </Container>
  );
}

export default AddCourses