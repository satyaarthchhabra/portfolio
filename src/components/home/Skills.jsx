
import React from "react";
import { Jumbotron, Container, Card, } from "react-bootstrap";

function Skills() {
  const skills = [
    {
      name: "html",
      path: "html.svg"
    },
    {
      name: "css",
      path: "css.svg"
    },
    {
      name: "c++",
      path: "c++.svg"
    },
    {
      name: "javascript",
      path: "js.svg"
    },
    {
      name: "react Js",
      path: "react.svg"
    },
    {
      name: "Redux",
      path: "redux.svg"
    },
    {
      name: "Mongo DB",
      path: "mongodb.svg"
    },
    {
      name: "Express Js",
      path: "expressjs.svg"
    },
    {
      name: "Node Js",
      path: "node.svg"
    },
    {
      name: "puppeteer",
      path: "puppeteer.svg"
    },
    {
      name: "Material Ui",
      path: "material-ui.svg"
    },
    {
      name: "Ant Design",
      path: "antd.svg"
    },
    {
      name: "react Bootstrap",
      path: "reactBootstrap.svg"
    },
    {
      name: "Github",
      path: "github.svg"
    },

  ]
  return (
    <Jumbotron fluid className="bg-white m-0" id="skills">
      <Container className="py-4  ">
        <h2 className=" mb-5 text-center name-text  text-new-style">
          Skills
        </h2>
        {/* <h6 className="text-left">hello</h6> */}

        <div className="skills-container mx-auto d-flex justify-content-between">
          {
            skills.map(skill => (
              <div key={skill.name} className="col-5  col-md-4 mx-auto">
                <Card className="skills-card mx-auto my-2 ">
                  <Card.Img variant="top" className="skills-img img-fluid rounded-circle" src={`/assets/skills/${skill.path}`} alt={skill.name} />
                  <Card.Body>
                    <Card.Title className="text-center text-capitalize" >{skill.name}</Card.Title>
                  </Card.Body>
                </Card>
              </div>
            ))
          }

        </div>
      </Container>
    </Jumbotron >
  );
}

export default Skills;
