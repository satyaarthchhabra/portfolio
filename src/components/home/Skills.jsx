import React from "react";
import { Jumbotron, Container,} from "react-bootstrap";
import { useScrollPosition } from "../../hooks/useScrollPosition";

function Skills() {
  const skillsTabRef = React.useRef();
  const [isScrolled, setIsScrolled] = React.useState(false);
  

  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (!isScrolled && currPos.y - 400 < 0) setIsScrolled(true);
    },
    [],
    skillsTabRef
  );
  return (
    <Jumbotron ref={skillsTabRef} fluid className="bg-white m-0" id="skills">
      <Container className="py-4 d-flex justify-content-center align-items-center flex-column ">
        <h1 ref={skillsTabRef} className="display-1 pb-3 text-center">
          Skills
        </h1>
      <img src="/assets/Skills.svg" alt="" className="img-fluid"/>
      </Container>
    </Jumbotron>
  );
}

export default Skills;
