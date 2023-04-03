import React from "react";
import styled from "styled-components";
const StyleButton = styled.button`
  cursor: pointer;
  color: white;
  font-weight: 600;
  font-size: 16px;
  background: #b74545;
  padding: 8px 20px;
  border: none;
  border-radius: 10px;
  display: block;
  margin-top: 15px;
  &:hover {
    background: #993636;
  }
`;
const Button = ({ text, onClick }: any) => {
  return <StyleButton onClick={onClick} className="button">{text}</StyleButton>;
};

export default Button;
