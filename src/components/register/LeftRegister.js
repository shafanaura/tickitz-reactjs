import React from "react";
import { Col, Container } from "react-bootstrap";
import "./styles.css";

const LeftRegister = (props) => {
	return (
		<Col md={7} className="d-none d-md-block infinity-image-container pt-5">
			<Container>{props.children}</Container>
		</Col>
	);
};

export default LeftRegister;
