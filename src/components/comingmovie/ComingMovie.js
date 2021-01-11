import React, { Component } from "react";
import { Card, Image, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styles.css";

export default class ComingMovie extends Component {
	render() {
		return (
			<Card className="scroll mr-4">
				<Card.Body>
					<Image src={this.props.data.img} className="img-fluid img-resize" />
					<p class="pt-3 pb-2 text-display-xs-bold-18 card-title m-0">
						{this.props.data.title}
					</p>
					<p class="text-xs-12 text-color-placeholder card-text pb-3 m-0">
						{this.props.data.genre}
					</p>
					<Link to="/">
						<Button variant="outline-primary" className="btn-nav" block>
							Detail
						</Button>
					</Link>
				</Card.Body>
			</Card>
		);
	}
}
