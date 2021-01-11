import React, { Component } from "react";
import { Card, Image } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import "./styles.css";

class ShowingComponent extends Component {
	render() {
		return (
			<Link to={`/movie-detail/${this.props.data.id}`} className="link">
				<Card className="scroll card mr-4">
					<Card.Body className="card-body">
						<Image src={this.props.data.img} className="img-fluid img-resize" />
					</Card.Body>
				</Card>
			</Link>
		);
	}
}
export default withRouter(ShowingComponent);
