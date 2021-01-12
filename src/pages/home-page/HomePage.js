import React, { Component } from "react";
import { Col, Container, Row, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ComingMovies from "../../components/comingmovie/ComingMovie";
import FooterComponent from "../../components/footer/FooterComponent";
import NavbarAuth from "../../components/navbar/NavbarAuth";
import ShowingComponent from "../../components/showing/ShowingComponent";
import SubscribeComponent from "../../components/subscribe/SubscribeComponent";
import listComingMovie from "../../utils/listComingMovie";
import listMovie from "../../utils/listMovie";
import listMonth from "../../utils/listMonth";
import "./styles.css";

class HomePage extends Component {
	state = {
		listMovie: listMovie,
		listComingMovie: listComingMovie,
	};
	render() {
		return (
			<div>
				<NavbarAuth />
				<Container>
					<section>
						<Row>
							<Col
								md={6}
								sm={12}
								className="flex-column justify-content-center d-flex"
							>
								<p className="text-color-placeholder text-display-xs m-0">
									Nearest Cinema, Newest Movie,
								</p>
								<p className="text-display-lg-bold-56 text-primary m-0">
									Find out now!
								</p>
							</Col>
							<Col md={6} sm={12}>
								<Row md={3} lg={4}>
									<Col style={{ paddingTop: 80 }}>
										<div className="img-gradient">
											<Image
												src="https://wallpapercave.com/wp/wp1816326.jpg"
												className="img-fluid"
											/>
										</div>
									</Col>
									<Col style={{ paddingTop: 40 }}>
										<div className="img-gradient">
											<Image
												src="https://static01.nyt.com/images/2020/02/05/multimedia/05xp-lionking/merlin_165677088_8820db00-d13c-4f15-a5a4-be78b888c5b6-jumbo.jpg?quality=90&auto=webp"
												className="img-fluid"
											/>
										</div>
									</Col>
									<Col>
										<div className="img-gradient">
											<Image
												src="https://wallpapercave.com/wp/wp3703396.jpg"
												className="img-fluid"
											/>
										</div>
									</Col>
								</Row>
							</Col>
						</Row>
					</section>
					<section>
						<Row>
							<Col>
								<p className="text-display-xs-bold bottom-line float-left">
									Now Showing
								</p>
							</Col>
							<Col>
								<Link to="#">
									<p className="text-primary float-right">view all</p>
								</Link>
							</Col>
						</Row>
						<div className="scrollmenu text-center">
							{this.state.listMovie.map((item, index) => {
								return <ShowingComponent data={item} />;
							})}
						</div>
					</section>
					<section>
						<Row>
							<Col>
								<p className="text-display-xs-bold float-left">
									Upcoming Movies
								</p>
							</Col>
							<Col>
								<Link to="#">
									<p className="text-primary float-right">view all</p>
								</Link>
							</Col>
						</Row>
						<div class="scrollmenu ">
							{listMonth.map((item) => {
								return (
									<Button
										variant="outline-primary"
										className="scroll btn-month mr-1"
									>
										{item.month}
									</Button>
								);
							})}
						</div>
						<div className="scrollmenu text-center">
							{this.state.listComingMovie.map((item, index) => {
								return <ComingMovies data={item} />;
							})}
						</div>
					</section>
					<section>
						<SubscribeComponent />
					</section>
					<section>
						<FooterComponent />
					</section>
				</Container>
			</div>
		);
	}
}

export default HomePage;
