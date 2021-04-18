import React, { Component } from "react";
import {
  Navbar,
  Nav,
  Form,
  Image,
  Container,
  NavDropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import tickitz_purple from "../../assets/images/tickitz-purple.svg";
import { connect } from "react-redux";
import "./styles.css";
import { userDetail } from "../../redux/actions/user";

class NavbarComponent extends Component {
  async componentDidMount() {
    this.props.userDetail(this.props.auth.token);
  }
  render() {
    const { data } = this.props.user;
    return (
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#home" className="m-0">
            <Link to="/">
              <Image src={tickitz_purple} />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="nav-link mr-auto">
              <Nav.Link href="/">Movies</Nav.Link>
              <Nav.Link href="/">Cinemas</Nav.Link>
              <Nav.Link href="/">Buy Ticket</Nav.Link>
            </Nav>
            <Nav className="nav-link justify-content-end" activeKey="/home">
              <Nav.Item>
                <Form.Control
                  as="select"
                  defaultValue="Location"
                  className="border-0"
                >
                  <option>Location</option>
                  <option>Jakarta</option>
                  <option>Bandung</option>
                  <option>Surabaya</option>
                </Form.Control>
              </Nav.Item>
              <Nav.Item>
                <Form action="" className="search-form">
                  <input type="search" className="search-input" />
                  <i class="fa fa-search"></i>
                </Form>
              </Nav.Item>

              {this.props.auth.token !== null ? (
                <NavDropdown
                  title={
                    <Image
                      src={
                        data.picture === null
                          ? "https://icon-library.com/images/default-user-icon/default-user-icon-4.jpg"
                          : data.picture
                      }
                      className="img-avatar"
                    />
                  }
                  id="basic-nav-dropdown"
                  className="m-0"
                >
                  <NavDropdown.Item href="#action/3.1">
                    Signed in as <br />
                    <strong>
                      {data.fullName === null ? data.email : data.fullName}
                    </strong>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/">Home</NavDropdown.Item>
                  <NavDropdown.Item href="/profile-page">
                    Your Profile
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Sign out
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <Nav.Item>
                  <Link to="/sign-up" className="btn btn-primary btn-nav">
                    Sign up
                  </Link>
                </Nav.Item>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  user: state.user,
});

const mapDispatchToProps = { userDetail };

export default connect(mapStateToProps, mapDispatchToProps)(NavbarComponent);
