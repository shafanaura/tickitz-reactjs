import React, { Component } from "react";
import { ListGroup } from "react-bootstrap";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createOrder, createSeat } from "../../redux/actions/order";

class MovieDesc extends Component {
  render() {
    const { dataDate } = this.props.order.listOrder;
    const { dataMovie } = this.props.order.listOrder;
    const { dataShowtime } = this.props.order.listOrder;
    const { seatOrder } = this.props.order;
    console.log(this.props);
    return (
      <div>
        <ListGroup variant="flush">
          <ListGroup.Item className="pb-0">
            <p className="float-left text-lg-20 text-color-label">
              Date & time
            </p>
            <p className="float-right text-lg-20">
              {dataDate} at {dataShowtime.times}
            </p>
          </ListGroup.Item>
          <ListGroup.Item className="pb-0">
            <p className="float-left text-lg-20 text-color-label">
              Movie title
            </p>
            <p className="float-right text-lg-20">{dataMovie.title}</p>
          </ListGroup.Item>
          <ListGroup.Item className="pb-0">
            <p className="float-left text-lg-20 text-color-label">
              Cinema name
            </p>
            <p className="float-right text-lg-20">{dataShowtime.cinema}</p>
          </ListGroup.Item>
          <ListGroup.Item className="pb-0">
            <p className="float-left text-lg-20 text-color-label">
              Number of tickets
            </p>
            <p className="float-right text-lg-20">{seatOrder.length} pieces</p>
          </ListGroup.Item>
          <ListGroup.Item className="pb-0">
            <p className="float-left text-lg-20 text-color-label">
              Total payment
            </p>
            <p className="float-right text-link-lg">
              ${dataShowtime.price * seatOrder.length}
            </p>
          </ListGroup.Item>
        </ListGroup>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  order: state.order,
});
const mapDispatchToProps = { createOrder, createSeat };

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(MovieDesc)
);
