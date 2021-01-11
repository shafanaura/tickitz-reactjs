import React from "react";
import { Container, Image, Row, Col } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import youtube from "../../assets/images/youtube.svg";
import ebv from "../../assets/images/ebv.png";
import cineone from "../../assets/images/cineone.png";
import hiflix from "../../assets/images/hiflix.png";
import tickitz from "../../assets/images/tickitz-purple.svg";
import facebook from "../../assets/images/facebook.svg";
import instagram from "../../assets/images/instagram.svg";
import twitter from "../../assets/images/twitter.svg";

function FooterComponent() {
	return (
		<footer>
			<Container className="container py-5">
				<Row className="py-3 g-5">
					<Col md={6} lg={4} className="mb-lg-0">
						<Image src={tickitz} width={170} />
						<p className="text-sm text-color-label mt-3">
							Stop waiting in line. Buy tickets conveniently, watch movies
							quietly.
						</p>
					</Col>
					<Col lg={2} md={6} className="mb-4 mb-lg-0">
						<p className="text-display-xs-bold-16 mb-4">Explore</p>
						<ul className="mb-0">
							<li className="mb-2">
								<Link to="" className="text-muted">
									Cinemas
								</Link>
							</li>
							<li className="mb-2">
								<Link to="" className="text-muted">
									Movies List
								</Link>
							</li>
							<li className="mb-2">
								<Link to="" className="text-muted">
									My Ticket
								</Link>
							</li>
							<li className="mb-2">
								<Link to="" className="text-muted">
									Notification
								</Link>
							</li>
						</ul>
					</Col>
					<Col lg={3} md={6} className="mb-4 mb-lg-0">
						<p className="text-display-xs-bold-16 mb-4">Our Sponsor</p>
						<ul className="mb-0">
							<li className="mb-3">
								<Link to="#" className="text-muted">
									<Image src={ebv} height={44} />
								</Link>
							</li>
							<li className="mb-3">
								<Link to="#" className="text-muted">
									<Image src={cineone} height={30} />
								</Link>
							</li>
							<li className="mb-3">
								<Link to="#" className="text-muted">
									<Image src={hiflix} height={32} />
								</Link>
							</li>
						</ul>
					</Col>
					<Col lg={3} md={6} className="mb-4 mb-lg-0">
						<p className="text-display-xs-bold-16 mb-4">Follow us</p>
						<ul className="mb-0">
							<li className="mb-3">
								<div className="float-left mr-3">
									<Image src={facebook} className="Image-fluid" height={20} />
								</div>
								<div className="d-none d-lg-block">
									<Link to="#" className="text-muted">
										Tickitz Cinema id
									</Link>
								</div>
							</li>
							<li className="mb-3">
								<div className="float-left mr-3">
									<Image src={instagram} className="Image-fluid" height={20} />
								</div>
								<div className="d-none d-lg-block">
									<Link to="#" className="text-muted">
										tickitz.id
									</Link>
								</div>
							</li>
							<li className="mb-3">
								<div className="float-left mr-3">
									<Image src={twitter} className="Image-fluid" height={20} />
								</div>
								<div className="d-none d-lg-block">
									<Link to="#" className="text-muted">
										tickitz.id
									</Link>
								</div>
							</li>
							<li className="mb-3">
								<div className="float-left mr-3">
									<Image src={youtube} className="Image-fluid" height={20} />
								</div>
								<div className="d-none d-lg-block">
									<Link to="#" className="text-muted">
										Tickitz Cinema id
									</Link>
								</div>
							</li>
						</ul>
					</Col>
				</Row>
			</Container>
			<div className="py-2">
				<Container className="text-center">
					<p className="text-muted mb-0 py-2">
						&copy; 2020 Tickitz. All Rights Reserved.
					</p>
				</Container>
			</div>
		</footer>
	);
}

export default withRouter(FooterComponent);
