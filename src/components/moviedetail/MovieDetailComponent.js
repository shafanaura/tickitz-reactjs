import React, { Component } from "react";
import { Card, Col, Form, Image, Row } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import listMovie from "../../utils/listMovie";
import listShowTime from "../../utils/listShowTime";
import calendar from "../../assets/images/calendar.svg";
import map from "../../assets/images/map.svg";
import "./styles.css";
import ShowtimeComponent from "../showtime/ShowtimeComponent";

class MovieDetailComponent extends Component {
	state = {
		listShowTime,
		movie: {},
	};
	componentDidMount() {
		const { id } = this.props.match.params;
		const data = listMovie.filter((item) => item.id === Number(id))[0];
		this.setState({ movie: data });
	}
	render() {
		const { listShowTime, movie } = this.state;
		const { id } = this.props.match.params;
		return (
			<div>
				<Row>
					<Col md={4} xs={12}>
						<Card className="text-center mx-auto card-img">
							<Card.Body>
								<Image src={movie.img} className="img-fluid" />
							</Card.Body>
						</Card>
					</Col>
					<Col xs={12} md={8}>
						<p className="text-display-sm-bold m-0">{movie.title}</p>
						<p className="text-md">{movie.genre}</p>
						<Row xs={4} className="pt-2">
							<Col xs={6} lg={4}>
								<div className="flex-column justify-content-center d-flex">
									<p className="text-xs text-muted m-0">Release date</p>
									<p className="text-sm pt-1">{movie.release}</p>
								</div>
							</Col>
							<Col xs={6} lg={8}>
								<div className="flex-column justify-content-center d-flex">
									<p className="text-xs text-muted m-0">Directed by</p>
									<p className="text-sm pt-1">{movie.directed}</p>
								</div>
							</Col>
						</Row>
						<Row xs={4} className="pt-2">
							<Col xs={6} lg={4}>
								<div className="flex-column justify-content-center d-flex">
									<p className="text-xs text-muted m-0">Duration</p>
									<p className="text-sm pt-1">{movie.duration}</p>
								</div>
							</Col>
							<Col xs={6} lg={8}>
								<div className="flex-column justify-content-center d-flex">
									<p className="text-xs text-muted m-0">Casts</p>
									<p className="text-sm pt-1">{movie.cast}</p>
								</div>
							</Col>
						</Row>
						<hr />
						<p className="text-link-lg-20">Synopsis</p>
						<p className="text-sm">{movie.synopsis}</p>
					</Col>
				</Row>

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

					<Row xs={1} md={2} lg={3} className="g-3">
						{listShowTime.map((item) => (
							<Col className="pt-4 col" key={String(item.id)}>
								<ShowtimeComponent movieId={id} data={item} />
							</Col>
						))}
					</Row>
				</div>
			</div>
		);
	}
}
export default withRouter(MovieDetailComponent);
