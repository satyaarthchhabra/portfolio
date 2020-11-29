import React from "react";
import { Container, Jumbotron, Row } from "react-bootstrap";
import projectData from "../../projectData/projectData";
import ProjectCard from "./ProjectCard";

const Project = () => {
  return (
    <Jumbotron fluid id="projects" className="bg-light m-0">
      <Container className="">
        <h2 className="display-4 pb-5 text-center">Projects</h2>
        <Row>
          {
            projectData?.map(project =>(

              <ProjectCard heading={project.heading} techStacks={project.techStacks} features={project.features} overview={project.overview} liveSiteURL={project.liveSiteURL}  videoId={project.videoId}sourceCodeURL={project.sourceCodeURL} />
            ))
          }
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default Project;
