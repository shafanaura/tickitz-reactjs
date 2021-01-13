import React, { Component } from "react";
import { Card, Col, Container, Nav, Navbar } from "react-bootstrap";
import DetailInfo from "./DetailInfo";
import "./styles.css";

export default class AccountProfile extends Component {
	render() {
		return (
			<Col xs={8}>
				<Navbar bg="light" variant="light">
					<Navbar.Brand href="#home" className="account mr-5">
						Account Settings
					</Navbar.Brand>
					<Navbar.Brand href="#home" className="account">
						Order History
					</Navbar.Brand>
				</Navbar>

				<DetailInfo />
			</Col>
		);
	}
}
