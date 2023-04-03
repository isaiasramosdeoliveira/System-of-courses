import React from "react";
import styled from "styled-components";
const StyleButton = styled.button`
  cursor: pointer;
  color: white;
  font-weight: 600;
  font-size: 18px;
  background: #b74545;
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  display: block;
  margin-top: 15px;
  &:hover {
    background: #993636;
  }
`;
const Button = ({ text }: any) => {
  return <StyleButton>{text}</StyleButton>;
};

export default Button;
