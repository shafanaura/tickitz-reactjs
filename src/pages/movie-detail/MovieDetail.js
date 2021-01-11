import React, { Component } from "react";
import { Container, Image, Row, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import MovieDetailComponent from "../../components/moviedetail/MovieDetailComponent";
import NavbarComponent from "../../components/navbar/NavbarComponent";
import FooterComponent from "../../components/footer/FooterComponent";
import ShowtimeComponent from "../../components/showtime/ShowtimeComponent";
import calendar from "../../assets/images/calendar.svg";
import map from "../../assets/images/map.svg";
import "./styles.css";

export default class MovieDetail extends Component {
	render() {
		return (
			<Container>
				<NavbarComponent>
					<Image
						src="https://cachedimages.podchaser.com/256x256/aHR0cHM6Ly9jcmVhdG9yLWltYWdlcy5wb2RjaGFzZXIuY29tL2EyYjc4MGQxNGU0ODhhMTdjZjhiZTQyYWU3MjZmNWUzLmpwZWc%3D/aHR0cHM6Ly93d3cucG9kY2hhc2VyLmNvbS9pbWFnZXMvbWlzc2luZy1pbWFnZS5wbmc%3D"
						roundedCircle
					/>
				</NavbarComponent>
				<MovieDetailComponent />
				<div className="text-center py-5">
					<p className="text-display-xs-bold">Showtimes and Tickets</p>
					<Container>
						<Row className="justify-content-center">
							<Col xs={5} md={4} lg={3} className="d-grid pt-4">
								<Form.Group className="d-flex align-items-center">
									<Image src={calendar} className="position-absolute pl-3" />
									<Form.Control
										type="date"
										id="datepicker"
										className="border-0 pl-5 pick"
									/>
								</Form.Group>
							</Col>

							<Col xs={5} md={4} lg={3} className="d-grid pt-4">
								<Form.Group className="d-flex align-items-center">
									<Image src={map} className="position-absolute pl-3" />
									<Form.Control as="select" className="border-0 pl-5 pick">
										<option selected>Purwokerto</option>
										<option value="1">Jakarta</option>
										<option value="2">Bandung</option>
										<option value="3">Surabaya</option>
									</Form.Control>
								</Form.Group>
							</Col>
						</Row>
					</Container>
				</div>
				<ShowtimeComponent />
				<div className="d-flex py-2">
					<hr className="my-auto flex-grow-1" />
					<div className="px-3 text-primary">
						<Link>view more</Link>
					</div>
					<hr className="my-auto flex-grow-1" />
				</div>
				<FooterComponent />
			</Container>
		);
	}
}
