import React, { Component } from "react";
import { Card, Col, Nav, Navbar, Row } from "react-bootstrap";
import "./styles.css";

export default class SalesChart extends Component {
	render() {
		return (
			<div>
				<p className="text-display-xs-bold pt-4">Sales Charts</p>
				<Card bg="light" variant="light">
					<Card.Body className="d-flex">
						<Navbar>
							<Nav.Link className="m-0 line-nav">Based on Movie</Nav.Link>
							<Nav.Link className="m-0 line-nav">Based on Location</Nav.Link>
						</Navbar>
					</Card.Body>
				</Card>

				<Row className="pt-4 pb-5">
					<Col md={4}>
						<Card>
							<Card.Body>
								<p>Avengers: End Game</p>
								<Navbar className="p-0">
									<Nav.Link className="m-0 col-4 text-center line-nav">
										Weekly
									</Nav.Link>
									<Nav.Link className="m-0 col-4 text-center line-nav">
										Monthly
									</Nav.Link>
									<Nav.Link className="m-0 col-4 text-center line-nav">
										Yearly
									</Nav.Link>
								</Navbar>
							</Card.Body>
						</Card>
					</Col>
					<Col md={4}>
						<Card>
							<Card.Body>
								<p>Avengers: End Game</p>
								<Navbar className="p-0">
									<Nav.Link className="m-0 col-4 text-center line-nav">
										Weekly
									</Nav.Link>
									<Nav.Link className="m-0 col-4 text-center line-nav">
										Monthly
									</Nav.Link>
									<Nav.Link className="m-0 col-4 text-center line-nav">
										Yearly
									</Nav.Link>
								</Navbar>
							</Card.Body>
						</Card>
					</Col>
					<Col md={4}>
						<Card>
							<Card.Body>
								<p>Avengers: End Game</p>
								<Navbar className="p-0">
									<Nav.Link className="m-0 col-4 text-center line-nav">
										Weekly
									</Nav.Link>
									<Nav.Link className="m-0 col-4 text-center line-nav">
										Monthly
									</Nav.Link>
									<Nav.Link className="m-0 col-4 text-center line-nav">
										Yearly
									</Nav.Link>
								</Navbar>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</div>
		);
	}
}
