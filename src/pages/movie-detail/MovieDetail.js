import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { login, autoLogin } from "../../redux/actions/auth";
import { connect } from "react-redux";
import MovieDetailComponent from "../../components/moviedetail/MovieDetailComponent";
import NavbarComponent from "../../components/navbar/NavbarComponent";
import FooterComponent from "../../components/footer/FooterComponent";
import "./styles.css";

class MovieDetail extends Component {
  render() {
    return (
      <>
        <NavbarComponent />
        <Container>
          <MovieDetailComponent />
          <div className="d-flex py-2">
            <hr className="my-auto flex-grow-1" />
            <div className="px-3 text-primary">
              <Link>view more</Link>
            </div>
            <hr className="my-auto flex-grow-1" />
          </div>
        </Container>
        <FooterComponent />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});
const mapDispatchToProps = { login, autoLogin };

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);
