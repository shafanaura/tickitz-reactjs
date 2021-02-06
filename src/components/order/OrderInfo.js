import React, { Component } from "react";
import { Card, Col, Image } from "react-bootstrap";
import Moment from "react-moment";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import cineone from "../../assets/images/cineone.png";
import { createOrder } from "../../redux/actions/order";

class OrderInfo extends Component {
	render() {
		const { dataDate } = this.props.order.listOrder;
		const { dataMovie } = this.props.order.listOrder;
		const { dataShowtime } = this.props.order.listOrder;
		console.log(this.props);
		return (
			<Col xs={12} lg={4}>
				<p className="text-display-xs-bold">Order Info</p>
				<Card className="border-0 shadow order-seat">
					<Card.Body className="pb-0">
						<div className="text-center">
							<Image src={dataShowtime.picture} height={40} alt="" />
							<p className="text-link-lg pt-2">{dataShowtime.title}</p>
						</div>
						<div className="d-flex justify-content-between">
							<p className="text-xs text-color-label">Movie selected</p>
							<p className="text-right text-link-xs text-color-title">
								{dataMovie.title}
							</p>
						</div>
						<div className="d-flex justify-content-between">
							<p className="text-xs text-color-label">
								<Moment format="D MMMM YYYY">{dataDate}</Moment>
							</p>
							<p className="text-right text-link-xs text-color-title">
								{dataShowtime.times}
							</p>
						</div>
						<div className="d-flex justify-content-between">
							<p className="text-xs text-color-label">One ticket price</p>
							<p className="text-right text-link-xs text-color-title">
								${dataShowtime.price}
							</p>
						</div>
						<div className="d-flex justify-content-between">
							<p className="text-xs text-color-label">Seat choosed</p>
							<p className="text-right text-link-xs text-color-title">
								C4, C5, C6
							</p>
						</div>
					</Card.Body>
					<hr />
					<Card.Body className="pt-0">
						<p className="float-left text-link-md">Total Payment</p>
						<p className="float-end text-display-xs-bold text-primary text-right">
							${dataShowtime.price}
						</p>
					</Card.Body>
				</Card>
			</Col>
		);
	}
}

const mapStateToProps = (state) => ({
	order: state.order,
});
const mapDispatchToProps = { createOrder };

export default withRouter(
	connect(mapStateToProps, mapDispatchToProps)(OrderInfo),
);
