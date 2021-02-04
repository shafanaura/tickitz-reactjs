import React, { Component } from "react";
import {
	Card,
	Col,
	Row,
	Image,
	Button,
	Form,
	ToggleButton,
} from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import http from "../../helpers/http";
import "./styles.css";

class ShowtimeComponent extends Component {
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
						<Col
							xs={4}
							className="d-flex align-items-center justify-content-center"
						>
							<Image src={data.picture} width={100} alt="" />
						</Col>
						<Col xs={8}>
							<p className="text-link-lg text-left m-0">{data.cinema}</p>
							<p className="text-300-12 text-left m-0">{data.address}</p>
						</Col>
					</Row>
				</Card.Body>
				<hr />
				<Card.Body className="pt-0">
					<Row xs={4}>
						{data.value.map((time) => {
							return (
								<Col className="time">
									<input type="radio" name="radio" id="radio1" />
									<label for="radio1">{time}</label>
									{/* <Button
										type="radio"
										size="sm"
										variant="light"
										className="btn-time"
									>
										{time}
									</Button> */}
								</Col>
							);
						})}
					</Row>
				</Card.Body>
				<Card.Body className="pt-0 pb-2">
					<h6 className="float-left text-sm">Price</h6>
					<p className="float-right text-link-sm">${data.price}/seat</p>
				</Card.Body>
				<Card.Body className="pt-0 d-flex justify-content-between">
					<Button
						onClick={() => this.bookNow(data.id)}
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
