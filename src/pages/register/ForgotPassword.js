import React, { Component } from "react";
import {
	Container,
	Row,
	Image,
	Button,
	ListGroup,
	Form,
} from "react-bootstrap";
import LeftRegister from "../../components/register/LeftRegister";
import RightRegister from "../../components/register/RightRegister";
import tickitz_white from "../../assets/images/tickitz-white.svg";
import "./styles.css";

class ForgotPassword extends Component {
	render() {
		return (
			<Row>
				{/* Left Side */}
				<LeftRegister>
					<Container>
						<Image src={tickitz_white} width={250} />
						<p className="text-display-md-bold m-0 text-white pt-5">
							Lets reset your password
						</p>
						<p className="text-lg text-white pb-3 opacity-70 ">
							To be able to use your account again, please complete the
							following steps
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
									<p className="pl-3">Fill your complete email</p>
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
									3<div className="vertical-line"></div>
								</Button>
								<label className="form-check-label text-label-non-active text-white pb-3">
									<p className="pl-3 text-color-placeholder">
										Enter your new password
									</p>
								</label>
							</li>
							<li>
								<Button
									variant="outline-light"
									className="btn-sm rounded-circle"
								>
									4
								</Button>
								<label className="form-check-label text-label-non-active text-white pb-3">
									<p className="pl-3 text-color-placeholder">Done</p>
								</label>
							</li>
						</ListGroup>
					</Container>
				</LeftRegister>
				{/* Right side */}
				<RightRegister>
					<p class="text-link-lg-26 pt-3 m-0">Fill your complete email</p>
					<p class="opacity-70 text-md pb-4 m-0">
						we'll send a link to your email shortly
					</p>
					<Form>
						<Form.Group controlId="formBasicEmail">
							<Form.Label>Email</Form.Label>
							<Form.Control type="email" placeholder="Write your email" />
						</Form.Group>
						<Button variant="primary" type="submit" block>
							Activate now
						</Button>
					</Form>
				</RightRegister>
			</Row>
		);
	}
}

export default ForgotPassword;
