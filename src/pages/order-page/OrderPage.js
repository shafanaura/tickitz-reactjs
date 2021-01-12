import React, { Component } from "react";
import { Button, Col, Container, Image, Navbar, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavbarComponent from "../../components/navbar/NavbarComponent";
import OrderInfo from "../../components/order/OrderInfo";
import OrderSeat from "../../components/order/OrderSeat";
import FooterComponent from "../../components/footer/FooterComponent";
import listMovie from "../../utils/listMovie";
import "./styles.css";

export default class OrderPage extends Component {
	render() {
		return (
			<div>
				<NavbarComponent />
				<Navbar className="navbar-expand-lg navbar-dark bg-primary">
					<Container>
						<Container fluid>
							{listMovie
								.filter((item) => item.id === "1")
								.map((item) => (
									<Link className="text-link-lg text-white">{item.title}</Link>
								))}
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
}
