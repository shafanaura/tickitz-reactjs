import React from "react";
import { Card, Col, Image, Row } from "react-bootstrap";
import "./styles.css";

function InfoProfile() {
	return (
		<Col xs={4}>
			<Card>
				<Card.Body>
					<div className="d-flex justify-content-between">
						<p className="text-color-body">INFO</p>
						<svg
							width="28"
							height="28"
							viewBox="0 0 28 28"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M14.0013 16.3333C15.29 16.3333 16.3346 15.2887 16.3346 14C16.3346 12.7113 15.29 11.6667 14.0013 11.6667C12.7126 11.6667 11.668 12.7113 11.668 14C11.668 15.2887 12.7126 16.3333 14.0013 16.3333Z"
								fill="#5F2EEA"
							/>
							<path
								d="M22.1654 16.3333C23.454 16.3333 24.4987 15.2887 24.4987 14C24.4987 12.7113 23.454 11.6667 22.1654 11.6667C20.8767 11.6667 19.832 12.7113 19.832 14C19.832 15.2887 20.8767 16.3333 22.1654 16.3333Z"
								fill="#5F2EEA"
							/>
							<path
								d="M5.83333 16.3333C7.122 16.3333 8.16667 15.2887 8.16667 14C8.16667 12.7113 7.122 11.6667 5.83333 11.6667C4.54467 11.6667 3.5 12.7113 3.5 14C3.5 15.2887 4.54467 16.3333 5.83333 16.3333Z"
								fill="#5F2EEA"
							/>
						</svg>
					</div>
					<div className="text-center">
						<Image
							src="https://cachedimages.podchaser.com/256x256/aHR0cHM6Ly9jcmVhdG9yLWltYWdlcy5wb2RjaGFzZXIuY29tL2EyYjc4MGQxNGU0ODhhMTdjZjhiZTQyYWU3MjZmNWUzLmpwZWc%3D/aHR0cHM6Ly93d3cucG9kY2hhc2VyLmNvbS9pbWFnZXMvbWlzc2luZy1pbWFnZS5wbmc%3D"
							width={136}
							className="img-profile shadow"
						/>
						<p className="text-link-lg-20 pt-3 mb-0">Jonas El Rodriguez</p>
						<p className="text-color-body">Moviegoers</p>
						<hr />
					</div>
					<div>
						<p className="text-link-sm text-color-body">Loyalty Points</p>
						<Card bg="primary">
							<Card.Body>
								<p className="text-white text-display-xs-bold-18">Moviegoers</p>
								<div className="d-flex align-items-center">
									<p className="text-link-lg text-white">320</p>
									<p className="mb-2 pl-1 text-xs-10 text-white">points</p>
								</div>
							</Card.Body>
						</Card>
						<p className="text-center pt-3">180 points become a master</p>
					</div>
				</Card.Body>
			</Card>
		</Col>
	);
}

export default InfoProfile;