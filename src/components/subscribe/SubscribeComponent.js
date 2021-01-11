import React from "react";
import { Card, Col, Form, Button } from "react-bootstrap";
import "./styles.css";

function SubscribeComponent() {
	return (
		<Card className="card-mail align-items-center text-center border-0 shadow ">
			<Card.Body>
				<p className="text-display-xs text-color-body m-0">
					Be the vanguard of the
				</p>
				<p className="text-primary text-link-lg-48 ">Moviegoers</p>
				<Form>
					<Form.Row>
						<Col xs={8}>
							<Form.Control
								type="email"
								placeholder="Type your email"
								className="subMail"
							/>
						</Col>
						<Col>
							<Button className="subMail" variant="primary" type="submit" block>
								Join now
							</Button>
						</Col>
					</Form.Row>
				</Form>
				<p class="text-muted pt-3">
					By joining you as a Tickitz member, <br />
					we will always send you the latest updates via email .
				</p>
			</Card.Body>
		</Card>
	);
}

export default SubscribeComponent;
