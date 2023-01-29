import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import { normalize } from "styled-normalize";
import { TAB_width, Mob_width } from "./Media.styled";
const GlobalStyle = createGlobalStyle`
 ${normalize};
 *{
    margin: 0;
    padding: 0;
 }
  body {
    font-family: 'Inter', 'Noto Sans TC', Sans-Serif;
    box-sizing: border-box;
    overflow-x: hidden;
    background: #323232;
  }
  p{
    word-break: break-all;
    white-space: normal;
  }
  .menu{
    color: #fff;
    position: fixed;
    top: 20px;
    right: 20px;
    padding:6px;
    background-color:#7f7f7f;
    border-radius:100%;
    display: none;
    z-index:999;
    ${TAB_width}
    {
      display: block;
    }
  }
`;
export const Section = styled.div`
  display: grid;
  grid-template-columns: 62.5% 37.5%;
  ${TAB_width} {
    display: block;
  }
`;
export const SectionLeft = styled.div`
  background: #323232;
  /* background: #e9e9e9; */
`;
export const SectionRight = styled.div`
  background: #222;
  height: 100vh;
  position: sticky;
  top: 0;
  padding: 180px 0 0;
  display: flex;
  flex-direction: column;
  gap: 80px;
  ${TAB_width} {
    /* display: ; */
    /* display: none; */
    position: fixed;
    overflow-y: scroll;
    padding: 80px 0 0;
    right: 0;
    gap: 40px;
  }
  ${Mob_width} {
    width: 100%;
  }
`;

export default GlobalStyle;
