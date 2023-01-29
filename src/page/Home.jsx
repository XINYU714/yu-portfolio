import React from "react";
import {
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
} from "../styles/Introlayout.styled";
import experience from "../data/experience";
import skills from "../data/skills";
import uuid from "react-uuid";

const Home = () => {
  const experienceData = experience.map((ele) => {
    return (
      <div key={ele.id}>
        <Title>{ele.title}</Title>
        <Year>{ele.year}</Year>
        <ul>
          {ele.des.map((item) => {
            return <List key={uuid()}>{item}</List>;
          })}
        </ul>
      </div>
    );
  });
  const skillsData = skills.map((ele) => {
    return (
      <div key={ele.id}>
        <Title className="not-year">{ele.title}</Title>
        <ul>
          {ele.des.map((item) => {
            return <List key={uuid()}>{item}</List>;
          })}
        </ul>
      </div>
    );
  });
  return (
    <>
      <Line size="2px">
        <Me>
          <img
            src="/yu-portfolio/images/me.webp"
            width="100"
            height="100"
          ></img>
          <div className="name">
            <h1>STACY CHENG</h1>
            <Pos>Front end developer</Pos>
          </div>
        </Me>
      </Line>
      <Line size="1px">
        <IntroWrap>
          <Sort>Experience</Sort>
          <CardWrap>{experienceData}</CardWrap>
        </IntroWrap>
      </Line>
      <Line size="1px">
        <IntroWrap>
          <Sort>Skills</Sort>
          <CardWrap>{skillsData}</CardWrap>
        </IntroWrap>
      </Line>
      <Line size="1px">
        <IntroWrap>
          <Sort>Eudcation</Sort>
          <CardWrap>
            <div>
              <Title>數位學習設計與管理學系, National Chiayi University</Title>
              <Year>2018.09 - 2022.06</Year>
              <Des>擔任系學會副會長、系網站管理員</Des>
            </div>
          </CardWrap>
        </IntroWrap>
      </Line>
    </>
  );
};

export default Home;
