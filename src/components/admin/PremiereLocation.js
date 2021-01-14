import React from "react";
import { Card, Col, Form, Image, Row } from "react-bootstrap";
import map from "../../assets/images/map.svg";
import ebv from "../../assets/images/ebv.png";
import hiflix from "../../assets/images/hiflix.png";
import cineone from "../../assets/images/cineone.png";
import ShowtimeAdmin from "./ShowtimeAdmin";

function PremiereLocation() {
	return (
		<Col md={4} xs={12}>
			<p className="text-display-xs-bold">Premiere Location</p>
			<Card>
				<Card.Body>
					<Form.Group className="d-flex align-items-center">
						<Image src={map} className="position-absolute pl-3" />
						<Form.Control as="select" className="border-0 pl-5 pick">
							<option selected>Purwokerto</option>
							<option value="1">Jakarta</option>
							<option value="2">Bandung</option>
							<option value="3">Surabaya</option>
						</Form.Control>
					</Form.Group>

					<Row className="pt-3">
						<Col md={4}>
							<Image src={ebv} height={32} />
						</Col>
						<Col md={4}>
							<Image src={hiflix} height={28} />
						</Col>
						<Col md={4}>
							<Image src={cineone} height={16} />
						</Col>
					</Row>
					<Row className="pt-3">
						<Col md={4}>
							<Image src={ebv} height={32} />
						</Col>
						<Col md={4}>
							<Image src={hiflix} height={28} />
						</Col>
						<Col md={4}>
							<Image src={cineone} height={16} />
						</Col>
					</Row>
					<Row className="pt-3">
						<Col md={4}>
							<Image src={ebv} height={32} />
						</Col>
						<Col md={4}>
							<Image src={hiflix} height={28} />
						</Col>
						<Col md={4}>
							<Image src={cineone} height={16} />
						</Col>
					</Row>
				</Card.Body>
			</Card>
			<ShowtimeAdmin />
		</Col>
	);
}

export default PremiereLocation;
