import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import { connect } from "react-redux";
import http from "../helpers/http";

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

const mapStateToProps = (state) => ({
	auth: state.auth,
});

export default connect(mapStateToProps)(EditMovie);
