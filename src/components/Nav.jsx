import React from "react";
import { Link } from "react-router-dom";
import { SmText, SmTitle, AboutWrap } from "../styles/AboutStyle.styled";
import { SectionRight } from "../styles/GlobalStyle.styled";
import { projectData } from "../data/project";

const Nav = (props) => {
  const BACK_TEXT = props.status === false && (
    <SmText
      className="back"
      onClick={props.click}
    >
      <Link to="/yu-portfolio">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.54992 10.2166C7.67214 10.3388 7.82503 10.397 8.00858 10.3913C8.1917 10.3859 8.34436 10.3221 8.46659 10.1999C8.58881 10.0777 8.64992 9.92214 8.64992 9.73325C8.64992 9.54436 8.58881 9.38881 8.46659 9.26659L7.86659 8.66659H10.0166C10.2055 8.66659 10.361 8.60259 10.4833 8.47459C10.6055 8.34703 10.6666 8.18881 10.6666 7.99992C10.6666 7.81103 10.6028 7.65259 10.4753 7.52459C10.3473 7.39703 10.1888 7.33325 9.99992 7.33325H7.86659L8.48325 6.71659C8.60547 6.59436 8.66392 6.44147 8.65859 6.25792C8.65281 6.07481 8.58881 5.92214 8.46659 5.79992C8.34436 5.6777 8.18881 5.61659 7.99992 5.61659C7.81103 5.61659 7.65547 5.6777 7.53325 5.79992L5.79992 7.53325C5.66659 7.66659 5.59992 7.82214 5.59992 7.99992C5.59992 8.1777 5.66659 8.33325 5.79992 8.46659L7.54992 10.2166ZM7.99992 14.6666C7.0777 14.6666 6.21103 14.4915 5.39992 14.1413C4.58881 13.7915 3.88325 13.3166 3.28325 12.7166C2.68325 12.1166 2.20836 11.411 1.85859 10.5999C1.50836 9.78881 1.33325 8.92214 1.33325 7.99992C1.33325 7.0777 1.50836 6.21103 1.85859 5.39992C2.20836 4.58881 2.68325 3.88325 3.28325 3.28325C3.88325 2.68325 4.58881 2.20814 5.39992 1.85792C6.21103 1.50814 7.0777 1.33325 7.99992 1.33325C8.92214 1.33325 9.78881 1.50814 10.5999 1.85792C11.411 2.20814 12.1166 2.68325 12.7166 3.28325C13.3166 3.88325 13.7915 4.58881 14.1413 5.39992C14.4915 6.21103 14.6666 7.0777 14.6666 7.99992C14.6666 8.92214 14.4915 9.78881 14.1413 10.5999C13.7915 11.411 13.3166 12.1166 12.7166 12.7166C12.1166 13.3166 11.411 13.7915 10.5999 14.1413C9.78881 14.4915 8.92214 14.6666 7.99992 14.6666ZM7.99992 13.3333C9.4777 13.3333 10.7361 12.8139 11.7753 11.7753C12.8139 10.7361 13.3333 9.4777 13.3333 7.99992C13.3333 6.52214 12.8139 5.2637 11.7753 4.22459C10.7361 3.18592 9.4777 2.66659 7.99992 2.66659C6.52214 2.66659 5.26392 3.18592 4.22525 4.22459C3.18614 5.2637 2.66659 6.52214 2.66659 7.99992C2.66659 9.4777 3.18614 10.7361 4.22525 11.7753C5.26392 12.8139 6.52214 13.3333 7.99992 13.3333Z"
            fill="currentColor"
          />
        </svg>
        Back to about me
      </Link>
    </SmText>
  );
  const PROJECT_ARR = projectData.map((pj) => {
    return (
      <SmText
        key={pj.id}
        onClick={props.click}
      >
        <Link
          to={`/yu-portfolio/project/${pj.id}`}
          className="project-link"
        >
          {pj.projectName}
          <span className="hover-code">&lsaquo;&rsaquo;</span>
        </Link>
      </SmText>
    );
  });
  return (
    <SectionRight>
      <AboutWrap>{BACK_TEXT}</AboutWrap>
      <AboutWrap>
        <SmTitle>Projects</SmTitle>
        {PROJECT_ARR}
      </AboutWrap>
      <AboutWrap>
        <SmTitle>Contact</SmTitle>
        <SmText>
          TEL:&ensp;<a href="tel:+886018232821">+886 9182323821</a>
        </SmText>
        <SmText>
          Email:&ensp;
          <a href="mailto:edc2312321@gmail.com">edc2312321@gmail.com </a>
        </SmText>
        <SmText>
          GitHub:&ensp;
          <a
            href="https://github.com/XINYU714"
            target="_blank"
          >
            https://github.com/XINYU714
          </a>
        </SmText>
      </AboutWrap>
      <AboutWrap>
        <SmTitle>© Stacy 2023</SmTitle>
      </AboutWrap>
    </SectionRight>
  );
};

export default Nav;
