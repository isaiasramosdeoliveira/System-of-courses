import React from "react";
import styled from "styled-components";

const Container = styled.main`
  padding: 40px;
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.letter};
  min-height:100vh;
`;
const Content = ({ children }: any) => {
  return <Container>{children}</Container>;
};

export default Content;
