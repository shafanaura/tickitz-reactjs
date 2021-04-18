import React, { Component } from "react";
import { Container } from "react-bootstrap";
import MovieAdmin from "../../components/admin/MovieAdmin";
import SalesChart from "../../components/admin/SalesChart";
import FooterComponent from "../../components/footer/FooterComponent";
import NavbarComponent from "../../components/navbar/NavbarComponent";
import "./styles.css";

export default class AdminPage extends Component {
  render() {
    return (
      <div>
        <NavbarComponent />
        <div className="bg-gray">
          <Container>
            <MovieAdmin />
            <SalesChart />
          </Container>
        </div>
        <FooterComponent />
      </div>
    );
  }
}
