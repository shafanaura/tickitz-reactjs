import React, { Component } from "react";
import { Card, Image, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import listComingMovie from "../../utils/listComingMovie";
import listMonth from "../../utils/listMonth";
import "./styles.css";

export default class ComingMovie extends Component {
	state = {
		listComingMovie,
		listMonth,
	};
	render() {
		const { listComingMovie, listMonth } = this.state;
		return (
			<div>
				<Row>
					<Col>
						<p className="text-display-xs-bold float-left">Upcoming Movies</p>
					</Col>
					<Col>
						<Link to="#">
							<p className="text-primary float-right">view all</p>
						</Link>
					</Col>
				</Row>

				<div class="scrollmenu">
					{listMonth.map((item) => {
						return (
							<Button
								variant="outline-primary"
								className="scroll btn-month mr-1"
							>
								{item.month}
							</Button>
						);
					})}
				</div>
				<div className="scrollmenu text-center">
					{listComingMovie.map((item, index) => {
						return (
							<Card className="scroll mr-4">
								<Card.Body>
									<Image src={item.img} className="img-fluid img-resize" />
									<p class="pt-3 pb-2 text-display-xs-bold-18 card-title m-0">
										{item.title}
									</p>
									<p class="text-xs-12 text-color-placeholder card-text pb-3 m-0">
										{item.genre}
									</p>
									<Link to="/">
										<Button variant="outline-primary" className="btn-nav" block>
											Detail
										</Button>
									</Link>
								</Card.Body>
							</Card>
						);
					})}
				</div>
			</div>
		);
	}
}
