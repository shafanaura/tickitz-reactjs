import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";

export default class MovieDesc extends Component {
	render() {
		return (
			<div>
				<ListGroup variant="flush">
					<ListGroup.Item className="pb-0">
						<p className="float-left text-lg-20 text-color-label">
							Date & time
						</p>
						<p className="float-right text-lg-20">
							Tuesday, 07 July 2020 at 02:00pm
						</p>
					</ListGroup.Item>
					<ListGroup.Item className="pb-0">
						<p className="float-left text-lg-20 text-color-label">
							Movie title
						</p>
						<p className="float-right text-lg-20">Spider-Man: Homecoming</p>
					</ListGroup.Item>
					<ListGroup.Item className="pb-0">
						<p className="float-left text-lg-20 text-color-label">
							Cinema name
						</p>
						<p className="float-right text-lg-20">CineOne21 Cinema</p>
					</ListGroup.Item>
					<ListGroup.Item className="pb-0">
						<p className="float-left text-lg-20 text-color-label">
							Number of tickets
						</p>
						<p className="float-right text-lg-20">3 pieces</p>
					</ListGroup.Item>
					<ListGroup.Item className="pb-0">
						<p className="float-left text-lg-20 text-color-label">
							Total payment
						</p>
						<p className="float-right text-link-lg">$30,00</p>
					</ListGroup.Item>
				</ListGroup>
			</div>
		);
	}
}
