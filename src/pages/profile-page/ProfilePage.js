import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import NavbarComponent from "../../components/navbar/NavbarComponent";
import InfoProfile from "../../components/profile/InfoProfile";
import FooterComponent from "../../components/footer/FooterComponent";
import AccountProfile from "../../components/profile/AccountProfile";

export default class ProfilePage extends Component {
  render() {
    return (
      <>
        <NavbarComponent />
        <div className="bg-gray">
          <Container>
            <Row>
              <InfoProfile />
              <AccountProfile />
            </Row>
          </Container>
        </div>
        <FooterComponent />
      </>
    );
  }
}
