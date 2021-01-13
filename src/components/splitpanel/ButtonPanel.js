import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styles.css";

function ButtonPanel(props) {
	return (
		<div className="pt-4 checkout">
			<Link to={props.goButtonLeft}>
				<Button
					variant="outline-primary"
					className="float-left col-12 col-md-5"
				>
					{props.buttonLeft}
				</Button>
			</Link>
			<Link to={props.goButtonRight}>
				<Button
					variant="primary shadow"
					className="float-right col-12 col-md-5"
				>
					{props.buttonRight}
				</Button>
			</Link>
		</div>
	);
}

export default ButtonPanel;
