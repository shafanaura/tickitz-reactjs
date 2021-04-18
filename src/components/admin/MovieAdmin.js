import React from "react";
import { Card, Col, Form, Image, Row } from "react-bootstrap";
import PremiereLocation from "./PremiereLocation";

function MovieAdmin() {
  return (
    <Row>
      <Col xs={12} lg={8}>
        <p className="text-display-xs-bold">Movie Description</p>
        <Card className="border-0">
          <Card.Body>
            <Row>
              <Col md={4}>
                <Card className="scroll card">
                  <Card.Body className="card-body">
                    <Image
                      src="https://picfiles.alphacoders.com/148/148651.jpg"
                      className="img-fluid img-resize"
                    />
                  </Card.Body>
                </Card>
              </Col>
              <Col md={8}>
                <Form.Group>
                  <Form.Label>Movie Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Spider-Man: Homecoming"
                  />
                  <Form.Label>Category</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Action, Adventure, Sci-Fi"
                  />
                  <Row>
                    <Col>
                      <Form.Label>Release date</Form.Label>
                      <Form.Control type="date" />
                    </Col>
                    <Col>
                      <Form.Label>Duration (hour / minute)</Form.Label>
                      <Row>
                        <Col>
                          <Form.Control type="number" placeholder="2" />
                        </Col>
                        <Col>
                          <Form.Control type="number" placeholder="13" />
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Director</Form.Label>
                  <Form.Control type="text" placeholder="Jon Watts" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>Casts</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Tom Holland, Michael Keaton, Robert Dow.."
                  />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group>
              <Form.Label>Synopsis</Form.Label>
              <Form.Control
                type="text"
                as="textarea"
                placeholder="Thrilled by his experience with the Avengers, Peter returns home, where he
lives with his Aunt May, | "
              />
            </Form.Group>
          </Card.Body>
        </Card>
      </Col>
      {/* Other col */}
      <PremiereLocation />
    </Row>
  );
}

export default MovieAdmin;
