import styled from "styled-components";
import { PC_width, TAB_width, white, lightgray } from "./Media.styled";

const textStyle = (textMargin) => {
  return `
    font-weight: 400;
    font-size: 14px;
    line-height: 1.5;
    letter-spacing: 0.1em;
    color: ${white};
    margin:${textMargin} 0;
  `;
};
const IntroWrap = styled.div`
  padding: 100px 0;
  max-width: 700px;
  margin: 0 auto;
  ${PC_width} {
    padding: 100px 30px;
  }
  ${TAB_width} {
    padding: 80px 30px;
  }
`;

const Me = styled(IntroWrap)`
  padding: 50px 0;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  ${PC_width} {
    padding: 50px 30px;
  }
  & > img {
    display: block;
    width: 100px;
    height: 100px;
    border-radius: 100%;
    object-fit: cover;
  }
  & .name {
    h1 {
      font-weight: 700;
      font-size: 24px;
      line-height: 29px;
      letter-spacing: 0.1em;
      color: ${white};
    }
  }
`;
//project page
const ProjectWrap = styled(Me)`
  padding: 80px;
  transition: 0.25 ease;
  ${TAB_width} {
    padding: 50px 30px;
  }
  & .name {
    h1 {
      display: flex;
      align-items: center;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 10px;
      svg {
        display: block;
      }
    }
    & a:hover {
      transition: 0.25 ease;
      opacity: 0.7;
    }
  }
`;
const ProjectCon = styled(IntroWrap)`
  padding-top: 50px;
  padding-bottom: 50px;

  & .img-wrap {
    img {
      display: block;
      margin: 20px 0 0;
      max-width: 100%;
      height: auto;
      border-radius: 10px;
      aspect-ratio: 5/3;
      object-fit: cover;
    }
  }
  & .tag-wrap {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 5px;
    margin: 20px 0 0;
    .rel-tag {
      font-weight: 400;
      font-size: 12px;
      color: ${white};
      border-radius: 30px;
      background-color: #222;
      padding: 5px 10px;
    }
  }
`;
//normal layout
const Line = styled.div`
  border-bottom: ${(props) => props.size} solid
    ${(props) => (props.black ? "#1E1E1E" : "#7f7f7f")};
`;
const Sort = styled.h2`
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.1em;
  color: #ffd464;
  margin-bottom: 50px;
`;
const CardWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
  & ul {
    padding-inline-start: 20px;
  }
`;
const Title = styled.h3`
  font-weight: 800;
  font-size: 20px;
  line-height: 1.3;
  letter-spacing: 0.1em;
  color: ${white};
  &.not-year {
    margin-bottom: 10px;
  }
`;
const Year = styled.span`
  color: ${lightgray};
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  margin: 10px 0;
  display: block;
`;
const Des = styled.p`
  ${textStyle("0px")};
`;
const List = styled.li`
  ${textStyle("10px")};
`;
const Pos = styled(Des)`
  font-weight: 600;
  color: ${lightgray};
`;

export {
  IntroWrap,
  Sort,
  CardWrap,
  Title,
  Year,
  Des,
  List,
  Pos,
  Me,
  Line,
  ProjectWrap,
  ProjectCon,
};
