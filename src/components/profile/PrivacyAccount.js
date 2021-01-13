import React, { Component } from "react";
import { Button, Card, Col, Form, InputGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import ButtonLeft from "../splitpanel/ButtonLeft";
import "./styles.css";

export default class PrivacyAccount extends Component {
	render() {
		return (
			<div className="pt-4">
				<Card>
					<Card.Body>
						<p>Account and Privacy</p>
						<hr />
						<Form.Group>
							<Row>
								<Col>
									<Form.Label>New Password</Form.Label>
									<Form.Control
										type="password"
										placeholder="Write your password"
									/>
								</Col>
								<Col>
									<Form.Label>Confirm Password</Form.Label>
									<Form.Control
										type="password"
										placeholder="Confirm your password"
									/>
								</Col>
							</Row>
						</Form.Group>
					</Card.Body>
				</Card>
				<ButtonLeft buttonText="Update Change" />
			</div>
		);
	}
}
