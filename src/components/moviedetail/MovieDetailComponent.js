import React, { Component } from "react";
import { Card, Col, Image, Row } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import listMovie from "../../utils/listMovie";
import "./styles.css";

class MovieDetailComponent extends Component {
	state = {
		cinema: listMovie.filter(
			(item) => item.id === Number(this.props.match.params.id),
		),
	};
	render() {
		return (
			<div>
				<Row>
					<Col md={4} xs={12}>
						<Card className="text-center mx-auto card-img">
							<Card.Body>
								<Image src={this.state.cinema[0].img} className="img-fluid" />
							</Card.Body>
						</Card>
					</Col>
					<Col xs={12} md={8}>
						<p className="text-display-sm-bold m-0">
							{this.state.cinema[0].title}
						</p>
						<p className="text-md">{this.state.cinema[0].genre}</p>
						<Row xs={4} className="pt-2">
							<Col xs={6} lg={4}>
								<div className="flex-column justify-content-center d-flex">
									<p className="text-xs text-muted m-0">Release date</p>
									<p className="text-sm pt-1">{this.state.cinema[0].release}</p>
								</div>
							</Col>
							<Col xs={6} lg={8}>
								<div className="flex-column justify-content-center d-flex">
									<p className="text-xs text-muted m-0">Directed by</p>
									<p className="text-sm pt-1">
										{this.state.cinema[0].directed}
									</p>
								</div>
							</Col>
						</Row>
						<Row xs={4} className="pt-2">
							<Col xs={6} lg={4}>
								<div className="flex-column justify-content-center d-flex">
									<p className="text-xs text-muted m-0">Duration</p>
									<p className="text-sm pt-1">
										{this.state.cinema[0].duration}
									</p>
								</div>
							</Col>
							<Col xs={6} lg={8}>
								<div className="flex-column justify-content-center d-flex">
									<p className="text-xs text-muted m-0">Casts</p>
									<p className="text-sm pt-1">{this.state.cinema[0].cast}</p>
								</div>
							</Col>
						</Row>
						<hr />
						<p className="text-link-lg-20">Synopsis</p>
						<p className="text-sm">{this.state.cinema[0].synopsis}</p>
					</Col>
				</Row>
			</div>
		);
	}
}
export default withRouter(MovieDetailComponent);
