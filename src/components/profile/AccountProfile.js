import React, { Component } from "react";
import { Card, Col, Container, Nav, Navbar } from "react-bootstrap";
import DetailInfo from "./DetailInfo";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./styles.css";
import OrderHistory from "./OrderHistory";

export default class AccountProfile extends Component {
	render() {
		return (
			<Router>
				<Col xs={8} className="pb-5">
					<Card bg="light" variant="light">
						<Card.Body className="d-flex">
							<Link to="/profile-page" className="pr-4 account">
								Account Settings
							</Link>
							<Link to="/profile-page/order-history">Order History</Link>
						</Card.Body>
					</Card>
					<Switch>
						<Route exact path="/profile-page">
							<DetailInfo />
						</Route>
						<Route exact path="/profile-page/order-history">
							<OrderHistory />
						</Route>
					</Switch>
				</Col>
			</Router>
		);
	}
}
