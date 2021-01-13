import React from "react";
import { Card, Col } from "react-bootstrap";

function PanelRight(props) {
	return (
		<Col xs={12} lg={4}>
			<p className="text-display-xs-bold">{props.title}</p>
			<Card className="border-0 shadow">
				<Card.Body className="pb-0">{props.body}</Card.Body>
			</Card>
		</Col>
	);
}

export default PanelRight;
