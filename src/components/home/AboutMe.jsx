import React from "react";


const AboutMe = () => {

  return (
    <div id="aboutme" className="jumbotron jumbotron-fluid m-0">
      <div className="container container-fluid">
        <div className="row">
          <div className="col-5 d-none d-lg-block align-self-center">
            
              <img
                className="border border-secondary rounded-circle"
                src="/assets/scLogo.svg"
                alt="profilepicture"
                width={375}
                height={375}
              />
            
          </div>

          <div className={`col-lg-7`}>
            <h2 className="display-4 mb-5 text-center">
            {`<About me 👨🏻‍🎓 />`}
            </h2>
            <p className="lead text-center">My name is   Satyaarth Chhabra. I will be a graduate of 2023 from Noida Institute of Engineering and Technology at Greater Noida with a degree in Computer Engineering. I'm most passionate about giving back to the community, and my goal is to pursue this passion within the field of software engineering.</p>
            
              <p className="lead text-center">
                <a
                  className="btn btn-outline-dark btn-lg"
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                  role="button"
                  aria-label="Resume/CV"
                >
                  Resume
                </a>
              </p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
