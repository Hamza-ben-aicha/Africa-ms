import React from "react";
import { Accordion, Col, Container, Row, Card } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import photo from "../../assets/iso-9001.jpg";
import SPhoto from "../../assets/consulting-jobs.png";
import Tphoto from "../../assets/Consulting-Engagements.jpg";
import { WhatIsNorme } from "../../constant/static";
import "./style.css";
const PageOne = () => {
  return (
    <>
      <Row>
        <Carousel>
          <Carousel.Item>
            <img
              className="slide-image"
              src={photo}
              alt="First slide"
              height={500}
            />
           
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="slide-image"
              src={SPhoto}
              alt="Second slide"
              height={500}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="slide-image"
              src={Tphoto}
              alt="Third slide"
              height={500}
            />

        
          </Carousel.Item>
        </Carousel>
      </Row>
      <Container>
        <Row>
          <Col>
            <div class="cardBody">
              <div class="card-body cardBody">
                <h3> Norme </h3>Valeur limite. Elles sont édictées dans le cadre
                d'une réglementation. Les normes diffèrent d'un pays à un autre,
                mais sont préparées avec la coopération et le consensus
                d’approbation générale de la part de tous les intéressés
                concernés. Elles sont de trois ordres : concentration ou qualité
                / émission ou rejet / produit.
              </div>
            </div>
          </Col>
        </Row>
      <Row>
        <Col>
          <Card
            bg="Light"
            key="Light"
            text="Light"
            style={{ width: "18rem" }}
            className="mb-2"
          >
            <Card.Header>
              <h4>ISO 9001</h4>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                Cette norme constate l'aptitude d'une société ou d’un organisme
                à répondre aux exigences du client en matière de qualité d'un
                produit ou d'un service.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card
            bg="Light"
            key="Light"
            text="Light"
            style={{ width: "18rem" }}
            className="mb-2"
          >
            <Card.Header>
              <h4>ISO 9001</h4>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                Cette norme constate l'aptitude d'une société ou d’un organisme
                à répondre aux exigences du client en matière de qualité d'un
                produit ou d'un service.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card
            bg="Light"
            key="Light"
            text="Light"
            style={{ width: "18rem" }}
            className="mb-2"
          >
            <Card.Header>
              <h4>ISO 9001</h4>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                Cette norme constate l'aptitude d'une société ou d’un organisme
                à répondre aux exigences du client en matière de qualité d'un
                produit ou d'un service.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        
      </Row>
      <Row>
       <Col>
          <Card
            bg="Light"
            key="Light"
            text="Light"
            style={{ width: "18rem" }}
            className="mb-2"
          >
            <Card.Header>
              <h4>ISO 9001</h4>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                Cette norme constate l'aptitude d'une société ou d’un organisme
                à répondre aux exigences du client en matière de qualité d'un
                produit ou d'un service.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
       <Col>
          <Card
            bg="Light"
            key="Light"
            text="Light"
            style={{ width: "18rem" }}
            className="mb-2"
          >
            <Card.Header>
              <h4>ISO 9001</h4>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                Cette norme constate l'aptitude d'une société ou d’un organisme
                à répondre aux exigences du client en matière de qualité d'un
                produit ou d'un service.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
       <Col>
          <Card
            bg="Light"
            key="Light"
            text="Light"
            style={{ width: "18rem" }}
            className="mb-2"
          >
            <Card.Header>
              <h4>ISO 9001</h4>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                Cette norme constate l'aptitude d'une société ou d’un organisme
                à répondre aux exigences du client en matière de qualité d'un
                produit ou d'un service.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

      </Row>
</Container>
    </>
  );
};

export default PageOne;
