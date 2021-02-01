import React, { Component } from "react";
import http from "../../helpers/http";

import {
	Button,
	Col,
	Jumbotron,
	Container,
	Navbar,
	Row,
	Nav,
	Table,
	Form,
} from "react-bootstrap";
import { Switch, Route, Link } from "react-router-dom";
import { connect } from "react-redux";

export default class AdminPanel extends Component {
	render() {
		return (
			<React.Fragment>
				<Navbar bg="dark" variant="dark">
					<Container>
						<Navbar.Brand>
							<Link className="nav-link" to="/admin-panel">
								Admin Panel
							</Link>
						</Navbar.Brand>
						<Navbar.Toggle />
						<Navbar.Collapse className="justify-content-end">
							<Navbar.Text>
								<Button variant="light">Logout</Button>
							</Navbar.Text>
						</Navbar.Collapse>
					</Container>
				</Navbar>
				<Container>
					<Row>
						<Col md={3}>
							<Nav className="flex-column">
								<Nav.Item className="d-flex flex-row align-items-center">
									<Link className="nav-link" to="/admin-panel/profile">
										Profile
									</Link>
								</Nav.Item>
								<Nav.Item className="d-flex flex-row align-items-center">
									<Link className="nav-link" to="/admin-panel/settings">
										Settings
									</Link>
								</Nav.Item>
								<Nav.Item className="d-flex flex-row align-items-center">
									<Link className="nav-link" to="/admin-panel/manage_user">
										Manage User
									</Link>
								</Nav.Item>
								<Nav.Item className="d-flex flex-row align-items-center">
									<Link className="nav-link" to="/admin-panel/manage_movie">
										Manage Movie
									</Link>
								</Nav.Item>
								<Nav.Item className="d-flex flex-row align-items-center">
									<Link className="nav-link" to="/admin-panel/manage_genre">
										Manage Genre
									</Link>
								</Nav.Item>
							</Nav>
						</Col>
						<Col md={9}>
							<Switch>
								<Route path="/admin-panel" exact>
									<Jumbotron>
										<h1>Welcome to admin panel</h1>
										<p>Here you can manage data for your system!</p>
									</Jumbotron>
								</Route>
								<Route path="/admin-panel/profile">Hello</Route>
								<Route path="/admin-panel/settings">Settings</Route>
								<Route path="/admin-panel/manage_user">Manage User</Route>
								<Route path="/admin-panel/manage_movie" exact>
									<MovieTable />
								</Route>
								<Route
									path="/admin-panel/manage_movie/edit/:id"
									component={WrapperEditMovie}
								/>
								<Route path="/admin-panel/manage_genre">Manage Genre</Route>
							</Switch>
						</Col>
					</Row>
				</Container>
			</React.Fragment>
		);
	}
}

class MovieTable extends Component {
	state = {
		movies: [],
	};
	async componentDidMount() {
		const response = await http().get("movies");
		this.setState({
			movies: response.data.results,
		});
	}
	render() {
		const { movies } = this.state;
		console.log(movies);
		return (
			<Table striped bordered hover>
				<thead>
					<tr>
						<th>ID</th>
						<th>Title</th>
						<th>Option</th>
					</tr>
				</thead>
				<tbody>
					{movies.map((movie) => {
						return (
							<tr key={String(movie.id)}>
								<td>{movie.id}</td>
								<td>{movie.title}</td>
								<td>
									<Link
										to={`/admin-panel/manage_movie/edit/${movie.id}`}
										className="btn btn-sm btn-warning"
									>
										Edit
									</Link>{" "}
									<Link
										to={`/admin-panel/manage_movie/delete/${movie.id}`}
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
		);
	}
}

class EditMovie extends Component {
	state = {
		movie: {},
	};
	async componentDidMount() {
		const { id } = this.props.match.params;
		const response = await http().get(`movies/${id}`);
		this.setState({
			movie: response.data.results,
		});
	}
	saveData = async (e) => {
		e.preventDefault();
		const { id } = this.props.match.params;
		const { title } = this.state.movie;
		const data = new URLSearchParams();
		data.append("title", title);
		const response = await http(this.props.auth.token).patch(
			`movies/${id}`,
			data,
		);
		window.alert(response.data.message);
	};
	changeText = (event) => {
		const { movie } = this.state;
		this.setState({
			movie: {
				...movie,
				[event.target.name]: event.target.value,
			},
		});
	};
	render() {
		const { movie } = this.state;
		return (
			<React.Fragment>
				{Object.keys(movie).length > 0 && (
					<Form onSubmit={this.saveData}>
						<Form.Control
							type="text"
							name="title"
							onChange={this.changeText}
							defaultValue={movie.title}
						/>
						<Button type="submit" variant="warning">
							Save
						</Button>
					</Form>
				)}
			</React.Fragment>
		);
	}
}

const WrapperEditMovie = connect((state) => ({ auth: state.auth }))(EditMovie);
