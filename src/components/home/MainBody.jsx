/* eslint-disable no-empty-pattern */
import React, { forwardRef } from "react";
import Typist from "react-typist";
import { Container, Jumbotron } from "react-bootstrap";

const MainBody = forwardRef(
  ({ }, ref) => {
    const socialIcons = [
      {
        image: "fa-github",
        url: "https://github.com/satyaarthchhabra",
      },
      {
        image: "fa-at",
        url: "mailto:satyaarthchhabra@gmail.com",
      },
      {
        image: "fa-newspaper",
        url: "https://drive.google.com/file/d/1OHUwnbEWGAAlJ3sNHvOL6Qyn60Lsz65s/view?usp=sharing",
      },
      {
        image: "fa-linkedin",
        url: "https://www.linkedin.com/in/satyaarth-chhabra-0b7ab0167/",
      },
      {
        image: "envelope-open-text",
        url: "https://github.com/satyaarthchhabra",
      },
    ]
    return (
      <Jumbotron
        fluid
        id="home"
        style={{
          background: `linear-gradient(136deg,#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, 
            #16a085,#d35400,#f1c40f)`,
          backgroundSize: "1200% 1200%",
        }}
        className="title bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"
      >
        <div id="stars"></div>
        <Container className="text-center">
          <h1 ref={ref} className="display-1">
            Satyaarth Chhabra
          </h1>
          <Typist className="lead display-3" cursor={{ show: false }}>
            {" "}
            Web Developer
          </Typist>
          <Typist className="lead typist" cursor={{ show: false }}>
            {" "}
            Passionate about changing the world with technology.
          </Typist>
          <div className="p-5">
            {socialIcons.map((icon, index) => (
              <a
                key={`social-icon-${index}`}
                target="_blank"
                rel="noopener noreferrer"
                href={icon.url}
              >
                <i className={` ${(icon.image === "fa-newspaper" || icon.image === "fa-at") ? "fas" : "fab"} ${icon.image}  fa-3x socialicons`} />
              </a>
            ))}
          </div>
          <a
            className="btn btn-outline-light btn-lg "
            href="#aboutme"
            role="button"
            aria-label="Learn more about me"
          >
            More about me
          </a>
        </Container>
      </Jumbotron>
    );
  }
);

export default MainBody;
