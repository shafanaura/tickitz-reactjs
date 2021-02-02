import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import { connect } from "react-redux";
import http from "../helpers/http";
import { movie } from "../redux/actions/movie";

class CreateMovie extends Component {
	state = {
		title: "",
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
		const { title } = this.state;
		data.append("title", title);
		const response = await http(this.props.auth.token).post("movies", data);
		window.alert(response.data.message);
	};
	render() {
		return (
			<div>
				<Form onSubmit={this.saveData}>
					<Form.Group>
						<Form.Label>title</Form.Label>
						<Form.Control
							onChange={(event) => this.changeText(event)}
							name="title"
							placeholder="Write your title"
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
const mapDispatchToProps = { movie };

export default connect(mapStateToProps)(CreateMovie);
