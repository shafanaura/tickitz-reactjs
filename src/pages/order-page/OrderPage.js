import React, { Component } from "react";
import { Button, Container, Image, Navbar, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavbarComponent from "../../components/navbar/NavbarComponent";
import OrderInfo from "../../components/order/OrderInfo";
import OrderSeat from "../../components/order/OrderSeat";
import listMovie from "../../utils/listMovie";
import "./styles.css";

export default class OrderPage extends Component {
	render() {
		return (
			<div className="bg-gray">
				<Container>
					<NavbarComponent>
						<Image
							src="https://cachedimages.podchaser.com/256x256/aHR0cHM6Ly9jcmVhdG9yLWltYWdlcy5wb2RjaGFzZXIuY29tL2EyYjc4MGQxNGU0ODhhMTdjZjhiZTQyYWU3MjZmNWUzLmpwZWc%3D/aHR0cHM6Ly93d3cucG9kY2hhc2VyLmNvbS9pbWFnZXMvbWlzc2luZy1pbWFnZS5wbmc%3D"
							roundedCircle
						/>
					</NavbarComponent>
				</Container>
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
				<Container>
					<Row>
						<OrderSeat />
						<OrderInfo />
					</Row>
				</Container>
			</div>
		);
	}
}
