import React, { Component } from "react";
import { Button, Col, Container, Image, Navbar, Row } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import NavbarComponent from "../../components/navbar/NavbarComponent";
import OrderInfo from "../../components/order/OrderInfo";
import OrderSeat from "../../components/order/OrderSeat";
import FooterComponent from "../../components/footer/FooterComponent";
import "./styles.css";
import listShowTime from "../../utils/listShowTime";
import listMovie from "../../utils/listMovie";

class OrderPage extends Component {
	state = {
		cinema: {},
		movie: {},
		selectedSeat: [],
	};
	componentDidMount() {
		const { movieId } = this.props.location.state;
		const { id: cinemaId } = this.props.match.params;
		this.setState({
			cinema: listShowTime.filter((item) => item.id === Number(cinemaId))[0],
			movie: listMovie.filter((item) => item.id === Number(movieId))[0],
		});
	}
	render() {
		const { cinema, movie } = this.state;
		return (
			<div>
				<NavbarComponent />
				<Navbar className="navbar-expand-lg navbar-dark bg-primary">
					<Container>
						<Container fluid>
							<Link className="text-link-lg text-white">{movie.title}</Link>
							<Link to="/" className="ml-auto">
								<Button
									variant="light"
									className="opacity-80 rounded-pill ms-auto py-2 px-3 text-primary text-display-xs-bold-14 "
								>
									Change movie
								</Button>
							</Link>
						</Container>
					</Container>
				</Navbar>
				<div className="bg-gray">
					<Container>
						<Row>
							<OrderSeat />
							<OrderInfo data={movie} />
						</Row>
					</Container>
				</div>
				<FooterComponent />
			</div>
		);
	}
}
export default withRouter(OrderPage);
