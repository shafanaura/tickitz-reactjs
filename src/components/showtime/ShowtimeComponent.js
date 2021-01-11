import React from "react";
import { Card, Col, Row, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import listShowTime from "../../utils/listShowTime";
import "./styles.css";

function ShowtimeComponent() {
	return (
		<Row xs={1} md={2} lg={3} className="g-3">
			{listShowTime.map((item) => {
				return (
					<Col className="pt-4 col">
						<Card className="card-movie border-0">
							<Card.Body className="pb-0">
								<Row>
									<Col xs={4}>
										<Image src={item.img} width={100} alt="" />
									</Col>
									<Col xs={8}>
										<p className="text-link-lg m-0">{item.title}</p>
										<p className="text-300-12 m-0">{item.address}</p>
									</Col>
								</Row>
							</Card.Body>
							<hr />
							<Card.Body className="pt-0">
								<Row xs={4}>
									{item.listTime.map((item) => {
										return (
											<Col className="time">
												<small>{item.time}</small>
											</Col>
										);
									})}
								</Row>
							</Card.Body>
							<Card.Body className="pt-0 pb-2">
								<h6 className="float-left text-sm">Price</h6>
								<p className="float-right text-link-sm">${item.price}/seat</p>
							</Card.Body>
							<Card.Body className="pt-0 d-flex justify-content-between">
								<Link to="/order-page">
									<Button variant="primary" className="btn-nav shadow">
										Book now
									</Button>
								</Link>
								<Link to="">
									<Button variant="light" className="btn-nav text-primary">
										Add to cart
									</Button>
								</Link>
							</Card.Body>
						</Card>
					</Col>
				);
			})}
		</Row>
	);
}

export default ShowtimeComponent;
