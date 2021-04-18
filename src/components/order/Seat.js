import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createSeat } from "../../redux/actions/order";
import "./styles.css";

class Seat extends Component {
  state = {
    listSeat: [],
  };
  seatClick = (e) => {
    let { name, checked } = e.target;
    this.setState(
      (e) => {
        let selectedSeat = e.listSeat;
        return (selectedSeat[name] = checked);
      },
      () => {
        this.props.createSeat(
          Object.keys(this.state.listSeat)
            .filter((x) => this.state.listSeat[x])
            .join(", ")
        );
      }
    );
  };
  render() {
    // const favSeats = Object.keys(this.state.listSeat)
    // 	.filter((key) => this.state.listSeat[key])
    // 	.join(", ");

    // const displaySeat = Object.keys(this.state.listSeat).filter(
    // 	(x) => this.state.listSeat[x],
    // );
    const seatNum = [];
    for (let i = 1; i < 15; i++) {
      if (i === 8) {
        seatNum.push(<div className="px-3"></div>);
      }
      seatNum.push(<td className="pl-3">{i}</td>);
    }

    const seat = [];
    for (let i = 1; i < 15; i++) {
      if (i === 8) {
        seat.push(<div className="px-3"></div>);
      }
      seat.push(
        <td>
          <input
            type="checkbox"
            value={`A${i}`}
            name={`A${i}`}
            onChange={this.seatClick}
          />
        </td>
      );
    }

    return (
      <div>
        <table>
          <tbody>
            <tr>
              <td>A</td>
              {seat}
            </tr>
            <tr>
              <td>B</td>
              {seat}
            </tr>
            <tr>
              <td>C</td>
              {seat}
            </tr>
            <tr>
              <td>D</td>
              {seat}
            </tr>
            <tr>
              <td>E</td>
              {seat}
            </tr>
            <tr>
              <td>F</td>
              {seat}
            </tr>
            <tr>
              <td>G</td>
              {seat}
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td></td>
              {seatNum}
            </tr>
          </tbody>
        </table>
        <p className="text-link-lg pt-4">Seating key</p>
        <Row>
          <Col>
            <div className="availableBox float-left mr-3"></div>
            <p>Available</p>
          </Col>
          <Col>
            <div className="selectBox float-left mr-3"></div>
            <p>Selected</p>
          </Col>
          <Col>
            <div className="loveBox float-left mr-3"></div>
            <p>Love nest</p>
          </Col>
          <Col>
            <div className="soldBox float-left mr-3"></div>
            <p>Sold</p>
          </Col>
        </Row>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  order: state.order,
});

const mapDispatchToProps = { createSeat };

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Seat));
