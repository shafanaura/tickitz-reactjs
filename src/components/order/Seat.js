import React, { Component } from "react";
import { Table } from "react-bootstrap";
import listSeat from "../../utils/listSeat";
import "./styles.css";

export default class Seat extends Component {
	render() {
		return (
			<Table size="sm" className="border-0 p-0 m-0">
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
							</tr>
						</tbody>
					);
				})}
			</Table>
		);
	}
}
