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
import listShowTime from "../../utils/listShowTime";

export default class MovieDetail extends Component {
	state = {
		listShowTime: listShowTime,
	};
	render() {
		return (
			<>
				<NavbarComponent />
				<Container>
					<MovieDetailComponent />
					<div className="text-center py-5">
						<p className="text-display-xs-bold">Showtimes and Tickets</p>
						<Row className="justify-content-center">
							<Col lg={3} md={5} xs={12} className="d-grid pt-4">
								<Form.Group className="d-flex align-items-center">
									<Image src={calendar} className="position-absolute pl-3" />
									<Form.Control
										type="date"
										id="datepicker"
										className="border-0 pl-5 pick"
									/>
								</Form.Group>
							</Col>

							<Col lg={3} md={5} xs={12} className="d-grid pt-4">
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
					</div>

					<Row xs={1} md={2} lg={3} className="g-3">
						{this.state.listShowTime.map((item, index) => {
							return <ShowtimeComponent data={item} />;
						})}
					</Row>
					<div className="d-flex py-2">
						<hr className="my-auto flex-grow-1" />
						<div className="px-3 text-primary">
							<Link>view more</Link>
						</div>
						<hr className="my-auto flex-grow-1" />
					</div>
				</Container>
				<FooterComponent />
			</>
		);
	}
}
