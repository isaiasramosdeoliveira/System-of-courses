import { createGlobalStyle } from "styled-components";

const StyleGlobal = createGlobalStyle`
    *{
    padding:0px;
    margin:0px;
    box-sizing:border-box;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    text-decoration:none;
    button{
        border:none;
    }
}
`;

export default StyleGlobal;
