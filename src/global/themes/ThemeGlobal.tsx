import {ThemeProvider} from "styled-components"
import React from 'react'
import {useRecoilState} from 'recoil'
import { modeState } from "../../state/atom";

const ThemeGlobal = ({ children }: any) => {
  const [mode, setMode] = useRecoilState(modeState);
  return <ThemeProvider theme={mode}>{children}</ThemeProvider>;
};

export default ThemeGlobal