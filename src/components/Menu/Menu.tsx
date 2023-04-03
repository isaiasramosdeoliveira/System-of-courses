import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiAddToQueue } from "react-icons/bi";
import {} from "react-icons/ai";
import { FaUserAlt, FaHome } from "react-icons/fa";
import { BsFillBrightnessHighFill, BsFillMoonFill, BsFillGrid3X3GapFill } from "react-icons/bs";
import styled from "styled-components";
import Main from "../../page/Main/Main";
import {useRecoilState} from 'recoil'
import { modeState } from "../../state/atom";
import { ThemeDark, ThemeLight } from "../../global/variables/modes";

const Header = styled.header`
  background: #e13535;
  width: "100%";
  padding: 20px;
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    a,
    button {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      color: white;
      font-size: 25px;
    }
    button {
      cursor: pointer;
      background: none;
      border: none;
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
  const [mode, setMode] = useRecoilState(modeState);
  const [status, setStatus] = useState(true);  
  const handleChangeMode = () => {
    setMode(status? ThemeLight: ThemeDark);
    setStatus(status ? false : true);
  }
  return (
    <Header>
      <nav>
        <ul className="navbar">
          <Link to="/">
            <FaHome />
          </Link>
          <Link to="/Courses">
            <BsFillGrid3X3GapFill />
          </Link>
          <Link to="/addCourses">
            <BiAddToQueue />
          </Link>
        </ul>
        <ul className="login">
          <button onClick={handleChangeMode}>
            {status ? <BsFillMoonFill /> : <BsFillBrightnessHighFill />}
          </button>
          <Link to="">
            <FaUserAlt />
          </Link>
        </ul>
      </nav>
    </Header>
  );
};

export default Menu;
