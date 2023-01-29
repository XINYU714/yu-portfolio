import { useState, useEffect } from "react";
import GlobalStyle, {
  Section,
  SectionLeft,
  SectionRight,
} from "./styles/GlobalStyle.styled";
import Home from "./page/Home";
import Nav from "./components/Nav";
import Project from "./page/Project";
import Menu from "./components/Menu";
import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  const [isHome, setIsHome] = useState(true); //to detect where
  const [isOpen, setIsOpen] = useState(false); //to set menu toggle
  const [isPc, setIsMob] = useState(false); //to set Pc or Mob
  const [resize, setReSize] = useState(window.innerWidth);
  const urlLocation = useLocation();
  useEffect(() => {
    setIsHome((pre) => {
      if (
        urlLocation.pathname === "/yu-portfolio" ||
        urlLocation.pathname === "/yu-portfolio/"
      ) {
        return (pre = true);
      } else {
        return (pre = false);
      }
    });
    window.scrollTo(0, 0);
  }, [urlLocation]);
  useEffect(() => {
    function updateSize() {
      setReSize((pre) => (pre = window.innerWidth));
    }
    window.addEventListener("resize", updateSize);
    setIsMob((currentWidth) => {
      if (resize >= 992) {
        return (currentWidth = true);
      } else {
        return (currentWidth = false);
      }
    });
    return () => window.removeEventListener("resize", updateSize);
  }, [resize]);
  const toggleHandler = (e) => {
    e.preventDefault();
    setIsOpen((pre) => {
      return (pre = !pre);
    });
  };
  return (
    <div className="App">
      <GlobalStyle />
      {/* //wrap  */}
      <Section>
        <Menu click={toggleHandler} />
        <SectionLeft>
          <Routes>
            <Route
              index
              path="/yu-portfolio"
              element={<Home />}
            />
            <Route
              path="/yu-portfolio/project/:projectId"
              element={<Project />}
            />
          </Routes>
        </SectionLeft>

        {isPc ? (
          <Nav status={isHome} />
        ) : (
          isOpen && (
            <Nav
              status={isHome}
              click={toggleHandler}
            />
          )
        )}
      </Section>
    </div>
  );
}

export default App;
