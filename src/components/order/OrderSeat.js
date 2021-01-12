import React, { Component } from "react";
import { Card, Col, InputGroup, Row, Table } from "react-bootstrap";
import Seat from "./Seat";
import "./styles.css";

export default class OrderSeat extends Component {
	render() {
		return (
			<Col xs={12} lg={8}>
				<p className="text-display-xs-bold">Choose Your Seat</p>
				<Card className="border-0 p-5">
					<Card.Body className="row text-center">
						<Col xs={11} className="">
							<p className="text-link-xs">Screen</p>
							<div className="line-screen"></div>
						</Col>
					</Card.Body>
					<Card.Body>
						<Seat />
					</Card.Body>
				</Card>
			</Col>
		);
	}
}
