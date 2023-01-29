import styled from "styled-components";
import { PC_width, white, lightgray } from "./Media.styled";
export const AboutWrap = styled.div`
  max-width: 380px;
  padding: 0 120px;
  ${PC_width} {
    padding: 0 80px;
  }
`;
export const SmText = styled.p`
  font-weight: 600;
  font-size: 12px;
  line-height: 1.3;
  letter-spacing: 0.1em;
  margin: 10px 0;
  color: ${white};
  &.back a {
    display: flex;
    align-items: center;
    gap: 5px;
  }
  & a {
    cursor: pointer;
    color: inherit;
    text-decoration: none;
    transition: 0.25s ease-in-out;
    &:hover {
      color: #ffd464;
      transition: 0.25s ease;
    }

    &.project-link {
      position: relative;
      .hover-code {
        position: absolute;
        overflow: hidden;
        font-size: 12px;
        transform: translateX(-10px);
        opacity: 0;
      }
      &:hover .hover-code {
        transform: translateX(5px);
        opacity: 1;
        transition: 0.25s ease;
      }
    }
  }
`;
export const SmTitle = styled(SmText)`
  color: ${lightgray};
  margin-bottom: 20px;
`;
