import React, { Component } from "react";
import {
	Container,
	Row,
	Col,
	Image,
	Button,
	ListGroup,
	Form,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { Google, Facebook } from "react-bootstrap-icons";
import LeftRegister from "../../components/register/LeftRegister";
import RightRegister from "../../components/register/RightRegister";
import tickitz_white from "../../assets/images/tickitz-white.svg";
import "./styles.css";

class SignUp extends Component {
	render() {
		return (
			<Row>
				<LeftRegister>
					<Container>
						<Image src={tickitz_white} width={250} />
						<p className="text-display-md-bold m-0 text-white pt-5">
							Lets build your account
						</p>
						<p className="text-lg text-white pb-3 opacity-70 ">
							To be a loyal moviegoer and access all of features, your details
							are required.
						</p>
						<ListGroup>
							<li>
								<Button
									variant="outline-light"
									className="btn-sm rounded-circle"
									active
								>
									1<div className="vertical-line"></div>
								</Button>
								<label className="form-check-label text-white pb-3">
									<p className="pl-3">Fill your additional details</p>
								</label>
							</li>
							<li>
								<Button
									variant="outline-light"
									className="btn-sm rounded-circle"
								>
									2<div className="vertical-line"></div>
								</Button>
								<label className="form-check-label text-label-non-active text-white pb-3">
									<p className="pl-3 text-color-placeholder">
										Activate your account
									</p>
								</label>
							</li>
							<li>
								<Button
									variant="outline-light"
									className="btn-sm rounded-circle"
								>
									3
								</Button>
								<label className="form-check-label text-label-non-active text-white pb-3">
									<p className="pl-3 text-color-placeholder">Done</p>
								</label>
							</li>
						</ListGroup>
					</Container>
				</LeftRegister>
				<RightRegister>
					<p class="text-link-lg-26 pb-3 pt-5">Fill your additional details</p>
					<Form>
						<Form.Group controlId="formBasicEmail">
							<Form.Label>Email</Form.Label>
							<Form.Control type="email" placeholder="Write your email" />
						</Form.Group>

						<Form.Group controlId="formBasicPassword">
							<Form.Label>Password</Form.Label>
							<Form.Control type="password" placeholder="Write your password" />
						</Form.Group>
						<Form.Group controlId="formBasicCheckbox">
							<Form.Check
								type="checkbox"
								label="I agree to terms & conditions"
							/>
						</Form.Group>
						<Button variant="primary" type="submit" block>
							Join for free now
						</Button>
						<p className="text-center pt-3">
							Do you already have an account?
							<Link to="/sign-in"> Log in</Link>
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

export default SignUp;
