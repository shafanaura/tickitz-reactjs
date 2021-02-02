import React, { Component } from "react";
import { Card, Col, Image, Row } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import http from "../../helpers/http";
import listMovie from "../../utils/listMovie";
import "./styles.css";

class ShowingComponent extends Component {
	state = {
		movies: [],
	};
	async componentDidMount() {
		const response = await http().get("movies");
		this.setState({
			movies: response.data.results,
		});
	}
	render() {
		const { movies } = this.state;
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
					{movies.map((item, index) => {
						return (
							<Link to={`/movie-detail/${item.id}`} className="link">
								<Card className="scroll card mr-4">
									<Card.Body className="card-body">
										<Image
											src={item.picture}
											className="img-fluid img-resize"
										/>
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
