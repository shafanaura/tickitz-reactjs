import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import { connect } from "react-redux";
import http from "../helpers/http";

class EditGenre extends Component {
	state = {
		genre: {},
	};
	async componentDidMount() {
		const { id } = this.props.match.params;
		const response = await http().get(`genres/${id}`);
		this.setState({
			genre: response.data.results,
		});
	}
	saveData = async (e) => {
		e.preventDefault();
		const { id } = this.props.match.params;
		const { name } = this.state.genre;
		const data = new URLSearchParams();
		data.append("name", name);
		const response = await http(this.props.auth.token).patch(
			`genres/${id}`,
			data,
		);
		window.alert(response.data.message);
	};
	changeText = (event) => {
		const { genre } = this.state;
		this.setState({
			genre: {
				...genre,
				[event.target.name]: event.target.value,
			},
		});
	};
	render() {
		const { genre } = this.state;
		return (
			<React.Fragment>
				{Object.keys(genre).length > 0 && (
					<Form onSubmit={this.saveData}>
						<Form.Control
							type="text"
							name="name"
							onChange={this.changeText}
							defaultValue={genre.name}
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

export default connect(mapStateToProps)(EditGenre);
