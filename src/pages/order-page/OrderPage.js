import React from "react";
import { Button, Col, Container, Image, Navbar, Row } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import NavbarComponent from "../../components/navbar/NavbarComponent";
import OrderInfo from "../../components/order/OrderInfo";
import OrderSeat from "../../components/order/OrderSeat";
import FooterComponent from "../../components/footer/FooterComponent";
import "./styles.css";
import { connect } from "react-redux";
import { createOrder } from "../../redux/actions/order";

function OrderPage({ order }) {
	const { dataMovie } = order.listOrder;
	console.log(order);
	return (
		<div>
			<NavbarComponent />
			<Navbar className="navbar-expand-lg navbar-dark bg-primary">
				<Container>
					<Container fluid>
						<Link className="text-link-lg text-white">{dataMovie.title}</Link>
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
						<OrderInfo />
					</Row>
				</Container>
			</div>
			<FooterComponent />
		</div>
	);
}

const mapStateToProps = (state) => ({
	order: state.order,
});
const mapDispatchToProps = { createOrder };

export default withRouter(
	connect(mapStateToProps, mapDispatchToProps)(OrderPage),
);
