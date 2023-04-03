import React from "react";
import { Outlet } from "react-router-dom";
import Menu from "./components/Menu/Menu";
import styled from "styled-components";
import Content from "./components/Content/Content";

function App() {
  return (
    <div className="App">
      <Menu />
      <Content>
        <Outlet />
      </Content>
    </div>
  );
}

export default App;
