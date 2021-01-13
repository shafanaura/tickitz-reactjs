import React, { Component } from "react";
import { Alert, Button, Form, FormControl, InputGroup } from "react-bootstrap";
import { ExclamationTriangleFill } from "react-bootstrap-icons";
import "./styles.css";

export default class PersonalInfo extends Component {
	render() {
		return (
			<Form>
				<Form.Group>
					<Form.Label>Full Name</Form.Label>
					<Form.Control type="email" placeholder="Jonas El Rodriguez" />
				</Form.Group>

				<Form.Group>
					<Form.Label>Email</Form.Label>
					<Form.Control type="email" placeholder="jonasrodri123@gmail.com" />
				</Form.Group>

				<Form.Group>
					<Form.Label>Phone Number</Form.Label>
					<InputGroup className="mb-3">
						<InputGroup.Prepend className="contact">
							<InputGroup.Text>+62</InputGroup.Text>
						</InputGroup.Prepend>
						<Form.Control type="number" placeholder="81445687121" />
					</InputGroup>
				</Form.Group>
				<Alert variant="warning">
					<svg
						width="26"
						height="26"
						viewBox="0 0 28 28"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						className="mr-4"
					>
						<path
							d="M26.9206 22.7188L16.1172 2.83884C15.9022 2.44264 15.5842 2.11183 15.1968 1.88131C14.8094 1.65079 14.3669 1.52911 13.9161 1.52911C13.4653 1.52911 13.0229 1.65079 12.6355 1.88131C12.2481 2.11183 11.9301 2.44264 11.715 2.83884L0.919451 22.7188C0.705969 23.1011 0.596427 23.5326 0.601747 23.9704C0.607068 24.4082 0.727066 24.837 0.949775 25.2139C1.17248 25.5909 1.49012 25.9029 1.87101 26.1188C2.25191 26.3347 2.68274 26.4469 3.12056 26.4444H24.7194C25.1528 26.444 25.5786 26.3311 25.9553 26.1168C26.332 25.9025 26.6466 25.5941 26.8684 25.2218C27.0902 24.8495 27.2116 24.426 27.2208 23.9928C27.2299 23.5595 27.1265 23.1313 26.9206 22.75V22.7188ZM12.9206 7.77773C12.9206 7.48894 13.0353 7.21197 13.2395 7.00777C13.4437 6.80356 13.7207 6.68884 14.0094 6.68884C14.2982 6.68884 14.5752 6.80356 14.7794 7.00777C14.9836 7.21197 15.0983 7.48894 15.0983 7.77773V17.1111C15.0983 17.3999 14.9836 17.6768 14.7794 17.881C14.5752 18.0852 14.2982 18.2 14.0094 18.2C13.7207 18.2 13.4437 18.0852 13.2395 17.881C13.0353 17.6768 12.9206 17.3999 12.9206 17.1111V7.77773ZM14.0094 23.2166C13.7326 23.2166 13.4619 23.1345 13.2317 22.9807C13.0014 22.8268 12.822 22.6082 12.716 22.3524C12.6101 22.0966 12.5823 21.8151 12.6364 21.5435C12.6904 21.2719 12.8237 21.0225 13.0195 20.8267C13.2153 20.6309 13.4648 20.4975 13.7363 20.4435C14.0079 20.3895 14.2894 20.4172 14.5452 20.5232C14.801 20.6291 15.0197 20.8086 15.1735 21.0388C15.3273 21.269 15.4094 21.5397 15.4094 21.8166C15.4094 22.0005 15.3732 22.1825 15.3029 22.3524C15.2325 22.5222 15.1294 22.6766 14.9994 22.8066C14.8694 22.9366 14.7151 23.0397 14.5452 23.1101C14.3753 23.1804 14.1933 23.2166 14.0094 23.2166Z"
							fill="#F4B740"
						/>
					</svg>
					Fill your data correctly.
				</Alert>
			</Form>
		);
	}
}
