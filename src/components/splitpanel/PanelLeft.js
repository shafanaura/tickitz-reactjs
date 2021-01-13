import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styles.css";

function PanelLeft(props) {
	return (
		<div className="bg-gray">
			<Container>
				<Row>
					<Col xs={12} lg={8}>
						<p className="text-display-xs-bold">{props.title}</p>
						<Card className="border-0">
							<Card.Body>{props.body}</Card.Body>
						</Card>
						{props.panel}
					</Col>
					{props.children}
				</Row>
			</Container>
		</div>
	);
}

export default PanelLeft;
