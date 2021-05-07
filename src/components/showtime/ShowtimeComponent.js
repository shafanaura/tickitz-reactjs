import React, { Component } from "react";
import { Card, Col, Row, Image, Button } from "react-bootstrap";
import { showTime } from "../../redux/actions/showtime";
import { connect } from "react-redux";
import "./styles.css";
import { withRouter } from "react-router-dom";

class ShowtimeComponent extends Component {
  state = {
    getOrder: [],
    selectedTime: "",
  };
  async componentDidMount() {
    this.props.showTime();
  }
  book = (idTime) => {
    console.log(idTime);
  };
  render() {
    return (
      <Row xs={1} md={2} lg={3} className="g-3">
        {this.props.showtime.showtimes.map((item) => (
          <Col className="pt-4 col">
            <Card className="card-movie border-0">
              <Card.Body className="pb-0">
                <Row>
                  <Col
                    xs={4}
                    className="d-flex align-items-center justify-content-center"
                  >
                    <Image src={item.picture} width={100} alt="" />
                  </Col>
                  <Col xs={8}>
                    <p className="text-link-lg text-left m-0">{item.cinema}</p>
                    <p className="text-300-12 text-left m-0">{item.address}</p>
                  </Col>
                </Row>
              </Card.Body>
              <hr />
              <Card.Body className="pt-0">
                <Row xs={4}>
                  {item.times.map((times) => {
                    return (
                      <Col className="time">
                        <Button
                          type="radio"
                          size="sm"
                          variant="light"
                          className="btn-time"
                          onClick={() => this.setState({ selectedTime: times })}
                        >
                          {times}
                        </Button>
                      </Col>
                    );
                  })}
                </Row>
              </Card.Body>
              <Card.Body className="pt-0 pb-2">
                <h6 className="float-left text-sm">Price</h6>
                <p className="float-right text-link-sm">${item.price}/seat</p>
              </Card.Body>
              <Card.Body className="pt-0 d-flex justify-content-between">
                <Button
                  // onClick={() => this.bookNow(item.id)}
                  onClick={() => this.book(this.state.selectedTime)}
                  variant="primary"
                  className="btn-nav shadow"
                >
                  Book now
                </Button>
                <Button variant="light" className="btn-nav text-primary">
                  Add to cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    );
  }
}

const mapStateToProps = (state) => ({
  showtime: state.showtime,
});
const mapDispatchToProps = { showTime };

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ShowtimeComponent)
);
