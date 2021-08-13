import React, { useRef } from "react";
import { Jumbotron, Container, } from "react-bootstrap";

function Skills() {



  return (
    <Jumbotron fluid className="bg-white m-0" id="skills">
      <Container className="py-4 d-flex justify-content-center align-items-center flex-column ">
        <h2 className=" mb-5 text-center  text-new-style">
          Skills
        </h2>
        <img src="/assets/Skills.svg" alt="" className="img-fluid" />
      </Container>
    </Jumbotron>
  );
}

export default Skills;
