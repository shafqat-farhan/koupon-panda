import React from "react";
import { Container, Carousel, Row, Col, Card } from "react-bootstrap";
import Fashion from "../../images/fashion.png";
import Dubai from "../../images/dubai.png";
import Food from "../../images/food.png";
import Makeup from "../../images/makeup.png";

const DesktopVerticalCardsCarousel = () => {
  return (
    <Container className="container-body-koupon d-none d-md-block" expand="lg">
      <Carousel indicators={false} id="myVerticalSlider">
        <Carousel.Item>
          <Row className="text-center">
            <Col>
              <Card>
                <Card.Img variant="top" src={Fashion} />
                <Card.Body className="vertical-slider-koupon-body">
                  <Card.Text className="vertical-slider-koupon-text">
                    25% off dresses on <strong>Namshi</strong>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img variant="top" src={Dubai} />
                <Card.Body className="vertical-slider-koupon-body">
                  <Card.Text className="vertical-slider-koupon-text">
                    10% saving on flights to <strong>Dubai</strong>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img variant="top" src={Food} />
                <Card.Body className="vertical-slider-koupon-body">
                  <Card.Text className="vertical-slider-koupon-text">
                    SR20 discount at <strong>HungerStation</strong>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img variant="top" src={Makeup} />
                <Card.Body className="vertical-slider-koupon-body">
                  <Card.Text className="vertical-slider-koupon-text">
                    2 free samples with SR100 purchase on
                    <strong>Sephora</strong>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default DesktopVerticalCardsCarousel;
