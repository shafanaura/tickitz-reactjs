import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import { connect } from "react-redux";
import http from "../helpers/http";
import { genre } from "../redux/actions/genre";

class CreateGenre extends Component {
	state = {
		name: "",
	};
	// submitData = (e) => {
	// 	e.preventDefault();
	// 	const { name } = this.state;
	// 	this.props.movie(name);
	// };
	changeText = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};
	saveData = async (e) => {
		e.preventDefault();
		const data = new URLSearchParams();
		const { name } = this.state;
		data.append("name", name);
		const response = await http(this.props.auth.token).post("genres", data);
		window.alert(response.data.message);
	};
	render() {
		return (
			<div>
				<Form onSubmit={this.saveData}>
					<Form.Group>
						<Form.Label>name</Form.Label>
						<Form.Control
							onChange={(event) => this.changeText(event)}
							name="name"
							placeholder="Write your name"
						/>
					</Form.Group>
					<Button variant="primary" type="submit" block>
						Submit
					</Button>
				</Form>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	auth: state.auth,
});
const mapDispatchToProps = { genre };

export default connect(mapStateToProps, mapDispatchToProps)(CreateGenre);
