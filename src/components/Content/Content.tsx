import React from "react";
import styled from "styled-components";

const Container = styled.main`
  padding: 40px;
`;
const Content = ({ children }: any) => {
  return <Container>{children}</Container>;
};

export default Content;
