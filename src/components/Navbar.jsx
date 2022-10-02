import React, { useState, useEffect, forwardRef, useRef } from "react";
import { useScrollPosition } from "../hooks/useScrollPosition";
import useResizeObserver from "../hooks/useResizeObserver";
import { Navbar, Nav } from "react-bootstrap";

const Navigation = forwardRef((props, ref) => {
  const [isTop, setIsTop] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const navbarMenuRef = useRef();
  const navbarDimensions = useResizeObserver(navbarMenuRef);
  const navBottom = navbarDimensions ? navbarDimensions.bottom : 0;
  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (!navbarDimensions) return;
      currPos.y + ref.current.offsetTop - navbarDimensions.bottom > 5
        ? setIsTop(true)
        : setIsTop(false);
      setScrollPosition(currPos.y);
    },
    [navBottom]
  );

  useEffect(() => {
    if (!navbarDimensions) return;
    navBottom - scrollPosition >= ref.current.offsetTop
      ? setIsTop(false)
      : setIsTop(true);
  }, [navBottom, navbarDimensions, ref, scrollPosition]);

  return (
    <Navbar
      ref={navbarMenuRef}
      className={` fixed-top  ${
        !isTop ? "navbar-white" : "navbar-transparent"
      }`}
      expand="lg"
    >
      <Navbar.Brand
        className="brand text-new-style-navbar"
        href={process.env.PUBLIC_URL + "/#home"}
      >
        Satyaarth
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggler" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link
            className="nav-link lead font-weight-bolder nav-link-style "
            href={process.env.PUBLIC_URL + "/#projects"}
          >
            Projects
          </Nav.Link>
          <Nav.Link
            className="nav-link lead font-weight-bolder nav-link-style"
            href="https://drive.google.com/file/d/1eHkn0eNrq-Maw7bJOTDB7fH9XFGft_g8/view?usp=sharing"
            target="_blank"
            rel="noreferrer noopener"
          >
            Resume
          </Nav.Link>
          <Nav.Link
            className="nav-link lead font-weight-bolder nav-link-style"
            href="https://satyarthchhabra18.medium.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Blogs
          </Nav.Link>

          <Nav.Link
            className="nav-link lead font-weight-bolder nav-link-style"
            href={process.env.PUBLIC_URL + "/#aboutme"}
          >
            About
          </Nav.Link>

          <Nav.Link
            className="nav-link lead font-weight-bolder nav-link-style"
            href={process.env.PUBLIC_URL + "/#skills"}
          >
            Skills
          </Nav.Link>
          <Nav.Link
            className="nav-link lead font-weight-bolder nav-link-style"
            href={process.env.PUBLIC_URL + "/#contact"}
          >
            Get In Touch
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
});

export default Navigation;
