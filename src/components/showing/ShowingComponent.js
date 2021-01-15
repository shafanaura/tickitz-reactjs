import React, { Component } from "react";
import { Card, Col, Image, Row } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import listMovie from "../../utils/listMovie";
import "./styles.css";

class ShowingComponent extends Component {
	state = {
		listMovie,
	};
	render() {
		const { listMovie } = this.state;
		return (
			<div>
				<Row>
					<Col>
						<p className="text-display-xs-bold bottom-line float-left">
							Now Showing
						</p>
					</Col>
					<Col>
						<Link to="#">
							<p className="text-primary float-right">view all</p>
						</Link>
					</Col>
				</Row>
				<div className="scrollmenu text-center">
					{listMovie.map((item, index) => {
						return (
							<Link to={`/movie-detail/${item.id}`} className="link">
								<Card className="scroll card mr-4">
									<Card.Body className="card-body">
										<Image src={item.img} className="img-fluid img-resize" />
									</Card.Body>
								</Card>
							</Link>
						);
					})}
				</div>
			</div>
		);
	}
}
export default withRouter(ShowingComponent);
