import React, { Component } from "react";

import {
	Button,
	Col,
	Jumbotron,
	Container,
	Navbar,
	Row,
	Nav,
} from "react-bootstrap";
import { Switch, Route, Link } from "react-router-dom";
import CreateMovie from "../../containers/createMovie.container";
import GenreTable from "../../containers/genreTable.container";
import CreateGenre from "../../containers/createGenre.container";
import MovieTable from "../../containers/movieTable.container";
import EditMovie from "../../containers/editMovie.container";
import EditGenre from "../../containers/editGenre.container";

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
								<Link className="nav-link" to="/admin-panel/profile">
									Profile
								</Link>

								<Link className="nav-link" to="/admin-panel/settings">
									Settings
								</Link>

								<Link className="nav-link" to="/admin-panel/manage_user">
									Manage User
								</Link>

								<Link className="nav-link" to="/admin-panel/manage_movie">
									Manage Movie
								</Link>

								<Link className="nav-link" to="/admin-panel/manage_genre">
									Manage Genre
								</Link>
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
									component={EditMovie}
								/>
								<Route
									path="/admin-panel/manage_movie/add"
									component={CreateMovie}
								/>
								<Route path="/admin-panel/manage_genre" exact>
									<GenreTable />
								</Route>
								<Route
									path="/admin-panel/manage_genre/edit/:id"
									component={EditGenre}
								/>
								<Route
									path="/admin-panel/manage_genre/add"
									component={CreateGenre}
								/>
							</Switch>
						</Col>
					</Row>
				</Container>
			</React.Fragment>
		);
	}
}
