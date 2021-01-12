import React, { Component } from "react";
import { Col, Row, Table } from "react-bootstrap";
import listSeat from "../../utils/listSeat";
import "./styles.css";

export default class Seat extends Component {
	render() {
		return (
			<div>
				<table>
					{listSeat.map((item) => {
						return (
							<tbody>
								<tr>
									<td>{item.value}</td>
									<td>
										<input type="checkbox" />
									</td>
									<td>
										<input type="checkbox" />
									</td>
									<td>
										<input type="checkbox" />
									</td>
									<td>
										<input type="checkbox" />
									</td>
									<td>
										<input type="checkbox" />
									</td>
									<td>
										<input type="checkbox" />
									</td>
									<td>
										<input type="checkbox" />
									</td>
									<div className="px-3"></div>
									<td>
										<input type="checkbox" />
									</td>
									<td>
										<input type="checkbox" />
									</td>
									<td>
										<input type="checkbox" />
									</td>
									<td>
										<input type="checkbox" />
									</td>
									<td>
										<input type="checkbox" />
									</td>
									<td>
										<input type="checkbox" />
									</td>
									<td>
										<input type="checkbox" />
									</td>
								</tr>
							</tbody>
						);
					})}
					<tbody>
						<tr>
							<td></td>
							<td className="pl-3">1</td>
							<td className="pl-3">2</td>
							<td className="pl-3">3</td>
							<td className="pl-3">4</td>
							<td className="pl-3">5</td>
							<td className="pl-3">6</td>
							<td className="pl-3">7</td>
							<div className="px-3"></div>
							<td className="pl-3">8</td>
							<td className="pl-3">9</td>
							<td className="pl-3">10</td>
							<td className="pl-3">11</td>
							<td className="pl-3">12</td>
							<td className="pl-3">13</td>
							<td className="pl-3">14</td>
						</tr>
					</tbody>
				</table>
				<p className="text-link-lg pt-4">Seating key</p>
				<Row>
					<Col>
						<div className="availableBox float-left mr-3"></div>
						<p>Available</p>
					</Col>
					<Col>
						<div className="selectBox float-left mr-3"></div>
						<p>Selected</p>
					</Col>
					<Col>
						<div className="loveBox float-left mr-3"></div>
						<p>Love nest</p>
					</Col>
					<Col>
						<div className="soldBox float-left mr-3"></div>
						<p>Sold</p>
					</Col>
				</Row>
			</div>
		);
	}
}
