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
							<svg
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M10 18C11.775 17.9996 13.4988 17.4054 14.897 16.312L19.293 20.708L20.707 19.294L16.311 14.898C17.405 13.4997 17.9996 11.7754 18 10C18 5.589 14.411 2 10 2C5.589 2 2 5.589 2 10C2 14.411 5.589 18 10 18ZM10 4C13.309 4 16 6.691 16 10C16 13.309 13.309 16 10 16C6.691 16 4 13.309 4 10C4 6.691 6.691 4 10 4Z"
									fill="#414141"
								/>
							</svg>
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
