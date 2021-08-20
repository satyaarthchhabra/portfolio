import React from "react";
import { Button, Card, Col, Container, Jumbotron, Row } from "react-bootstrap";
import YouTube from 'react-youtube'
import projectData from "../../projectData/projectData";
import ProjectCard from "./ProjectCard";

const Project = () => {

  return (
    <Jumbotron fluid id="projects" className="bg-light m-0">
      <Container className="">
        <h2 className=" mb-5 text-center name-text  text-new-style">
          Projects
        </h2>

        <Row className="project__container justify-content-between align-items-center mx-auto">




          {
            projectData?.map(project => (

              <ProjectCard heading={project.heading} techStacks={project.techStacks} features={project.features} overview={project.overview} liveSiteURL={project.liveSiteURL} videoId={project.videoId} sourceCodeURL={project.sourceCodeURL} />
            ))
          }
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default Project;
