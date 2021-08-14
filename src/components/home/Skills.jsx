
import React from "react";
import { Jumbotron, Container, Card, } from "react-bootstrap";

function Skills() {



  return (
    <Jumbotron fluid className="bg-white m-0" id="skills">
      <Container className="py-4  ">
        <h2 className=" mb-5 text-center  text-new-style">
          Skills
        </h2>
        <h6 className="text-left">hello</h6>
        {/* <img src="/assets/Skills.svg" alt="" className="img-fluid" /> */}
        <div className="skills-container d-flex justify-content-between">
          <Card className="skills-card col-10  col-md-3">
            <Card.Img variant="top" className="skills-img img-fluid rounded-circle" src="/assets/skills/html.svg" />
            <Card.Body>
              <Card.Title className="text-center" >HTML</Card.Title>
            </Card.Body>
          </Card>
          <Card className="skills-card col-10  col-md-3">
            <Card.Img variant="top" className="skills-img img-fluid rounded-circle" src="/assets/skills/html.svg" />
            <Card.Body>
              <Card.Title className="text-center" >HTML</Card.Title>
            </Card.Body>
          </Card>
          <Card className="skills-card col-10  col-md-3">
            <Card.Img variant="top" className="skills-img img-fluid rounded-circle" src="/assets/skills/html.svg" />
            <Card.Body>
              <Card.Title className="text-center" >HTML</Card.Title>
            </Card.Body>
          </Card>

        </div>
      </Container>
    </Jumbotron >
  );
}

export default Skills;
