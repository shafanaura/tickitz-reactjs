import React, { Component } from "react";
import { Card, Col, Form, Image, Row } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import listMovie from "../../utils/listMovie";
import listShowTime from "../../utils/listShowTime";
import calendar from "../../assets/images/calendar.svg";
import map from "../../assets/images/map.svg";
import "./styles.css";
import ShowtimeComponent from "../showtime/ShowtimeComponent";
import http from "../../helpers/http";
import Moment from "react-moment";
import moment from "moment";

class MovieDetailComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectValue: "",
			listShowTime,
			movie: {},
			location: "",
			date: "",
			showResults: [],
			showLocDate: [],
		};
	}

	async componentDidMount() {
		const { id } = this.props.match.params;
		const response = await http().get(`movies/${id}`);
		this.setState({
			movie: response.data.results,
		});
	}
	// componentDidMount() {
	// 	const { id } = this.props.match.params;
	// 	const data = listMovie.filter((item) => item.id === Number(id))[0];
	// 	this.setState({ movie: data });
	// }
	searchCinema = (e) => {
		this.setState({ [e.target.name]: e.target.value }, async () => {
			if (this.state.location !== "" && this.state.date !== "") {
				const data = new URLSearchParams();
				data.append("date", this.state.date);
				data.append("location", this.state.location);
				data.append("movieId", this.props.match.params.id);
				const response = await http().get(`showtimes?${data.toString()}`);
				this.setState({
					showResults: response.data.results,
				});
			}
		});
	};
	render() {
		const { movie, showResults, showLocDate } = this.state;
		const { id } = this.props.match.params;
		return (
			<div>
				<Row>
					<Col md={4} xs={12}>
						<Card className="text-center mx-auto card-img">
							<Card.Body>
								<Image src={movie.picture} className="img-fluid" />
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
									<p className="text-sm pt-1">
										<Moment format="D MMMM YYYY">{movie.releaseDate}</Moment>
									</p>
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
									<p className="text-sm pt-1">
										{moment.duration(movie.duration).format("h[h] m[min]")}
									</p>
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
									name="date"
									defaultValue=""
									as="select"
									className="border-0 pl-5 pick"
									onChange={this.searchCinema}
								>
									<option value="">Select date</option>
									<option value="2021-02-01">2021-02-01</option>
									<option value="2021-02-02">2021-02-02</option>
								</Form.Control>
							</Form.Group>
						</Col>

						<Col lg={3} md={5} xs={12} className="d-grid pt-4">
							<Form.Group className="d-flex align-items-center">
								<Image src={map} className="position-absolute pl-3" />
								<Form.Control
									name="location"
									defaultValue=""
									as="select"
									className="border-0 pl-5 pick"
									onChange={this.searchCinema}
								>
									<option value="">Select city</option>
									<option value="6">Purwokerto</option>
									<option value="7">Surabaya</option>
									<option value="8">Jakarta</option>
								</Form.Control>
							</Form.Group>
						</Col>
					</Row>

					<Row xs={1} md={2} lg={3} className="g-3">
						{showResults.map((item) => (
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
