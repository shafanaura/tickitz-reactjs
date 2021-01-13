import React, { Component } from "react";
import { Card, Col, Form, InputGroup, Row } from "react-bootstrap";
import PrivacyAccount from "./PrivacyAccount";

export default class DetailInfo extends Component {
	render() {
		return (
			<div className="pt-4">
				<Card>
					<Card.Body>
						<p>Details Information</p>
						<hr />
						<Form.Group>
							<Row>
								<Col>
									<Form.Label>First Name</Form.Label>
									<Form.Control type="text" placeholder="Jonas" />
								</Col>
								<Col>
									<Form.Label>Last Name</Form.Label>
									<Form.Control type="text" placeholder="El Rodriguez" />
								</Col>
							</Row>
						</Form.Group>
						<Form.Group>
							<Row>
								<Col>
									<Form.Label>E-mail</Form.Label>
									<Form.Control
										type="email"
										placeholder="jonasrodrigu123@gmail.com"
									/>
								</Col>
								<Col>
									<Form.Label>Phone Number</Form.Label>
									<InputGroup className="mb-3">
										<InputGroup.Prepend className="contact">
											<InputGroup.Text>+62</InputGroup.Text>
										</InputGroup.Prepend>
										<Form.Control type="number" placeholder="81445687121" />
									</InputGroup>
								</Col>
							</Row>
						</Form.Group>
					</Card.Body>
				</Card>
				<PrivacyAccount />
			</div>
		);
	}
}
