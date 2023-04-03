import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiAddToQueue } from "react-icons/bi";
import {} from "react-icons/ai";
import { FaUserAlt, FaHome } from "react-icons/fa";
import { BsFillBrightnessHighFill, BsFillMoonFill, BsFillGrid3X3GapFill } from "react-icons/bs";
import styled from "styled-components";
import Main from "../../page/Main/Main";

const Header = styled.header`
  background: #e13535;
  width: "100%";
  padding: 20px;
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    a {
      color: white;
      font-size: 25px;
    }
    ul {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 25px;
    }
  }
`;

const Menu = () => {
  const [mode, setMode] = useState(false);
  return (
    <Header>
      <nav>
        <ul className="navbar">
          <Link to="/">
            <FaHome />
          </Link>
          <Link to="/addCourses">
            <BiAddToQueue />
          </Link>
          <Link to="/Courses">
            <BsFillGrid3X3GapFill />
          </Link>
          <Link to=""></Link>
        </ul>
        <ul className="login">
          <Link to="">
            <BsFillBrightnessHighFill />
          </Link>
          <Link to="">
            <FaUserAlt />
          </Link>
        </ul>
      </nav>
    </Header>
  );
};

export default Menu;
