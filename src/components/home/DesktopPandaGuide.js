import React from "react";
import { Container, Image } from "react-bootstrap";
import PandaGuide from "../../images/Mask Group 1.png";

const DesktopPandaGuide = () => {
  return (
    <Container className="container-body-koupon d-none d-md-block" expand="lg">
      <div className="koupon-panda-guide">
        <div className="koupon-panda-guide-left">
          <div className="koupon-panda-guide-left-inner">
            <h1 className="koupon-panda-guide-heading">Panda Guide</h1>
            <span className="koupon-panda-guide-left-inner-text">
              The ultimate blog with shopping tips and money saving hacks
            </span>
            <div className="koupon-panda-guide-left-inner-button">
              <a href="#guide" className="koupon-panda-guide-left-inner-anchor">
                Explore Now
              </a>
            </div>
          </div>
        </div>
        <div className="koupon-panda-guide-right">
          <div className="koupon-panda-guide-right-inner">
            <Image src={PandaGuide} />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default DesktopPandaGuide;
