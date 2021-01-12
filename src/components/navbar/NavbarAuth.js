import React from "react";
import { Navbar, Nav, Form, Image, Container } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import tickitz_purple from "../../assets/images/tickitz-purple.svg";
import "./styles.css";

function NavbarAuth(props) {
	return (
		<Navbar expand="lg">
			<Container>
				<Navbar.Brand href="#home">
					<Link to="/">
						<Image src={tickitz_purple} />
					</Link>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="nav-link mr-auto">
						<Nav.Link href="#">Movies</Nav.Link>
						<Nav.Link href="#">Cinemas</Nav.Link>
						<Nav.Link href="#">Buy Ticket</Nav.Link>
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
							<Search size={20} />
						</Nav.Item>
						<Nav.Item>
							<Link to="/sign-up" className="btn btn-primary btn-nav">
								Sign up
							</Link>
						</Nav.Item>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default NavbarAuth;
