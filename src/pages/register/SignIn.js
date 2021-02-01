import React, { Component } from "react";
import { Row, Col, Image, Button, Form, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { login, autoLogin } from "../../redux/actions/auth";
import { connect } from "react-redux";

import LeftRegister from "../../components/register/LeftRegister";
import RightRegister from "../../components/register/RightRegister";
import tickitz_white from "../../assets/images/tickitz-white.svg";
import "./styles.css";

class SignIn extends Component {
	state = {
		email: "",
		password: "",
	};
	submitData = (e) => {
		e.preventDefault();
		const { email, password } = this.state;
		this.props.login(email, password);
	};
	componentDidUpdate() {
		if (this.props.auth.token) {
			const { from = null } = this.props.location.state;
			this.props.history.push((from && from.pathname) || "/");
		}
	}
	componentDidMount() {
		const token = localStorage.getItem("token");
		if (token) {
			this.props.autoLogin(token);
		}
	}
	changeText = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};
	render() {
		return (
			<Row>
				<LeftRegister>
					<div className="infinity-form-container infinity-form">
						<Image src={tickitz_white} height={150} />
						<p class="text-display-sm m-0 text-white opacity-70">
							wait, watch, wow!
						</p>
					</div>
				</LeftRegister>
				<RightRegister>
					<p class="text-link-lg-48 m-0 pt-3">Sign in</p>
					<p class="text-md opacity-70 m-0 pb-4">
						Sign in with your data that you entered during your registration
					</p>
					<Form onSubmit={this.submitData}>
						<Form.Group controlId="formBasicEmail">
							{this.props.auth.errorMsg !== "" && (
								<Alert variant="danger">{this.props.auth.errorMsg}</Alert>
							)}
							<Form.Label>Email</Form.Label>
							<Form.Control
								onChange={(event) => this.changeText(event)}
								name="email"
								type="email"
								placeholder="Write your email"
							/>
						</Form.Group>

						<Form.Group controlId="formBasicPassword">
							<Form.Label>Password</Form.Label>
							<Form.Control
								onChange={(event) => this.changeText(event)}
								name="password"
								type="password"
								placeholder="Write your password"
							/>
						</Form.Group>
						<Button variant="primary" type="submit" block>
							Sign in
						</Button>
						<p className="text-center pt-3">
							Forgot your password?
							<Link to="/forgot-password"> Reset now</Link>
						</p>
						<div className="d-flex py-2">
							<hr className="my-auto flex-grow-1" />
							<div className="px-3 opacity-70">or</div>
							<hr className="my-auto flex-grow-1" />
						</div>
						<Row className="d-flex justify-content-between">
							<Col xs={6}>
								<Button className="shadow" variant="light" type="submit" block>
									<svg
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
										className="mr-3"
									>
										<path
											d="M21.8055 10.0415H21V10H12V14H17.6515C16.827 16.3285 14.6115 18 12 18C8.6865 18 6 15.3135 6 12C6 8.6865 8.6865 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C6.4775 2 2 6.4775 2 12C2 17.5225 6.4775 22 12 22C17.5225 22 22 17.5225 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z"
											fill="#FFC107"
										/>
										<path
											d="M3.15302 7.3455L6.43852 9.755C7.32752 7.554 9.48052 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C8.15902 2 4.82802 4.1685 3.15302 7.3455Z"
											fill="#FF3D00"
										/>
										<path
											d="M12 22C14.583 22 16.93 21.0115 18.7045 19.404L15.6095 16.785C14.5717 17.5742 13.3037 18.0011 12 18C9.39897 18 7.19047 16.3415 6.35847 14.027L3.09747 16.5395C4.75247 19.778 8.11347 22 12 22Z"
											fill="#4CAF50"
										/>
										<path
											d="M21.8055 10.0415H21V10H12V14H17.6515C17.2571 15.1082 16.5467 16.0766 15.608 16.7855L15.6095 16.7845L18.7045 19.4035C18.4855 19.6025 22 17 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z"
											fill="#1976D2"
										/>
									</svg>
									Google
								</Button>
							</Col>
							<Col xs={6}>
								<Button className="shadow" variant="light" type="submit" block>
									<svg
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
										className="mr-3"
									>
										<path
											d="M12.001 2.00201C6.47901 2.00201 2.00201 6.47901 2.00201 12.001C2.00201 16.991 5.65801 21.127 10.439 21.88V14.892H7.89901V12.001H10.439V9.79801C10.439 7.29001 11.932 5.90701 14.215 5.90701C15.309 5.90701 16.455 6.10201 16.455 6.10201V8.56101H15.191C13.951 8.56101 13.563 9.33301 13.563 10.124V11.999H16.334L15.891 14.89H13.563V21.878C18.344 21.129 22 16.992 22 12.001C22 6.47901 17.523 2.00201 12.001 2.00201Z"
											fill="#395185"
										/>
									</svg>
									Facebook
								</Button>
							</Col>
						</Row>
					</Form>
				</RightRegister>
			</Row>
		);
	}
}

const mapStateToProps = (state) => ({
	auth: state.auth,
});
const mapDispatchToProps = { login, autoLogin };

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
