import React, { Component } from "react";
import { Card, Col, Image } from "react-bootstrap";

export default class OrderInfo extends Component {
	render() {
		return (
			<Col xs={12} lg={4}>
				<p className="text-display-xs-bold">Order Info</p>
				<Card className="border-0 shadow">
					<Card.Body className="pb-0">
						<div className="text-center">
							<Image src="../../assets/cineone.png" height={23} alt="" />
							<p className="text-link-lg pt-2">CineOne21 Cinema</p>
						</div>
						<div className="d-flex justify-content-between">
							<p className="text-xs text-color-label">Movie selected</p>
							<p className="text-right text-link-xs text-color-title">
								Spider-Man: Homecoming
							</p>
						</div>
						<div className="d-flex justify-content-between">
							<p className="text-xs text-color-label">Tuesday, 07 July 2020</p>
							<p className="text-right text-link-xs text-color-title">
								02:00pm
							</p>
						</div>
						<div className="d-flex justify-content-between">
							<p className="text-xs text-color-label">One ticket price</p>
							<p className="text-right text-link-xs text-color-title">$10</p>
						</div>
						<div className="d-flex justify-content-between">
							<p className="text-xs text-color-label">Seat choosed</p>
							<p className="text-right text-link-xs text-color-title">
								C4, C5, C6
							</p>
						</div>
					</Card.Body>
					<hr />
					<Card.Body className="pt-0">
						<p className="float-start text-link-md">Total Payment</p>
						<p className="float-end text-display-xs-bold text-primary text-right">
							$30
						</p>
					</Card.Body>
				</Card>
			</Col>
		);
	}
}
