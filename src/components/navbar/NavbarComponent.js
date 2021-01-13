import React from "react";
import { Navbar, Nav, Form, Image, Container } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import tickitz_purple from "../../assets/images/tickitz-purple.svg";
import "./styles.css";

function NavbarComponent(props) {
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
							<Link to="/profile-page">
								<Image
									src="https://cachedimages.podchaser.com/256x256/aHR0cHM6Ly9jcmVhdG9yLWltYWdlcy5wb2RjaGFzZXIuY29tL2EyYjc4MGQxNGU0ODhhMTdjZjhiZTQyYWU3MjZmNWUzLmpwZWc%3D/aHR0cHM6Ly93d3cucG9kY2hhc2VyLmNvbS9pbWFnZXMvbWlzc2luZy1pbWFnZS5wbmc%3D"
									roundedCircle
								/>
							</Link>
						</Nav.Item>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default NavbarComponent;
