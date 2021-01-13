import React, { Component } from "react";
import FooterComponent from "../../components/footer/FooterComponent";
import NavbarComponent from "../../components/navbar/NavbarComponent";
import TicketComponent from "../../components/ticket/TicketComponent";
import "./styles.css";

export default class TicketResult extends Component {
	render() {
		return (
			<div>
				<NavbarComponent />
				<div className="bg-primary">
					<TicketComponent />
				</div>
				<FooterComponent />
			</div>
		);
	}
}
