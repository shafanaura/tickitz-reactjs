import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import http from "../helpers/http";

class GenreTable extends Component {
	state = {
		genres: [],
	};
	async componentDidMount() {
		const response = await http().get("genres");
		this.setState({
			genres: response.data.results,
		});
	}
	render() {
		const { genres } = this.state;
		console.log(genres);
		return (
			<div>
				<Link to="/admin-panel/manage_genre/add">Add Genre</Link>
				<Table striped bordered hover>
					<thead>
						<tr>
							<th>ID</th>
							<th>Title</th>
							<th>Option</th>
						</tr>
					</thead>
					<tbody>
						{genres.map((genre) => {
							return (
								<tr key={String(genre.id)}>
									<td>{genre.id}</td>
									<td>{genre.name}</td>
									<td>
										<Link
											to={`/admin-panel/manage_genre/edit/${genre.id}`}
											className="btn btn-sm btn-warning"
										>
											Edit
										</Link>{" "}
										<Link
											to={`/admin-panel/manage_genre/delete/${genre.id}`}
											className="btn btn-sm btn-danger"
										>
											Delete
										</Link>
									</td>
								</tr>
							);
						})}
					</tbody>
				</Table>
			</div>
		);
	}
}

export default GenreTable;
