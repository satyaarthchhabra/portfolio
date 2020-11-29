import React from "react";


import {MainBody,Skills,AboutMe,Project} from "./components/home";
import {Footer,Navbar} from "./components/";

import GetInTouch from "./components/home/GetInTouch.jsx";

const App = () => {
  const titleRef = React.useRef();

  return (
    <>
      <Navbar ref={titleRef} />
      <MainBody ref={titleRef} />
      <AboutMe />
      <Project
      />

      <Skills/>
      <Footer>
        <GetInTouch />
      </Footer>
    </>
  );
};

export default App;
