import React, { Component } from "react";
import { Row, Col, Image, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Google, Facebook } from "react-bootstrap-icons";
import LeftRegister from "../../components/register/LeftRegister";
import RightRegister from "../../components/register/RightRegister";
import tickitz_white from "../../assets/images/tickitz-white.svg";
import "./styles.css";

export default class SignIn extends Component {
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
					<Form>
						<Form.Group controlId="formBasicEmail">
							<Form.Label>Email</Form.Label>
							<Form.Control type="email" placeholder="Write your email" />
						</Form.Group>

						<Form.Group controlId="formBasicPassword">
							<Form.Label>Password</Form.Label>
							<Form.Control type="password" placeholder="Write your password" />
						</Form.Group>
						<Link to="/">
							<Button variant="primary" type="submit" block>
								Sign in
							</Button>
						</Link>
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
									<Google color="green" className="mr-3" />
									Google
								</Button>
							</Col>
							<Col xs={6}>
								<Button className="shadow" variant="light" type="submit" block>
									<Facebook color="blue" className="mr-3" />
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
