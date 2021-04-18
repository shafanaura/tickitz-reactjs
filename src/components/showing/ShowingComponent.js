import React, { Component } from "react";
import { Card, Col, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getAllMovie } from "../../redux/actions/movie";
import "./styles.css";

class ShowingComponent extends Component {
  async componentDidMount() {
    this.props.getAllMovie();
  }
  render() {
    const { movie } = this.props;
    return (
      <div>
        <Row>
          <Col>
            <p className="text-display-xs-bold bottom-line float-left">
              Now Showing
            </p>
          </Col>
          <Col>
            <Link to="#">
              <p className="text-primary float-right">view all</p>
            </Link>
          </Col>
        </Row>
        <div className="scrollmenu text-center">
          {movie.movies.map((item, index) => {
            return (
              <Link
                to={`/movie-detail/${item.id}`}
                className="link"
                key={item.id}
              >
                <Card className="scroll card mr-4">
                  <Card.Body className="card-body">
                    <Image
                      src={item.picture}
                      className="img-fluid img-resize"
                    />
                  </Card.Body>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  movie: state.movie,
});

const mapDispatchToProps = {
  getAllMovie,
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowingComponent);
