import React from "react";
import { Button, Card, Col, Form, Image, Row } from "react-bootstrap";
import calendar from "../../assets/images/calendar.svg";

function ShowtimeAdmin() {
	return (
		<div className="pt-4">
			<p className="text-display-xs-bold">Premiere Location</p>
			<Card>
				<Card.Body>
					<Form.Group className="d-flex align-items-center">
						<Image src={calendar} className="position-absolute pl-3" />
						<Form.Control type="date" className="border-0 pl-5 pick" />
					</Form.Group>
					<Row>
						<Col md={3} className="pt-2">
							<Button variant="outline-primary col-12" size="sm">
								<svg
									width="18"
									height="18"
									viewBox="0 0 18 18"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M9 0.5625C9.24864 0.5625 9.4871 0.661272 9.66291 0.837088C9.83873 1.0129 9.9375 1.25136 9.9375 1.5V9C9.9375 9.24864 9.83873 9.4871 9.66291 9.66291C9.4871 9.83873 9.24864 9.9375 9 9.9375H1.5C1.25136 9.9375 1.0129 9.83873 0.837088 9.66291C0.661272 9.4871 0.5625 9.24864 0.5625 9C0.5625 8.75136 0.661272 8.5129 0.837088 8.33709C1.0129 8.16127 1.25136 8.0625 1.5 8.0625H8.0625V1.5C8.0625 1.25136 8.16127 1.0129 8.33709 0.837088C8.5129 0.661272 8.75136 0.5625 9 0.5625Z"
										fill="#5F2EEA"
									/>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M8.0625 9C8.0625 8.75136 8.16127 8.5129 8.33709 8.33709C8.5129 8.16127 8.75136 8.0625 9 8.0625H16.5C16.7486 8.0625 16.9871 8.16127 17.1629 8.33709C17.3387 8.5129 17.4375 8.75136 17.4375 9C17.4375 9.24864 17.3387 9.4871 17.1629 9.66291C16.9871 9.83873 16.7486 9.9375 16.5 9.9375H9.9375V16.5C9.9375 16.7486 9.83873 16.9871 9.66291 17.1629C9.4871 17.3387 9.24864 17.4375 9 17.4375C8.75136 17.4375 8.5129 17.3387 8.33709 17.1629C8.16127 16.9871 8.0625 16.7486 8.0625 16.5V9Z"
										fill="#5F2EEA"
									/>
								</svg>
							</Button>
						</Col>
						<Col md={3} className="pt-2">
							<small>08:30am</small>
						</Col>
						<Col md={3} className="pt-2">
							<small>10:30pm</small>
						</Col>
						<Col md={3} className="pt-2">
							<small>12:00pm</small>
						</Col>
						<Col md={3} className="pt-2">
							<small>04:30pm</small>
						</Col>
						<Col md={3} className="pt-2">
							<small>07:00pm</small>
						</Col>
						<Col md={3} className="pt-2">
							<small>08:30pm</small>
						</Col>
						<Col md={3} className="pt-2">
							<small>08:30pm</small>
						</Col>
					</Row>
				</Card.Body>
			</Card>
		</div>
	);
}

export default ShowtimeAdmin;
