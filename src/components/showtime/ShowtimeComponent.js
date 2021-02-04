import React, { Component } from "react";
import { Card, Col, Row, Image, Button } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import http from "../../helpers/http";
import "./styles.css";

class ShowtimeComponent extends Component {
	state = {
		showtimes: {},
	};
	async componentDidMount() {
		const response = await http().get("showtimes");
	}
	bookNow = (id) => {
		const { history, movieId } = this.props;
		history.push(`/order-page/${id}`, { movieId });
	};
	render() {
		const { data } = this.props;
		return (
			<Card className="card-movie border-0">
				<Card.Body className="pb-0">
					<Row>
						<Col xs={4}>
							<Image src={data.img} width={100} alt="" />
						</Col>
						<Col xs={8}>
							<p className="text-link-lg text-left m-0">{data.title}</p>
							<p className="text-300-12 text-left m-0">{data.address}</p>
						</Col>
					</Row>
				</Card.Body>
				<hr />
				<Card.Body className="pt-0">
					<Row xs={4}>
						{data.listTime.map((item) => (
							<Col key={Number(item.id)} className="time">
								<small>{item.time}</small>
							</Col>
						))}
					</Row>
				</Card.Body>
				<Card.Body className="pt-0 pb-2">
					<h6 className="float-left text-sm">Price</h6>
					<p className="float-right text-link-sm">${data.price}/seat</p>
				</Card.Body>
				<Card.Body className="pt-0 d-flex justify-content-between">
					<Button
						// onClick={() => this.bookNow(data.id)}
						variant="primary"
						className="btn-nav shadow"
					>
						Book now
					</Button>
					<Button variant="light" className="btn-nav text-primary">
						Add to cart
					</Button>
				</Card.Body>
			</Card>
		);
	}
}

export default withRouter(ShowtimeComponent);
